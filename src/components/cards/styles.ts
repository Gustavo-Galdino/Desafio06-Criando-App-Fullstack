import { styled } from '../../../stitches.config'

export const Box = styled('section', {
  backgroundColor: '$gray700',
  padding: '$4',
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
      default: {},
    },
  },
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',

  gap: '$4',
  marginBottom: '$8',

  '> div': {
    display: 'flex',
    gap: '$4',

    lineHeight: '$base',

    span: {
      fontSize: '$sm',
      color: '$gray400',
    },

    div: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const StarContainer = styled('article', {
  color: '$purple100',

  variants: {
    variant: {
      short: {},
      default: {},
    },
  },
})

export const BookContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  columnGap: '$5',

  variants: {
    variant: {
      short: {},
      default: {},
    },
  },
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

  variants: {
    variant: {
      short: {
        h2: {
          fontSize: '$md',
        },
      },
      default: {},
    },
  },
})

export const Descriptions = styled('p', {
  color: '$gray300',
  fontSize: '$lg',
  lineHeight: '$base',
})
