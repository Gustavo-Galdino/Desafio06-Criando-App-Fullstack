import { styled } from '../../../../../../../stitches.config'

export const ReadingContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  marginBottom: '$10',

  '> div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    button: {
      all: 'unset',
      cursor: 'pointer',

      display: 'flex',
      alignItems: 'center',
      gap: '$2',
      color: '$purple100',
      fontWeight: '$bold',
      fontSize: '$sm',
    },
  },
})

export const Box = styled('section', {
  backgroundColor: '$gray600',
  padding: '$4',
  borderRadius: '$md',

  position: 'relative',
  cursor: 'pointer',

  '& + &': {
    marginTop: '$3',
  },
})

export const Author = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  div: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    span: {
      color: '$gray300',
      fontSize: '$sm',
    },
  },

  h2: {
    fontWeight: '$bold',
    lineHeight: '$base',
  },

  p: {
    color: '$gray400',
    lineHeight: '$base',
  },
})
