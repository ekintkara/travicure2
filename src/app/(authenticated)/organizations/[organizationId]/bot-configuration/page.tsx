'use client'

import { useState, useEffect } from 'react'
import {
  Typography,
  Form,
  Input,
  InputNumber,
  Select,
  Button,
  Space,
  Card,
  Row,
  Col,
} from 'antd'
import { SettingOutlined, BuildOutlined, SaveOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function BotConfigurationPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [form] = Form.useForm()

  const { data: account, isLoading } = Api.account.findFirst.useQuery({
    where: { userId: user?.id },
    include: { villages: true },
  })

  const { mutateAsync: updateAccount } = Api.account.update.useMutation()

  const [botConfig, setBotConfig] = useState({
    resourcePriority: 'wood',
    buildingUpgradeSequence: [],
  })

  useEffect(() => {
    if (account) {
      form.setFieldsValue({
        resourcePriority: account.resourcePriority || 'wood',
        buildingUpgradeSequence: account.buildingUpgradeSequence || [],
      })
      setBotConfig({
        resourcePriority: account.resourcePriority || 'wood',
        buildingUpgradeSequence: account.buildingUpgradeSequence || [],
      })
    }
  }, [account])

  const onFinish = async (values: any) => {
    try {
      await updateAccount({
        where: { id: account?.id },
        data: {
          resourcePriority: values.resourcePriority,
          buildingUpgradeSequence: values.buildingUpgradeSequence,
        },
      })
      enqueueSnackbar('Bot configuration saved successfully', {
        variant: 'success',
      })
    } catch (error) {
      enqueueSnackbar('Failed to save bot configuration', { variant: 'error' })
    }
  }

  if (isLoading) {
    return <PageLayout layout="narrow">Loading...</PageLayout>
  }

  return (
    <PageLayout layout="narrow">
      <Card>
        <Title level={2}>
          <SettingOutlined /> Bot Configuration
        </Title>
        <Paragraph>
          Customize your Travian bot's behavior to align with your gameplay
          strategy. Set resource management priorities and configure building
          upgrade sequences.
        </Paragraph>

        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          initialValues={botConfig}
        >
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                name="resourcePriority"
                label="Resource Management Priority"
                rules={[
                  {
                    required: true,
                    message: 'Please select a resource priority',
                  },
                ]}
              >
                <Select>
                  <Option value="wood">Wood</Option>
                  <Option value="clay">Clay</Option>
                  <Option value="iron">Iron</Option>
                  <Option value="crop">Crop</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Form.List name="buildingUpgradeSequence">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field, index) => (
                  <Space
                    key={field.key}
                    style={{ display: 'flex', marginBottom: 8 }}
                    align="baseline"
                  >
                    <Form.Item
                      {...field}
                      label={`Building ${index + 1}`}
                      rules={[
                        {
                          required: true,
                          message:
                            'Please input building name or delete this field',
                        },
                      ]}
                    >
                      <Input placeholder="Building name" />
                    </Form.Item>
                    <Form.Item
                      {...field}
                      label="Target Level"
                      rules={[
                        {
                          required: true,
                          message: 'Please input target level',
                        },
                      ]}
                    >
                      <InputNumber min={1} max={20} />
                    </Form.Item>
                    <Button
                      onClick={() => remove(field.name)}
                      type="link"
                      danger
                    >
                      Delete
                    </Button>
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<BuildOutlined />}
                  >
                    Add Building to Upgrade Sequence
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>

          <Form.Item>
            <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
              Save Configuration
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </PageLayout>
  )
}
