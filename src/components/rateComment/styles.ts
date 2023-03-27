import { styled } from '../../../stitches.config'

export const StarContainer = styled('article', {
  color: '$purple100',
})

export const TextAreaContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',

  '> div': {
    alignSelf: 'flex-end',

    display: 'flex',

    gap: '$2',

    button: {
      all: 'unset',
      cursor: 'pointer',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      backgroundColor: '$gray600',
      borderRadius: '$sm',

      padding: '$3',

      '&:hover': {
        backgroundColor: '$gray500',
      },
    },
  },
})

export const TextArea = styled('textarea', {
  minHeight: 164,

  backgroundColor: '$gray800',
  border: '1px solid $gray500',

  padding: '$5 $3',
  color: '$gray100',

  '&::placeholder': {
    color: '$gray400',
  },

  '&:focus-within': {
    borderColor: '$gray500',
  },
})
