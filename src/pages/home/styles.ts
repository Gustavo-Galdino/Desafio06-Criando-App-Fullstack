import { styled } from '../../../stitches.config'

export const Container = styled('main', {
  padding: '$5',

  display: 'grid',
  gridTemplateColumns: '282px 1fr',
  gap: '$7',
  justifyContent: 'center',
})

export const Main = styled('main', {
  display: 'flex',
  gap: '4rem',

  marginTop: '4.5rem',
})
