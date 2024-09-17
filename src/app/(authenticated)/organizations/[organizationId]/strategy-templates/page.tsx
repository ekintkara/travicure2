'use client'

import { Prisma } from '@prisma/client'
import { useState } from 'react'
import {
  Typography,
  Card,
  Button,
  Input,
  List,
  Modal,
  Form,
  Space,
  Row,
  Col,
} from 'antd'
import {
  PlusOutlined,
  ShareAltOutlined,
  SaveOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function StrategyTemplatesPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false)
  const [newTemplateName, setNewTemplateName] = useState('')
  const [newTemplateDescription, setNewTemplateDescription] = useState('')

  const {
    data: templates,
    isLoading,
    refetch,
  } = Api.strategyTemplate.findMany.useQuery({
    where: { userId: user?.id },
    orderBy: { dateCreated: 'desc' },
  })

  const { data: communityTemplates, isLoading: isLoadingCommunity } =
    Api.strategyTemplate.findMany.useQuery({
      where: { isPublic: true },
      orderBy: { dateCreated: 'desc' },
    })

  const { mutateAsync: createTemplate } =
    Api.strategyTemplate.create.useMutation()
  const { mutateAsync: deleteTemplate } =
    Api.strategyTemplate.delete.useMutation()

  const handleCreateTemplate = async () => {
    try {
      await createTemplate({
        data: {
          name: newTemplateName,
          description: newTemplateDescription,
          userId: user?.id,
          isPublic: false,
        },
      })
      enqueueSnackbar('Template created successfully', { variant: 'success' })
      setIsCreateModalVisible(false)
      setNewTemplateName('')
      setNewTemplateDescription('')
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to create template', { variant: 'error' })
    }
  }

  const handleDeleteTemplate = async (id: string) => {
    try {
      await deleteTemplate({ where: { id } })
      enqueueSnackbar('Template deleted successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to delete template', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Strategy Templates</Title>
      <Paragraph>
        Create, manage, and browse strategy templates for your bot
        configurations.
      </Paragraph>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card
            title="My Templates"
            extra={
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={() => setIsCreateModalVisible(true)}
              >
                Create Template
              </Button>
            }
          >
            <List
              loading={isLoading}
              dataSource={templates}
              renderItem={(item: any) => (
                <List.Item
                  actions={[
                    <Button
                      key="delete"
                      icon={<DeleteOutlined />}
                      onClick={() => handleDeleteTemplate(item.id)}
                    >
                      Delete
                    </Button>,
                  ]}
                >
                  <List.Item.Meta
                    title={item.name}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Community Templates">
            <List
              loading={isLoadingCommunity}
              dataSource={communityTemplates}
              renderItem={(item: any) => (
                <List.Item>
                  <List.Item.Meta
                    title={item.name}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>

      <Modal
        title="Create New Template"
        visible={isCreateModalVisible}
        onOk={handleCreateTemplate}
        onCancel={() => setIsCreateModalVisible(false)}
      >
        <Form layout="vertical">
          <Form.Item label="Template Name">
            <Input
              value={newTemplateName}
              onChange={e => setNewTemplateName(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Description">
            <Input.TextArea
              value={newTemplateDescription}
              onChange={e => setNewTemplateDescription(e.target.value)}
            />
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
