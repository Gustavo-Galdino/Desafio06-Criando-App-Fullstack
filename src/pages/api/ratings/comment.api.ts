import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const session = await getSession({ req })

  if (!session) {
    return res.status(401).end()
  }

  const { rate, description, bookId } = req.body
  const userId = session.user.id

  await prisma.rating.create({
    data: {
      rate,
      description,
      book: {
        connect: { id: bookId },
      },
      user: {
        connect: { id: userId },
      },
    },
  })

  return res.status(201).end()
}
