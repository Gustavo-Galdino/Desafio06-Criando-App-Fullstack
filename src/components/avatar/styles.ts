import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../../stitches.config'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  width: '40px',
  height: '40px',
  overflow: 'hidden',

  border: '2px solid #7FD1CC',
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray600',
  color: '$gray800',

  svg: {
    width: '$6',
    height: '$6',
  },
})
