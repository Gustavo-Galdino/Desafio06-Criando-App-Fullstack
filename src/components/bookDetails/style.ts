import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '../../../stitches.config'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.75)',
})

export const Content = styled(Dialog.Content, {
  background: '$gray800',
  height: '100vh',
  width: 'calc(100vw / 2)',

  padding: '$10',

  position: 'fixed',
  top: 0,
  right: 0,

  overflowY: 'scroll',
})

export const CloseButton = styled(Dialog.Close, {
  all: 'unset',
  cursor: 'pointer',

  position: 'absolute',
  top: '$6',
  right: '$10',
})

export const Box = styled('section', {
  marginTop: '$6',
  backgroundColor: '$gray700',
  padding: '$6 $8',
  borderRadius: '$md',

  position: 'relative',
  cursor: 'pointer',

  '& + &': {
    marginTop: '$3',
  },
})

export const BookContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  columnGap: '$5',
})

export const ContentBook = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const Author = styled('div', {
  h2: {
    fontWeight: '$bold',
    lineHeight: '$short',
    fontSize: '$lg',
  },

  p: {
    fontSize: '$md',
    lineHeight: '$base',
    color: '$gray400',
  },
})

export const StarContainer = styled('article', {
  color: '$purple100',

  span: {
    color: '$gray400',
    fontSize: '$sm',
    lineHeight: '$base',
  },
})

export const Footer = styled('footer', {
  marginTop: '$10',
  borderTop: '1px solid $gray600',

  padding: '$6 0',
  marginLeft: '$8',
  marginRight: '$8',

  display: 'flex',
  alignItems: 'center',
  gap: 56,
})

export const FooterContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',

  svg: {
    color: '$green100',
  },

  h4: {
    color: '$gray300',
    fontSize: '$sm',
    lineHeight: '$base',
  },

  p: {
    fontWeight: '$bold',
    lineHeight: '$base',
  },
})

export const CommentsContent = styled('section', {
  marginTop: '$10',
})

export const RatingTile = styled('div', {
  display: 'flex',
  marginBottom: '$4',
  alignItems: 'center',
  justifyContent: 'space-between',

  h5: {
    fontSize: '$sm',
    lineHeight: '$base',
  },

  button: {
    all: 'unset',
    cursor: 'pointer',
    color: '$purple100',
    fontWeight: '$bold',
    lineHeight: '$base',
  },
})
