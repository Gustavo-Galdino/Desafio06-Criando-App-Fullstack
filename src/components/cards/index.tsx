import Image from 'next/image'
import {
  Author,
  Header,
  BookContainer,
  Box,
  Descriptions,
  StarContainer,
} from './styles'

import book from '@/assets/Book.png'
import { Avatar } from '../avatar'
import { Star } from 'phosphor-react'

export function Cards() {
  return (
    <Box>
      <Header>
        <Avatar avatarUrl="https://github.com/Gustavo-Galdino.png" />
        <div>
          Voodoo
          <span>Hoje</span>
        </div>
      </Header>
      <StarContainer>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </StarContainer>

      <BookContainer>
        <Image src={book} alt="" />

        <div>
          <Author>
            <h2>O Hobbit</h2>
            <p>J.R.R Tolkien</p>
          </Author>

          <Descriptions>
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et
            aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo
            a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
            vulputate massa velit nibh...
          </Descriptions>
        </div>
      </BookContainer>
    </Box>
  )
}
