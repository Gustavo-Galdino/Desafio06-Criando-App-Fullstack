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

interface CardsProps {
  short: boolean
  popularView?: boolean
}

export function Cards({ short = true, popularView = false }: CardsProps) {
  const { users, books, popularBooks, categories } = useApi()

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
          {popularBooks?.map((book) => (
            <Dialog.Root key={book.id}>
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

                      {book.ratings.map((rating) => (
                        <StarContainer
                          key={rating.id}
                          variant={!short ? 'short' : 'default'}
                        >
                          {[...Array(rating.rate)].map((_, index) => (
                            <Star weight="fill" key={index} />
                          ))}
                          {rating.rate < 5 && <Star />}
                        </StarContainer>
                      ))}
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
                rate={book.ratings.map((rating) => (
                  <StarContainer key={rating.id}>
                    {[...Array(rating.rate)].map((_, index) => (
                      <Star weight="fill" key={index} />
                    ))}
                    {rating.rate < 5 && <Star />}
                  </StarContainer>
                ))}
              />
            </Dialog.Root>
          ))}
        </>
      ) : (
        <>
          {users.map((user) =>
            user.ratings.map((rating) => {
              const book = books.find((book) => book.id === rating.book_id)
              if (!book) return null
              return (
                <Dialog.Root key={book.id}>
                  <Dialog.Trigger asChild>
                    <Box key={book.id}>
                      <>
                        <Header>
                          <div>
                            <Avatar image={user.image} />
                            <div>
                              {user.name}
                              <span>Hoje</span>
                            </div>
                          </div>
                          <StarContainer>
                            {[...Array(rating.rate)].map((_, index) => (
                              <Star weight="fill" key={index} />
                            ))}
                            {rating.rate < 5 && <Star />}
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

                        {book.ratings.map((rating) => (
                          <StarContainer key={rating.id}>
                            {[...Array(rating.rate)].map((_, index) => (
                              <Star weight="fill" key={index} />
                            ))}
                            {rating.rate < 5 && <Star />}
                          </StarContainer>
                        ))}
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
                    rate={book.ratings.map((rating) => (
                      <StarContainer key={rating.id}>
                        {[...Array(rating.rate)].map((_, index) => (
                          <Star weight="fill" key={index} />
                        ))}
                        {rating.rate < 5 && <Star />}
                      </StarContainer>
                    ))}
                  />
                </Dialog.Root>
              )
            }),
          )}
        </>
      )}
    </>
  )
}
