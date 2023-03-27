import Banner from '@/assets/banner.png'
import googleLogo from '@/assets/googleLogo.svg'
import githubLogo from '@/assets/githubLogo.svg'
import rocketLogo from '@/assets/rocketLogo.svg'
import Image from 'next/image'
import { Button, ButtonContainer, Container, LoginContainer } from './styles'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'

export default function Login() {
  const router = useRouter()

  return (
    <Container>
      <Image src={Banner} width={590} height={780} alt="Book Wise Banner" />

      <LoginContainer>
        <h1>Boas vindas!</h1>
        <p>Faça seu login ou acesse como visitante</p>

        <ButtonContainer>
          <Button type="button" onClick={() => signIn('google')}>
            <Image src={googleLogo} width={32} height={32} alt="Google Logo" />
            Entrar com Google
          </Button>
          <Button type="button">
            <Image src={githubLogo} width={32} height={32} alt="GitHub Logo" />
            Entrar com GitHub
          </Button>
          <Button type="button" onClick={() => router.push('/home')}>
            <Image src={rocketLogo} width={32} height={32} alt="Rocket Logo" />
            Acessar como visitante
          </Button>
        </ButtonContainer>
      </LoginContainer>
    </Container>
  )
}
