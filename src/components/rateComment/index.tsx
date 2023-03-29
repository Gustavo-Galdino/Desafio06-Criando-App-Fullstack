import { api } from '@/lib/api'
import { useSession } from 'next-auth/react'

import { Check, Star, X } from 'phosphor-react'
import { SetStateAction, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Avatar } from '../avatar'
import { Box, Header } from '../cards/styles'
import { StarContainer, TextArea, TextAreaContainer } from './styles'

interface RateCommentProps {
  bookId: string
  onButtonReview: (value: SetStateAction<boolean>) => void
}

export function RateComment({ bookId, onButtonReview }: RateCommentProps) {
  const [stars, setStars] = useState(Array(5).fill(false))
  const { register, watch, reset } = useForm()

  const session = useSession()

  const rate = stars.filter((star) => star === true).length
  const description = watch('description')

  function handleStarClick(index: number) {
    const newStars = stars.map((_, i) => i <= index)
    setStars(newStars)
  }

  async function handleNewComment(
    rate: number,
    description: string,
    bookId: string,
  ) {
    try {
      await api.post('/ratings/comment', {
        rate,
        description,
        bookId,
      })

      reset()
      onButtonReview(false)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Box>
      <Header>
        <div>
          <Avatar image={session.data?.user?.image || ''} />
          <div>
            <p>{session.data?.user?.name}</p>
          </div>
        </div>
        <StarContainer>
          {stars.map((filled, index) => (
            <Star
              key={index}
              size={28}
              weight={filled ? 'fill' : undefined}
              onClick={() => handleStarClick(index)}
            />
          ))}
        </StarContainer>
      </Header>

      <TextAreaContainer>
        <TextArea
          placeholder="Escreva sua avaliação"
          {...register('description')}
        />

        <div>
          <button type="submit">
            <X
              size={24}
              color="#8381D9"
              onClick={() => onButtonReview(false)}
            />
          </button>
          <button
            type="submit"
            onClick={() => handleNewComment(rate, description, bookId)}
          >
            <Check size={24} color="#50B2C0" />
          </button>
        </div>
      </TextAreaContainer>
    </Box>
  )
}
