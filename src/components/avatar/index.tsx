import { User } from 'phosphor-react'
import { AvatarContainer, AvatarImage, AvatarFallback } from './styles'

interface AvatarProps {
  avatarUrl: string
}

export function Avatar({ avatarUrl }: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage src={avatarUrl} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}
