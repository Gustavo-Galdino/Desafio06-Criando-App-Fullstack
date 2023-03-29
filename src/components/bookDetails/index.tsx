import { useApi } from '@/context/apiContext'
import { formatDistanceToNow } from 'date-fns'
import { pt } from 'date-fns/locale'
import * as Dialog from '@radix-ui/react-dialog'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { BookmarkSimple, BookOpen, Star, X } from 'phosphor-react'
import { ReactNode, useState } from 'react'
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
  const { users, ratings } = useApi()
  const [handleButtonReview, sethandleButtonReview] = useState(false)

  const session = useSession()

  const isSignedIn = session.status === 'authenticated'

  const rateCount = users.reduce((acc, user) => {
    const bookRatings = user.ratings.filter(
      (rating) => rating.book_id === bookId,
    )
    return acc + bookRatings.length
  }, 0)

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
                <span>
                  {rateCount > 1
                    ? `${rateCount} avaliações`
                    : `${rateCount} avaliação`}
                </span>
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
                <button
                  onClick={() => {
                    isSignedIn
                      ? sethandleButtonReview(true)
                      : sethandleButtonReview(false)
                  }}
                >
                  Avaliar
                </button>
              </Dialog.Trigger>
              {!isSignedIn && <LoginBox />}
            </Dialog.Root>
          </RatingTile>

          {handleButtonReview && (
            <RateComment
              bookId={bookId}
              onButtonReview={sethandleButtonReview}
            />
          )}

          {ratings.map((rating) => {
            const book = rating.book_id === bookId
            const user = users.find((user) => user.id === rating.user_id)

            if (!book || !user) return null
            return (
              <Box key={rating.id}>
                <Header>
                  <div>
                    <Avatar image={user.image} />
                    <div>
                      {user.name}
                      <span>
                        {formatDistanceToNow(new Date(rating.created_at), {
                          addSuffix: true,
                          locale: pt,
                        })}
                      </span>
                    </div>
                  </div>
                  <StarContainer>
                    {[...Array(5)].map((_, index) => (
                      <Star
                        weight={index < rating.rate ? 'fill' : undefined}
                        key={index}
                      />
                    ))}
                  </StarContainer>
                </Header>
                <Descriptions>{rating.description}</Descriptions>
              </Box>
            )
          })}
        </CommentsContent>
      </Content>
    </Dialog.Portal>
  )
}
