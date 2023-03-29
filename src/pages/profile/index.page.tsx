import { Avatar } from '@/components/avatar'
import { BookContainer, StarContainer } from '@/components/cards/styles'
import { Nav } from '@/components/nav'
import { useApi } from '@/context/apiContext'
import { formatDistanceToNow } from 'date-fns'
import { pt } from 'date-fns/locale'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { Star } from 'phosphor-react'
import { Container, Main } from '../home/styles'
import {
  CardContainer,
  Box,
  Author,
  Descriptions,
  AvatarContainer,
} from './styles'

export default function Profile() {
  const { ratings, books, users } = useApi()

  const session = useSession()

  const userRatings = ratings.filter(
    (rating) => rating.user_id === session.data?.user.id,
  )

  return (
    <Container>
      <Nav />

      <Main>
        <CardContainer>
          {userRatings.map((rating, i) => {
            const book = books.find((book) => book.id === rating.book_id)
            const user = users.find((user) => user.id === rating.user_id)
            if (!book || !user) return null
            return (
              <article key={rating.id}>
                <span>
                  {formatDistanceToNow(new Date(rating.created_at), {
                    addSuffix: true,
                    locale: pt,
                  })}
                </span>
                <Box>
                  <BookContainer>
                    <Image
                      src={`${book.cover_url}`}
                      alt=""
                      width={108}
                      height={152}
                    />

                    <Author>
                      <div>
                        <h2>{book.name}</h2>
                        <p>{book.author}</p>
                      </div>
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
                    </Author>
                  </BookContainer>
                  <Descriptions>{book.summary}</Descriptions>
                </Box>
              </article>
            )
          })}
        </CardContainer>

        <AvatarContainer>
          <div>
            <Avatar image={session.data?.user.image!} />
            <p>{session.data?.user.name}</p>
          </div>

          <div>
            <div>
              <p>3853</p>
              <p>Paginas lidas</p>
            </div>
            <div>
              <p>10</p>
              <p>Livros avaliados</p>
            </div>
            <div>
              <p>8</p>
              <p>Autores lidos</p>
            </div>
            <div>
              <p>Computação</p>
              <p>Categoria mais lida</p>
            </div>
          </div>
        </AvatarContainer>
      </Main>
    </Container>
  )
}
