import { styled } from '../../../stitches.config'

export const CardContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',

  article: {
    span: {
      color: '$gray300',
      lineHeight: '$base',
      fontSize: '$sm',
    },

    '& + &': {
      marginTop: '$6',
    },
  },
})

export const Box = styled('section', {
  backgroundColor: '$gray600',
  padding: '$4',
  borderRadius: '$md',

  position: 'relative',
  cursor: 'pointer',
  marginTop: '$2',
})

export const Author = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  h2: {
    fontWeight: '$bold',
    lineHeight: '$base',
  },

  p: {
    color: '$gray400',
    lineHeight: '$base',
  },
})

export const Descriptions = styled('p', {
  color: '$gray300',
  fontSize: '$lg',
  lineHeight: '$base',
  marginTop: '$6',
})

export const AvatarContainer = styled('section', {})
