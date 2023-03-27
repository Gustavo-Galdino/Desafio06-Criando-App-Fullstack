import { User } from 'phosphor-react'
import { AvatarContainer, AvatarImage, AvatarFallback } from './styles'

interface AvatarProps {
  image: string
}

export function Avatar({ image }: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage src={image} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}
