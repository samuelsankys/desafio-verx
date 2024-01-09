import { PrismaClient } from '@prisma/client'

export default {
  prisma: new PrismaClient({
    log: ['query'],
  }),
}
