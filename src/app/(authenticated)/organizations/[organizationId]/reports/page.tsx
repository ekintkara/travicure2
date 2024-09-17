'use client'

import {
  Typography,
  Table,
  DatePicker,
  Select,
  Input,
  Space,
  Row,
  Col,
} from 'antd'
import { FilterOutlined, SearchOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
const { Title, Text } = Typography
const { RangePicker } = DatePicker
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ReportsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [dateRange, setDateRange] = useState<
    [dayjs.Dayjs | null, dayjs.Dayjs | null] | null
  >(null)
  const [actionType, setActionType] = useState<string | null>(null)
  const [village, setVillage] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState<string>('')

  const {
    data: tasks,
    isLoading,
    refetch,
  } = Api.task.findMany.useQuery({
    where: {
      accountId: user?.accounts?.[0]?.id,
      ...(dateRange &&
        dateRange[0] &&
        dateRange[1] && {
          startTime: {
            gte: dateRange[0].toISOString(),
            lte: dateRange[1].toISOString(),
          },
        }),
      ...(actionType && { type: actionType }),
      ...(village && { account: { villages: { some: { name: village } } } }),
    },
    include: { account: { include: { villages: true } } },
  })

  useEffect(() => {
    refetch()
  }, [dateRange, actionType, village, refetch])

  const columns = [
    {
      title: 'Date',
      dataIndex: 'startTime',
      key: 'startTime',
      render: (text: string) => dayjs(text).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      title: 'Action Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Village',
      dataIndex: ['account', 'villages'],
      key: 'village',
      render: (villages: any[]) => villages?.[0]?.name || 'N/A',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ]

  const filteredTasks = tasks?.filter(
    task =>
      task.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.account?.villages?.[0]?.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()),
  )

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Bot Action Logs</Title>
      <Text>
        View and filter logs of actions taken by your bot to track its
        performance and identify issues.
      </Text>

      <Space
        direction="vertical"
        size="large"
        style={{ width: '100%', marginTop: 24 }}
      >
        <Row gutter={16}>
          <Col xs={24} sm={12} md={6}>
            <RangePicker
              style={{ width: '100%' }}
              onChange={dates => setDateRange(dates)}
            />
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Select
              style={{ width: '100%' }}
              placeholder="Filter by Action Type"
              allowClear
              onChange={value => setActionType(value)}
            >
              <Select.Option value="BUILD">Build</Select.Option>
              <Select.Option value="UPGRADE">Upgrade</Select.Option>
              <Select.Option value="TRAIN">Train</Select.Option>
              <Select.Option value="ATTACK">Attack</Select.Option>
            </Select>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Select
              style={{ width: '100%' }}
              placeholder="Filter by Village"
              allowClear
              onChange={value => setVillage(value)}
            >
              {user?.accounts?.[0]?.villages?.map(village => (
                <Select.Option key={village.id} value={village.name}>
                  {village.name}
                </Select.Option>
              ))}
            </Select>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Input
              placeholder="Search logs"
              prefix={<SearchOutlined />}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </Col>
        </Row>

        <Table
          columns={columns}
          dataSource={filteredTasks}
          loading={isLoading}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </Space>
    </PageLayout>
  )
}
