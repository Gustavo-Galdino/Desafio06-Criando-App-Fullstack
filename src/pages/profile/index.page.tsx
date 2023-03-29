import { Avatar } from '@/components/avatar'
import { BookContainer, StarContainer } from '@/components/cards/styles'
import { Nav } from '@/components/nav'
import { useApi } from '@/context/apiContext'
import { formatDistanceToNow } from 'date-fns'
import { pt } from 'date-fns/locale'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { BookmarkSimple, BookOpen, Books, Star, UserList } from 'phosphor-react'
import { Container, Main } from '../home/styles'
import {
  CardContainer,
  Box,
  Author,
  Descriptions,
  AvatarContainer,
  UserContainer,
  Infos,
  InfosContent,
} from './styles'

export default function Profile() {
  const { ratings, books, users } = useApi()

  const session = useSession()

  const userRatings = ratings.filter(
    (rating) => rating.user_id === session.data?.user.id,
  )

  const readBooks = userRatings.map((rating) => {
    const book = books.find((book) => book.id === rating.book_id)

    return {
      id: book?.id,
      author: book?.author,
      pages: book?.total_pages,
      category: book?.categories,
    }
  })

  const totalPagesRead = readBooks.reduce((acc, page) => acc + page.pages!, 0)
  const uniqueAuthors = readBooks
    .map((book) => book.author)
    .filter((author, index, array) => array.indexOf(author) === index)

  // const categoryIds = readBooks
  //   .map((book) => book.category?.map((category) => category.categoryId))
  //   .flat()

  // const category = categoryIds.map((categoryId) =>
  //   categories.find((category) => category.id === categoryId),
  // )

  // const categoryName = category.map((name) => name?.name)

  // const categoryCount = categoryName.reduce((count, name) => {
  //   if (name) {
  //     return { ...count, [name]: (count[name] || 0) + 1 }
  //   }
  //   return count
  // }, {})

  // console.log(categoryCount)

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
          <UserContainer>
            <Avatar image={session.data?.user.image!} />
            <p>{session.data?.user.name}</p>
          </UserContainer>

          <span></span>

          <Infos>
            <div>
              <BookOpen size={32} />
              <InfosContent>
                <span>{totalPagesRead}</span>
                <p>Paginas lidas</p>
              </InfosContent>
            </div>
            <div>
              <Books size={32} />
              <InfosContent>
                <span>{userRatings.length}</span>
                <p>Livros avaliados</p>
              </InfosContent>
            </div>
            <div>
              <UserList size={32} />
              <InfosContent>
                <span>{uniqueAuthors.length}</span>
                <p>Autores lidos</p>
              </InfosContent>
            </div>
            <div>
              <BookmarkSimple size={32} />
              <InfosContent>
                <span>Computação</span>
                <p>Categoria mais lida</p>
              </InfosContent>
            </div>
          </Infos>
        </AvatarContainer>
      </Main>
    </Container>
  )
}
