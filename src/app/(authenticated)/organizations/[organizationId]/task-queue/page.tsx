'use client'

import { Prisma } from '@prisma/client'
import {
  Typography,
  List,
  Button,
  Modal,
  Form,
  Input,
  Select,
  Space,
} from 'antd'
import {
  PlusOutlined,
  DeleteOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from '@ant-design/icons'
import { useState, useEffect } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function TaskQueuePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [tasks, setTasks] = useState<Prisma.TaskGetPayload<{}>[]>([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()

  const {
    data: tasksData,
    isLoading,
    refetch,
  } = Api.task.findMany.useQuery({
    where: { accountId: user?.accounts?.[0]?.id },
    orderBy: { startTime: 'asc' },
  })

  const { mutateAsync: createTask } = Api.task.create.useMutation()
  const { mutateAsync: updateTask } = Api.task.update.useMutation()
  const { mutateAsync: deleteTask } = Api.task.delete.useMutation()

  useEffect(() => {
    if (tasksData) {
      setTasks(tasksData)
    }
  }, [tasksData])

  const handleAddTask = () => {
    setIsModalVisible(true)
  }

  const handleModalOk = async () => {
    try {
      const values = await form.validateFields()
      await createTask({
        data: {
          ...values,
          accountId: user?.accounts?.[0]?.id as string,
          status: 'PENDING',
        },
      })
      enqueueSnackbar('Task added successfully', { variant: 'success' })
      setIsModalVisible(false)
      form.resetFields()
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to add task', { variant: 'error' })
    }
  }

  const handleModalCancel = () => {
    setIsModalVisible(false)
    form.resetFields()
  }

  const handleDeleteTask = async (id: string) => {
    try {
      await deleteTask({ where: { id } })
      enqueueSnackbar('Task deleted successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to delete task', { variant: 'error' })
    }
  }

  const handleMoveTask = async (id: string, direction: 'up' | 'down') => {
    const currentIndex = tasks.findIndex(task => task.id === id)
    if (
      (direction === 'up' && currentIndex === 0) ||
      (direction === 'down' && currentIndex === tasks.length - 1)
    ) {
      return
    }

    const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1
    const newTasks = [...tasks]
    const [movedTask] = newTasks.splice(currentIndex, 1)
    newTasks.splice(newIndex, 0, movedTask)

    setTasks(newTasks)

    try {
      await updateTask({
        where: { id },
        data: { startTime: newTasks[newIndex].startTime },
      })
      enqueueSnackbar('Task order updated successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to update task order', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Task Queue</Title>
      <Text>
        Manage your bot's upcoming tasks and adjust priorities as needed.
      </Text>

      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={handleAddTask}
        style={{ marginTop: 16, marginBottom: 16 }}
      >
        Add Task
      </Button>

      <List
        loading={isLoading}
        dataSource={tasks}
        renderItem={(task, index) => (
          <List.Item
            actions={[
              <Button
                key="up"
                icon={<ArrowUpOutlined />}
                onClick={() => handleMoveTask(task.id, 'up')}
                disabled={index === 0}
              />,
              <Button
                key="down"
                icon={<ArrowDownOutlined />}
                onClick={() => handleMoveTask(task.id, 'down')}
                disabled={index === tasks.length - 1}
              />,
              <Button
                key="delete"
                icon={<DeleteOutlined />}
                onClick={() => handleDeleteTask(task.id)}
                danger
              />,
            ]}
          >
            <List.Item.Meta
              title={task.type}
              description={
                <Space direction="vertical">
                  <Text>Status: {task.status}</Text>
                  <Text>
                    Start: {dayjs(task.startTime).format('YYYY-MM-DD HH:mm')}
                  </Text>
                  <Text>
                    End: {dayjs(task.endTime).format('YYYY-MM-DD HH:mm')}
                  </Text>
                </Space>
              }
            />
          </List.Item>
        )}
      />

      <Modal
        title="Add New Task"
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="type"
            label="Task Type"
            rules={[{ required: true, message: 'Please select a task type' }]}
          >
            <Select>
              <Select.Option value="BUILD">Build</Select.Option>
              <Select.Option value="UPGRADE">Upgrade</Select.Option>
              <Select.Option value="TRAIN">Train</Select.Option>
              <Select.Option value="ATTACK">Attack</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="startTime"
            label="Start Time"
            rules={[{ required: true, message: 'Please select a start time' }]}
          >
            <Input type="datetime-local" />
          </Form.Item>
          <Form.Item
            name="endTime"
            label="End Time"
            rules={[{ required: true, message: 'Please select an end time' }]}
          >
            <Input type="datetime-local" />
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
