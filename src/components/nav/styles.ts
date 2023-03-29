import Link from 'next/link'
import { styled } from '../../../stitches.config'

export const NavContainer = styled('nav', {
  backgroundColor: '$gray700',
  borderRadius: '$md',
  height: '94vh',
  minWidth: '100%',
  padding: '$10',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',

  img: {
    marginBottom: '$10',
  },

  a: {
    textDecoration: 'none',
  },
})

export const LinkContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  button: {
    all: 'unset',
    cursor: 'pointer',
  },
})

export const NavLink = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  color: '$gray100',

  gap: '$3',

  lineHeight: '$base',
  fontWeight: '$bold',

  marginBottom: '$6',

  borderLeft: '4px solid transparent',

  '&::before': {
    content: '',
  },

  '&:hover': {
    color: '$gray100',
  },

  variants: {
    variant: {
      active: {
        color: '$gray100',
        borderImage: 'linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%) 1 100%',
        borderLeftWidth: '4px',
        borderLeftStyle: 'solid',
        borderRadius: '$full',
      },
      light: {
        color: '$gray400',
      },
    },
  },
})

export const Button = styled('button', {
  all: 'unset',
  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$3',
  padding: '$1 $2',

  color: '$gray200',
  fontWeight: '$bold',
  lineHeight: '$base',
  fontSize: '$sm',

  svg: {
    color: '$green100',
  },
})
