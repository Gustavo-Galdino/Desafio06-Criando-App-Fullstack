import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  try {
    const { name } = req.query

    const books = await prisma.book.findMany({
      where: {
        name: {
          contains: name as string,
        },
      },
      include: {
        ratings: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    })

    return res.status(200).json(books)
  } catch (error) {
    console.error(error)
    return res.status(500).end()
  }
}
