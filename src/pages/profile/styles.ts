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

export const AvatarContainer = styled('section', {
  minWidth: 308,
  height: 'fit-content',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  borderLeft: '1px solid $gray700',

  '> span': {
    content: '',
    background: '$gradient-horizontal',
    borderRadius: '$full',
    width: 32,
    height: 4,

    margin: '$8 0',
  },
})

export const UserContainer = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$5',
})

export const Infos = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',

  '> div': {
    display: 'flex',
    alignItems: 'center',
    gap: '$5',

    svg: {
      color: '$green100',
    },
  },
})

export const InfosContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  span: {
    fontWeight: '$bold',
    lineHeight: '$base',
    color: '$gray200',
  },

  p: {
    fontSize: '$sm',
    lineHeight: '$base',
    color: '$gray300',
  },
})
