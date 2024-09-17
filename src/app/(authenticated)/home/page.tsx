'use client'

import { Typography, Space, Card } from 'antd'
import {
  InfoCircleOutlined,
  RocketOutlined,
  TeamOutlined,
} from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  return (
    <PageLayout layout="narrow">
      <Space
        direction="vertical"
        size="large"
        style={{ width: '100%', textAlign: 'center' }}
      >
        <Title level={1}>Welcome to the Travian Bot Manager</Title>
        <Paragraph>
          This application helps you manage and optimize your Travian gameplay
          using advanced AI and automation.
        </Paragraph>

        <Space
          direction="horizontal"
          size="large"
          wrap
          style={{ justifyContent: 'center' }}
        >
          <Card
            style={{ width: 300 }}
            cover={
              <InfoCircleOutlined style={{ fontSize: 48, marginTop: 24 }} />
            }
            hoverable
          >
            <Card.Meta
              title="How It Works"
              description="Our AI-powered bot analyzes your villages, resources, and tasks to make optimal decisions for your gameplay."
            />
          </Card>

          <Card
            style={{ width: 300 }}
            cover={<RocketOutlined style={{ fontSize: 48, marginTop: 24 }} />}
            hoverable
          >
            <Card.Meta
              title="Key Features"
              description="Automated resource management, building upgrades, troop training, and attack planning to maximize your efficiency."
            />
          </Card>

          <Card
            style={{ width: 300 }}
            cover={<TeamOutlined style={{ fontSize: 48, marginTop: 24 }} />}
            hoverable
          >
            <Card.Meta
              title="Get Started"
              description="Configure your bot, set up your accounts, and let the AI take care of your Travian empire."
            />
          </Card>
        </Space>

        <Paragraph>
          To begin, navigate to the Bot Configuration page to set up your
          preferences and strategies.
        </Paragraph>

        <Space>
          <a
            onClick={() =>
              router.push(
                `/organizations/${params.organizationId}/bot-configuration`,
              )
            }
          >
            Go to Bot Configuration
          </a>
        </Space>
      </Space>
    </PageLayout>
  )
}
