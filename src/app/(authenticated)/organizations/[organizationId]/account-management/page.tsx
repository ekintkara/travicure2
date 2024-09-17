'use client'

import { Prisma } from '@prisma/client'
import { useState, useEffect } from 'react'
import { Typography, Table, Button, Modal, Form, Input, Space } from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function AccountManagementPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [accounts, setAccounts] = useState<Prisma.AccountGetPayload<{}>[]>([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editingAccount, setEditingAccount] =
    useState<Prisma.AccountGetPayload<{}> | null>(null)
  const [form] = Form.useForm()

  const {
    data: accountsData,
    isLoading,
    refetch,
  } = Api.account.findMany.useQuery({
    where: { userId: user?.id },
  })

  const { mutateAsync: createAccount } = Api.account.create.useMutation()
  const { mutateAsync: updateAccount } = Api.account.update.useMutation()
  const { mutateAsync: deleteAccount } = Api.account.delete.useMutation()

  useEffect(() => {
    if (accountsData) {
      setAccounts(accountsData)
    }
  }, [accountsData])

  const showModal = (account?: Prisma.AccountGetPayload<{}>) => {
    setEditingAccount(account || null)
    form.resetFields()
    if (account) {
      form.setFieldsValue(account)
    }
    setIsModalVisible(true)
  }

  const handleOk = async () => {
    try {
      const values = await form.validateFields()
      if (editingAccount) {
        await updateAccount({ where: { id: editingAccount.id }, data: values })
        enqueueSnackbar('Account updated successfully', { variant: 'success' })
      } else {
        await createAccount({ data: { ...values, userId: user!.id } })
        enqueueSnackbar('Account created successfully', { variant: 'success' })
      }
      setIsModalVisible(false)
      refetch()
    } catch (error) {
      enqueueSnackbar('Error saving account', { variant: 'error' })
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteAccount({ where: { id } })
      enqueueSnackbar('Account deleted successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Error deleting account', { variant: 'error' })
    }
  }

  const columns = [
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: Prisma.AccountGetPayload<{}>) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} onClick={() => showModal(record)}>
            Edit
          </Button>
          <Button
            icon={<DeleteOutlined />}
            danger
            onClick={() => handleDelete(record.id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Account Management</Title>
      <Text>Manage your Travian game accounts for the bot to operate.</Text>

      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => showModal()}
        style={{ marginBottom: 16, marginTop: 16 }}
      >
        Add Account
      </Button>

      <Table
        dataSource={accounts}
        columns={columns}
        rowKey="id"
        loading={isLoading}
      />

      <Modal
        title={editingAccount ? 'Edit Account' : 'Add Account'}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: 'Please input the username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Please input the email!' },
              { type: 'email', message: 'Please enter a valid email!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="passwordHash"
            label="Password"
            rules={[{ required: true, message: 'Please input the password!' }]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
