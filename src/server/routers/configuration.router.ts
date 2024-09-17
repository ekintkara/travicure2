import { Trpc } from '@/core/trpc/server'
import { TRPCError } from '@trpc/server'

export const ConfigurationRouter = Trpc.createRouter({
  getPublic: Trpc.procedurePublic.query(async ({ ctx }) => {
    try {
      const variables = process.env ?? {}

      const variablesPublic: Record<string, any> = {}

      for (const [key, value] of Object.entries(variables)) {
        const isPublic = key.startsWith('PUBLIC_')

        if (isPublic) {
          variablesPublic[key] = value
        }
      }

      return variablesPublic
    } catch (error) {
      console.error('Error in getPublic procedure:', error)
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'An unexpected error occurred',
      })
    }
  }),
})
