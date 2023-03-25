import Image from 'next/image'
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
import { useEffect, useState } from 'react'
import { api } from '@/lib/api'

interface CardsProps {
  short: boolean
  width?: number
  height?: number
  popularView?: boolean
}

interface Rating {
  id: string
  rate: number
  book_id: string
}

interface Books {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  ratings: Rating[]
}

interface User {
  id: string
  name: string
  avatar_url: string
  ratings: Rating[]
  book: Books[]
}

export function Cards({
  short = true,
  width,
  height,
  popularView = false,
}: CardsProps) {
  const [books, setBooks] = useState<Books[]>([])
  const [popularBooks, setPopularBooks] = useState<Books[]>([])
  const [user, setUser] = useState<User[]>([])

  useEffect(() => {
    async function getBooks() {
      const res = await api.get('books')

      setBooks(res.data)
    }

    getBooks()
  }, [])

  useEffect(() => {
    async function getUser() {
      const res = await api.get('users')

      setUser(res.data)
    }

    getUser()
  }, [])

  useEffect(() => {
    if (popularView) {
      const mostRatting = books.sort((a, b) => {
        const ratingA =
          a.ratings.reduce((sum, rating) => sum + rating.rate, 0) /
          a.ratings.length
        const ratingB =
          b.ratings.reduce((sum, rating) => sum + rating.rate, 0) /
          b.ratings.length
        return ratingB - ratingA
      })

      setPopularBooks(mostRatting)
    }
  }, [books, popularView])

  return (
    <>
      {popularView ? (
        <>
          {popularBooks.slice(0, 4).map((book) => (
            <Box key={book.id} variant={!short ? 'short' : 'default'}>
              <BookContainer variant={!short ? 'short' : 'default'}>
                <Image
                  src={`${book.cover_url}`}
                  alt=""
                  width={width || 108}
                  height={height || 152}
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
          ))}
        </>
      ) : (
        <>
          {user.map((user) =>
            user.ratings.map((rating) => {
              const book = books.find((book) => book.id === rating.book_id)
              if (!book) return null
              return (
                <Box key={book.id}>
                  <>
                    <Header>
                      <div>
                        <Avatar avatarUrl={user.avatar_url} />
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
                      width={width || 108}
                      height={height || 152}
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
              )
            }),
          )}
        </>
      )}
    </>
  )
}
