import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import {
  Author,
  Header,
  BookContainer,
  Box,
  Descriptions,
  StarContainer,
  Content,
} from './styles'

import { Avatar } from '../avatar'
import { Star } from 'phosphor-react'
import { useApi } from '@/context/apiContext'
import { BookDetails } from '../bookDetails'
import { formatDistanceToNow } from 'date-fns'
import { pt } from 'date-fns/locale'

interface CardsProps {
  short: boolean
  popularView?: boolean
}

export function Cards({ short = true, popularView = false }: CardsProps) {
  const { books, popularBooks, categories, ratings, users } = useApi()

  function handleCaptureCategory(id: string) {
    const selectedBook = books.find((book) => book.id === id)
    const selectedCategories = selectedBook?.categories?.map((category) => {
      const foundCategory = categories.find(
        (cate) => cate.id === category.categoryId,
      )
      return foundCategory ? foundCategory.name : ''
    })

    return selectedCategories?.join(',')
  }

  return (
    <>
      {popularView ? (
        <>
          {popularBooks?.map((book, i) => (
            <Dialog.Root key={`${book.id} ${i}`}>
              <Dialog.Trigger asChild>
                <Box variant={!short ? 'short' : 'default'}>
                  <BookContainer variant={!short ? 'short' : 'default'}>
                    <Image
                      src={`${book.cover_url}`}
                      alt=""
                      width={64}
                      height={94}
                    />
                    <Content>
                      <Author variant={!short ? 'short' : 'default'}>
                        <h2>{book.name}</h2>
                        <p>{book.author}</p>
                      </Author>

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
                    </Content>
                  </BookContainer>
                </Box>
              </Dialog.Trigger>
              <BookDetails
                author={book.author}
                image={book.cover_url}
                name={book.name}
                totalPages={book.total_pages!}
                category={handleCaptureCategory(book.id)}
                bookId={book.id}
                rate={
                  <StarContainer>
                    {[...Array(5)].map((_, index) => {
                      const totalRatings = book.ratings.reduce(
                        (acc, rating) => acc + rating.rate,
                        0,
                      )
                      const averageRating = Math.round(
                        totalRatings / book.ratings.length,
                      )
                      const weight = index < averageRating ? 'fill' : undefined
                      return <Star key={index} weight={weight} />
                    })}
                  </StarContainer>
                }
              />
            </Dialog.Root>
          ))}
        </>
      ) : (
        <>
          {ratings.map((rating, i) => {
            const book = books.find((book) => book.id === rating.book_id)
            const user = users.find((user) => user.id === rating.user_id)
            if (!book || !user) return null
            return (
              <Dialog.Root key={`${book.id} ${i}`}>
                <Dialog.Trigger asChild>
                  <Box>
                    <>
                      <Header>
                        <div>
                          <Avatar image={user?.image} />
                          <div>
                            {user.name}
                            <span>
                              {formatDistanceToNow(
                                new Date(rating.created_at),
                                { addSuffix: true, locale: pt },
                              )}
                            </span>
                          </div>
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
                      </Header>
                    </>

                    <BookContainer>
                      <Image
                        src={`${book.cover_url}`}
                        alt=""
                        width={108}
                        height={152}
                      />
                      <div>
                        <Author>
                          <h2>{book.name}</h2>
                          <p>{book.author}</p>
                        </Author>
                        <Descriptions>{book.summary}</Descriptions>
                      </div>
                    </BookContainer>
                  </Box>
                </Dialog.Trigger>
                <BookDetails
                  author={book.author}
                  image={book.cover_url}
                  name={book.name}
                  totalPages={book.total_pages!}
                  category={handleCaptureCategory(book.id)}
                  bookId={book.id}
                  rate={
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
                  }
                />
              </Dialog.Root>
            )
          })}
        </>
      )}
    </>
  )
}
