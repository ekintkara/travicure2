'use client'

import { Prisma } from '@prisma/client'
import { Typography, Card, Row, Col, Spin, Table } from 'antd'
import { HomeOutlined, BuildOutlined, TeamOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function VillageOverviewPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: accounts, isLoading: isLoadingAccounts } =
    Api.account.findMany.useQuery({
      where: { userId: user?.id },
      include: {
        villages: {
          include: { resources: true, buildings: true, troops: true },
        },
      },
    })

  if (isLoadingAccounts) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  const renderVillageCards = () => {
    return accounts?.map(account =>
      account.villages?.map(village => (
        <Col
          key={village.id}
          xs={24}
          sm={12}
          md={8}
          lg={6}
          style={{ marginBottom: '16px' }}
        >
          <Card
            title={
              <>
                <HomeOutlined /> {village.name}
              </>
            }
            extra={
              <Text>
                ({village.coordinateX}|{village.coordinateY})
              </Text>
            }
          >
            <Text strong>Resources:</Text>
            <ul>
              {village.resources?.map(resource => (
                <li key={resource.id}>
                  {resource.type}: {resource.quantity.toString()}/
                  {resource.capacity.toString()}
                </li>
              ))}
            </ul>
            <Text strong>Buildings:</Text>
            <ul>
              {village.buildings?.map(building => (
                <li key={building.id}>
                  <BuildOutlined /> {building.type} (Level{' '}
                  {building.level.toString()})
                </li>
              ))}
            </ul>
            <Text strong>Troops:</Text>
            <ul>
              {village.troops?.map(troop => (
                <li key={troop.id}>
                  <TeamOutlined /> {troop.type}: {troop.quantity.toString()}
                </li>
              ))}
            </ul>
          </Card>
        </Col>
      )),
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Village Overview</Title>
      <Text>
        View detailed information about your Travian villages, including
        resource production, building levels, and troop counts.
      </Text>

      <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
        {renderVillageCards()}
      </Row>
    </PageLayout>
  )
}
