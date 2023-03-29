import {
  BookContainer,
  Descriptions,
  StarContainer,
} from '@/components/cards/styles'
import { useApi } from '@/context/apiContext'
import { formatDistanceToNow } from 'date-fns'
import { pt } from 'date-fns/locale'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { CaretRight, Star } from 'phosphor-react'
import { Box, Author, ReadingContainer } from './styles'

export function LastReading() {
  const { ratings, books, users } = useApi()

  const session = useSession()

  const userRatings = ratings.filter(
    (rating) => rating.user_id === session.data?.user.id,
  )

  return (
    <ReadingContainer>
      <div>
        <h5>Sua última Leitura</h5>
        <button>
          Ver todas <CaretRight size={16} />
        </button>
      </div>
      {userRatings.slice(0, 1).map((rating, i) => {
        const book = books.find((book) => book.id === rating.book_id)
        const user = users.find((user) => user.id === rating.user_id)
        if (!book || !user) return null
        return (
          <Box key={rating.id}>
            <BookContainer>
              <Image
                src={`${book.cover_url}`}
                alt=""
                width={108}
                height={152}
              />
              <div>
                <Author>
                  <div>
                    <span>
                      {formatDistanceToNow(new Date(rating.created_at), {
                        addSuffix: true,
                        locale: pt,
                      })}
                    </span>
                    <StarContainer>
                      {[...Array(5)].map((_, index) => {
                        const totalRatings = book.ratings.reduce(
                          (acc, rating) => acc + rating.rate,
                          0,
                        )
                        const averageRating = Math.round(
                          totalRatings / book.ratings.length,
                        )
                        const weight =
                          index < averageRating ? 'fill' : undefined
                        return <Star key={index} weight={weight} />
                      })}
                    </StarContainer>
                  </div>

                  <h2>{book.name}</h2>
                  <p>{book.author}</p>
                </Author>
                <Descriptions>{book.summary}</Descriptions>
              </div>
            </BookContainer>
          </Box>
        )
      })}
    </ReadingContainer>
  )
}
