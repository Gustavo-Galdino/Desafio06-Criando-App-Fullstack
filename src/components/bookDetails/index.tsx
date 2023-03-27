import { useApi } from '@/context/apiContext'

import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { BookmarkSimple, BookOpen, Star, X } from 'phosphor-react'
import { ReactNode } from 'react'
import { Avatar } from '../avatar'
import { Descriptions, Header } from '../cards/styles'
import { LoginBox } from '../loginBox'
import { RateComment } from '../rateComment'
import {
  Author,
  BookContainer,
  Box,
  CloseButton,
  CommentsContent,
  Content,
  ContentBook,
  Footer,
  FooterContent,
  Overlay,
  RatingTile,
  StarContainer,
} from './style'

interface BookDetailsProps {
  name: string
  author: string
  image: string
  totalPages: number
  category: string | undefined
  rate: ReactNode
  bookId: string
}

export function BookDetails({
  name,
  author,
  image,
  totalPages,
  category,
  rate,
  bookId,
}: BookDetailsProps) {
  const { users } = useApi()

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton asChild>
          <X size={24} />
        </CloseButton>

        <Box>
          <BookContainer>
            <Image src={image} alt="" width={172} height={242} />
            <ContentBook>
              <Author>
                <h2>{name}</h2>
                <p>{author}</p>
              </Author>

              <StarContainer>
                <div>{rate}</div>
                <span>3 avaliações</span>
              </StarContainer>
            </ContentBook>
          </BookContainer>
          <Footer>
            <FooterContent>
              <BookmarkSimple size={24} />
              <div>
                <h4>Categoria</h4>
                <p>{category}</p>
              </div>
            </FooterContent>

            <FooterContent>
              <BookOpen size={24} />
              <div>
                <h4>Paginas</h4>
                <p>{totalPages}</p>
              </div>
            </FooterContent>
          </Footer>
        </Box>

        <CommentsContent>
          <RatingTile>
            <h5>Avaliações</h5>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button>Avaliar</button>
              </Dialog.Trigger>
              <LoginBox />
            </Dialog.Root>
          </RatingTile>

          <RateComment bookId={bookId} />

          {users.map((user) =>
            user.ratings.map((rating) => {
              const book = rating.book_id === bookId

              if (!book) return null
              return (
                <Box key={rating.id}>
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
                  <Descriptions>{rating.description}</Descriptions>
                </Box>
              )
            }),
          )}
        </CommentsContent>
      </Content>
    </Dialog.Portal>
  )
}
