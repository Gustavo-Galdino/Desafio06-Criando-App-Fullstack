import { styled } from '../../../stitches.config'

export const Container = styled('main', {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  gap: '$4',
  alignItems: 'center',

  padding: '$5',
})

export const LoginContainer = styled('section', {
  gridColumn: 2,
  justifySelf: 'center',
  width: 372,

  lineHeight: '$short',

  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
})

export const ButtonContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  marginTop: '$7',
})

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$5',

  padding: '$5 $6',

  border: 'none',
  borderRadius: '$md',
  backgroundColor: '$gray600',

  fontWeight: '$bold',
  fontSize: '$lg',
  lineHeight: '$base',
  color: '$gray200',

  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$gray500',
  },
})
