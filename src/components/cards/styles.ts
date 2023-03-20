import { styled } from '../../../stitches.config'

export const Box = styled('div', {
  backgroundColor: '$gray700',
  padding: '$6',
  borderRadius: '$md',

  position: 'relative',
})

export const Header = styled('header', {
  display: 'flex',

  gap: '$4',

  '> div': {
    display: 'flex',
    flexDirection: 'column',

    lineHeight: '$base',

    span: {
      fontSize: '$sm',
      color: '$gray400',
    },
  },
})

export const StarContainer = styled('div', {
  position: 'absolute',
  right: '$5',
  top: '$7',
})

export const BookContainer = styled('div', {
  display: 'flex',
  gap: '$5',

  marginTop: '$8',
})

export const Author = styled('div', {
  h2: {
    fontWeight: '$bold',
    lineHeight: '$short',
  },

  p: {
    fontSize: '$sm',
    lineHeight: '$base',
    color: '$gray400',
  },

  marginBottom: '$5',
})

export const Descriptions = styled('p', {
  color: '$gray300',
  fontSize: '$lg',
  lineHeight: '$base',
})
