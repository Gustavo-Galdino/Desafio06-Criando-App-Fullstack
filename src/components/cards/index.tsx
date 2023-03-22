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
}

interface Books {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
}

export function Cards({ short = true }: CardsProps) {
  const [books, setBooks] = useState<Books[]>([])

  useEffect(() => {
    async function getBooks() {
      const res = await api.get('book')

      setBooks(res.data)
    }

    getBooks()
  }, [])

  return (
    <>
      {short
        ? books.map((book) => {
            return (
              <Box key={book.id}>
                <Header>
                  <Avatar avatarUrl="https://github.com/Gustavo-Galdino.png" />
                  <div>
                    Voodoo
                    <span>Hoje</span>
                  </div>
                </Header>
                <StarContainer>
                  <Star weight="fill" />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </StarContainer>

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
            )
          })
        : books.map((book) => {
            return (
              <Box variant="short" key={book.id}>
                <BookContainer>
                  <Image src={book.cover_url} alt="" width={64} height={94} />

                  <Content>
                    <Author variant="short">
                      <h2>{book.name}</h2>
                      <p>{book.author}</p>
                    </Author>

                    <StarContainer variant="short">
                      <Star weight="fill" />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </StarContainer>
                  </Content>
                </BookContainer>
              </Box>
            )
          })}
    </>
  )
}
