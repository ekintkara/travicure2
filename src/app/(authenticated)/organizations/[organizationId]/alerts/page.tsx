'use client'

import { useState, useEffect } from 'react'
import {
  Typography,
  Form,
  Input,
  Select,
  Button,
  List,
  Switch,
  Space,
} from 'antd'
import { BellOutlined, DeleteOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function AlertsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [alerts, setAlerts] = useState<any[]>([])
  const [form] = Form.useForm()

  const {
    data: alertsData,
    isLoading,
    refetch,
  } = Api.task.findMany.useQuery({
    where: { accountId: user?.id, type: 'ALERT' },
  })

  const { mutateAsync: createAlert } = Api.task.create.useMutation()
  const { mutateAsync: deleteAlert } = Api.task.delete.useMutation()
  const { mutateAsync: updateAlert } = Api.task.update.useMutation()

  useEffect(() => {
    if (alertsData) {
      setAlerts(alertsData)
    }
  }, [alertsData])

  const handleCreateAlert = async (values: any) => {
    try {
      await createAlert({
        data: {
          type: 'ALERT',
          status: 'ACTIVE',
          startTime: new Date().toISOString(),
          endTime: new Date().toISOString(),
          accountId: user?.id || '',
          ...values,
        },
      })
      enqueueSnackbar('Alert created successfully', { variant: 'success' })
      refetch()
      form.resetFields()
    } catch (error) {
      enqueueSnackbar('Failed to create alert', { variant: 'error' })
    }
  }

  const handleDeleteAlert = async (id: string) => {
    try {
      await deleteAlert({ where: { id } })
      enqueueSnackbar('Alert deleted successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to delete alert', { variant: 'error' })
    }
  }

  const handleToggleAlert = async (id: string, newStatus: string) => {
    try {
      await updateAlert({
        where: { id },
        data: { status: newStatus },
      })
      enqueueSnackbar('Alert status updated', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to update alert status', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>
        <BellOutlined /> Custom Alerts
      </Title>
      <Text>Set up and manage custom alerts for specific in-game events.</Text>

      <Form
        form={form}
        onFinish={handleCreateAlert}
        layout="vertical"
        style={{ marginTop: 24 }}
      >
        <Form.Item name="type" label="Event Type" rules={[{ required: true }]}>
          <Select>
            <Select.Option value="RESOURCE_LOW">Low Resources</Select.Option>
            <Select.Option value="ATTACK_INCOMING">
              Incoming Attack
            </Select.Option>
            <Select.Option value="BUILDING_COMPLETE">
              Building Complete
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="notificationMethod"
          label="Notification Method"
          rules={[{ required: true }]}
        >
          <Select mode="multiple">
            <Select.Option value="EMAIL">Email</Select.Option>
            <Select.Option value="SMS">SMS</Select.Option>
            <Select.Option value="PUSH">Push Notification</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create Alert
          </Button>
        </Form.Item>
      </Form>

      <List
        header={<Title level={4}>Configured Alerts</Title>}
        dataSource={alerts}
        renderItem={alert => (
          <List.Item
            actions={[
              <Switch
                key="toggle"
                checked={alert.status === 'ACTIVE'}
                onChange={checked =>
                  handleToggleAlert(alert.id, checked ? 'ACTIVE' : 'INACTIVE')
                }
              />,
              <Button
                key="delete"
                type="text"
                danger
                icon={<DeleteOutlined />}
                onClick={() => handleDeleteAlert(alert.id)}
              />,
            ]}
          >
            <List.Item.Meta
              title={alert.type.replace('_', ' ')}
              description={
                <Space direction="vertical">
                  <Text>Status: {alert.status}</Text>
                  <Text>
                    Notification Methods: {alert.notificationMethod?.join(', ')}
                  </Text>
                </Space>
              }
            />
          </List.Item>
        )}
      />
    </PageLayout>
  )
}
