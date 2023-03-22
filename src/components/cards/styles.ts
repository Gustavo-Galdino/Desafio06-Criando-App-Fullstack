import { styled } from '../../../stitches.config'

export const Box = styled('div', {
  backgroundColor: '$gray700',
  padding: '$6',
  borderRadius: '$md',

  position: 'relative',

  '& + &': {
    marginTop: '$3',
  },

  variants: {
    variant: {
      short: {
        width: 324,
      },
    },
  },
})

export const Header = styled('header', {
  display: 'flex',

  gap: '$4',
  marginBottom: '$8',

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
  color: '$purple100',

  variants: {
    variant: {
      short: {
        position: 'static',
      },
    },
  },
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const BookContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',

  gap: '$5',
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

  variants: {
    variant: {
      short: {
        h2: {
          fontSize: '$md',
        },
      },
    },
  },
})

export const Descriptions = styled('p', {
  color: '$gray300',
  fontSize: '$lg',
  lineHeight: '$base',
})
