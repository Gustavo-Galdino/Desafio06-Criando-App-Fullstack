import { styled } from '../../../stitches.config'

export const Main = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',

  marginTop: '4.5rem',
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  h1: {
    fontSize: '$2xl',
  },

  '> div': {
    display: 'flex',
    alignItems: 'center',
    gap: '$3',

    '> svg': {
      color: '$green100',
    },
  },
})

export const InputContainer = styled('div', {
  background: 'none',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray500',
  minWidth: 433,
  padding: '$3 $5',

  display: 'flex',
  alignItems: 'center',

  '&:has(input:focus)': {
    borderColor: '$green200',

    svg: {
      color: '$green200',
    },
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  input: {
    fontSize: '$sm',
    color: '$gray200',
    fontWeight: 'regular',
    background: 'transparent',
    border: 0,
    width: '100%',

    '&:focus': {
      outline: 0,
    },

    '&::placeholder': {
      color: '$gray400',
    },
  },

  svg: {
    color: '$gray500',
    cursor: 'pointer',
  },
})

export const CategoriesContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  button: {
    all: 'unset',
    cursor: 'pointer',
    border: '1px solid $purple100',
    borderRadius: '$full',
    padding: '$1 $4',

    color: '$purple100',

    '&:hover': {
      background: '$purple200',
      color: '$gray100',
      border: '1px solid $purple100',
    },
  },
})

export const CardsContainer = styled('section', {
  display: 'flex',
  flexWrap: 'wrap',
  columnGap: '$5',
  rowGap: '$2',
})

export const Box = styled('section', {
  backgroundColor: '$gray700',
  padding: '$4',
  borderRadius: '$md',
  width: '32%',

  position: 'relative',
  cursor: 'pointer',
  '& + &': {
    marginTop: '$3',
  },
})

export const HeaderBook = styled('header', {
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
})

export const BookContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  columnGap: '$5',
})

export const Author = styled('div', {
  h2: {
    fontWeight: '$bold',
    lineHeight: '$short',
    fontSize: '$md',
  },

  p: {
    fontSize: '$sm',
    lineHeight: '$base',
    color: '$gray400',
  },
})
