'use client'

import { Typography, Card, Row, Col, Statistic, List, Spin } from 'antd'
import {
  DashboardOutlined,
  RobotOutlined,
  FieldTimeOutlined,
  BuildOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
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

  const { data: accounts, isLoading: isLoadingAccounts } =
    Api.account.findMany.useQuery({
      where: { userId: user?.id },
      include: { villages: true, tasks: true },
    })

  const { data: recentTasks, isLoading: isLoadingTasks } =
    Api.task.findMany.useQuery({
      where: { account: { userId: user?.id } },
      orderBy: { dateCreated: 'desc' },
      take: 5,
      include: { account: true },
    })

  if (isLoadingAccounts || isLoadingTasks) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  const totalVillages =
    accounts?.reduce(
      (sum, account) => sum + (account.villages?.length || 0),
      0,
    ) || 0
  const totalTasks =
    accounts?.reduce((sum, account) => sum + (account.tasks?.length || 0), 0) ||
    0

  return (
    <PageLayout layout="narrow">
      <Title level={2}>
        <DashboardOutlined /> Travian Bot Dashboard
      </Title>
      <Text>
        Welcome to your Travian bot activity overview. Here you can quickly
        assess the current state of your automated gameplay.
      </Text>

      <Row gutter={16} style={{ marginTop: '24px' }}>
        <Col xs={24} sm={12} md={8}>
          <Card>
            <Statistic
              title="Total Accounts"
              value={accounts?.length || 0}
              prefix={<RobotOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card>
            <Statistic
              title="Total Villages"
              value={totalVillages}
              prefix={<BuildOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card>
            <Statistic
              title="Total Tasks"
              value={totalTasks}
              prefix={<FieldTimeOutlined />}
            />
          </Card>
        </Col>
      </Row>

      <Card style={{ marginTop: '24px' }}>
        <Title level={4}>Recent Bot Actions</Title>
        <List
          dataSource={recentTasks}
          renderItem={task => (
            <List.Item>
              <List.Item.Meta
                title={`${task.type} - ${task.status}`}
                description={`Account: ${task.account?.username} | Start: ${dayjs(task.startTime).format('YYYY-MM-DD HH:mm')} | End: ${dayjs(task.endTime).format('YYYY-MM-DD HH:mm')}`}
              />
            </List.Item>
          )}
        />
      </Card>
    </PageLayout>
  )
}
