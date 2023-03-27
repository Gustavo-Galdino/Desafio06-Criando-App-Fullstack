import Image from 'next/image'

import { Review } from './components/latest-review'
import { Popular } from './components/popular'
import {
  Container,
  Main,
  Button,
  LinkContainer,
  NavContainer,
  NavLink,
} from './styles'
import { ChartLineUp, Binoculars, SignIn, SignOut } from 'phosphor-react'
import logo from '@/assets/Logo.svg'
import { useState } from 'react'
import { Explorer } from './components/explorer'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Avatar } from '@/components/avatar'

export default function Home() {
  const [activePage, setActivePage] = useState('/home')

  const session = useSession()

  const isSignedIn = session.status === 'authenticated'

  return (
    <Container>
      <NavContainer>
        <div>
          <Image src={logo} width={128} alt="BookWise" />

          <LinkContainer>
            <button>
              <NavLink
                variant={activePage === '/home' ? 'active' : 'light'}
                onClick={() => setActivePage('/home')}
              >
                <ChartLineUp size={24} />
                Início
              </NavLink>
            </button>
            <button>
              <NavLink
                variant={activePage === '/explorer' ? 'active' : 'light'}
                onClick={() => setActivePage('/explorer')}
              >
                <Binoculars size={24} />
                Explorar
              </NavLink>
            </button>
          </LinkContainer>
        </div>
        {isSignedIn ? (
          <Button onClick={() => signOut()}>
            <Avatar image={session.data.user?.image || ''} />
            {session.data.user?.name}
            <SignOut size={20} color="#F75A68" />
          </Button>
        ) : (
          <Button onClick={() => signIn('google')}>
            Fazer Login
            <SignIn size={20} />
          </Button>
        )}
      </NavContainer>

      <Main>
        {activePage === '/home' ? (
          <>
            <Review />
            <Popular />
          </>
        ) : (
          <Explorer />
        )}
      </Main>
    </Container>
  )
}
