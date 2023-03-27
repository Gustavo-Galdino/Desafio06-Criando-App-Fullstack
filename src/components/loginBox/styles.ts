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
  background: '$gray700',
  borderRadius: '$md',

  padding: '$10',

  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
})

export const CloseButton = styled(Dialog.Close, {
  all: 'unset',
  cursor: 'pointer',

  position: 'absolute',
  top: '$6',
  right: '$10',
})

export const ButtonContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$4',

  padding: '3.5rem 4.5rem',

  h5: {
    marginBottom: '$6',
    color: '$gray200',
    lineHeight: '$short',
  },

  button: {
    width: 372,
  },
})
