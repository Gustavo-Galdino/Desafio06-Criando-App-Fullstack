import { Button } from '@/pages/login/styles'
import * as Dialog from '@radix-ui/react-dialog'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { X } from 'phosphor-react'
import { CloseButton, Content, Overlay, ButtonContainer } from './styles'

import googleLogo from '@/assets/googleLogo.svg'
import githubLogo from '@/assets/githubLogo.svg'

export function LoginBox() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton asChild>
          <X size={24} />
        </CloseButton>

        <ButtonContainer>
          <h5>Faça Login para deixar sua avaliação</h5>
          <Button type="button" onClick={() => signIn('google')}>
            <Image src={googleLogo} width={32} height={32} alt="Google Logo" />
            Entrar com Google
          </Button>
          <Button type="button" onClick={() => signIn('github')}>
            <Image src={githubLogo} width={32} height={32} alt="GitHub Logo" />
            Entrar com GitHub
          </Button>
        </ButtonContainer>
      </Content>
    </Dialog.Portal>
  )
}
