import { styled } from '../../../../../stitches.config'

export const ReviewContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  p: {
    marginBottom: '$4',
    lineHeight: '$base',
    fontSize: '$sm',
  },
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  marginBottom: '$10',

  h1: {
    fontSize: '$2xl',
    lineHeight: '$short',
    fontWeight: '$bold',
  },

  svg: {
    color: '$green100',
  },
})
