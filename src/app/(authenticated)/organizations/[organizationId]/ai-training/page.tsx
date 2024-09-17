'use client'

import { Typography, Upload, Button, Form, Select, Space, Card } from 'antd'
import {
  UploadOutlined,
  RobotOutlined,
  FileTextOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function AITrainingPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [fileList, setFileList] = useState<any[]>([])
  const [playstyle, setPlaystyle] = useState<string>('')
  const { mutateAsync: upload } = useUploadPublic()
  const { mutateAsync: loadFile } = Api.rag.loadFile.useMutation()
  const { mutateAsync: fineTuneAI } = Api.ai.generateText.useMutation()

  const handleUpload = async (file: File) => {
    try {
      const { url } = await upload({ file })
      const { key } = await loadFile({ url })
      enqueueSnackbar('File uploaded and processed successfully', {
        variant: 'success',
      })
      return key
    } catch (error) {
      enqueueSnackbar('Error uploading file', { variant: 'error' })
      return null
    }
  }

  const handleSubmit = async () => {
    if (fileList.length === 0) {
      enqueueSnackbar('Please upload at least one file', { variant: 'error' })
      return
    }

    if (!playstyle) {
      enqueueSnackbar('Please select a playstyle', { variant: 'error' })
      return
    }

    try {
      const uploadPromises = fileList.map(file =>
        handleUpload(file.originFileObj),
      )
      const keys = await Promise.all(uploadPromises)
      const validKeys = keys.filter(key => key !== null)

      if (validKeys.length > 0) {
        await fineTuneAI({
          prompt: `Fine-tune the AI model with the following playstyle: ${playstyle}`,
          tags: validKeys,
        })
        enqueueSnackbar('AI model fine-tuned successfully', {
          variant: 'success',
        })
      } else {
        enqueueSnackbar('No valid files were uploaded', { variant: 'error' })
      }
    } catch (error) {
      enqueueSnackbar('Error fine-tuning AI model', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Card>
        <Title level={2}>AI Training</Title>
        <Text>
          Upload game logs and strategy guides to train the AI and fine-tune it
          to your preferred playstyle.
        </Text>

        <Form layout="vertical" style={{ marginTop: '2rem' }}>
          <Form.Item label="Upload Files">
            <Upload
              beforeUpload={() => false}
              onChange={({ fileList }) => setFileList(fileList)}
              multiple
            >
              <Button icon={<UploadOutlined />}>Select Files</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="Select Playstyle">
            <Select
              style={{ width: '100%' }}
              placeholder="Choose your preferred playstyle"
              onChange={value => setPlaystyle(value)}
            >
              <Select.Option value="aggressive">Aggressive</Select.Option>
              <Select.Option value="defensive">Defensive</Select.Option>
              <Select.Option value="economic">Economic</Select.Option>
              <Select.Option value="balanced">Balanced</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Space>
              <Button
                type="primary"
                onClick={handleSubmit}
                icon={<RobotOutlined />}
              >
                Train AI
              </Button>
              <Button
                onClick={() =>
                  router.push(`/organizations/${params.organizationId}/home`)
                }
                icon={<FileTextOutlined />}
              >
                View Strategy Templates
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </PageLayout>
  )
}
