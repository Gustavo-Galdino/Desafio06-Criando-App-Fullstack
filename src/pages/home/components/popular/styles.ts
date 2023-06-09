import { styled } from '../../../../../stitches.config'

export const PopularContainer = styled('div', {
  marginTop: '58px',
  marginRight: '4.75rem',
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  marginBottom: '$5',

  h4: {
    fontSize: '$lg',
    lineHeight: '$base',
  },

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
})
