import { styled } from '../../../stitches.config'

export const Container = styled('main', {
  padding: '$5',

  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  justifyContent: 'center',
})

export const Main = styled('main', {
  display: 'flex',
  gap: '4rem',
  marginLeft: '6rem',
  marginTop: '4.5rem',
})
