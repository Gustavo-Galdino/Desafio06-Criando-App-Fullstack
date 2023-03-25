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
import { ChartLineUp, Binoculars, SignIn } from 'phosphor-react'
import logo from '@/assets/Logo.svg'
import { useState } from 'react'
import { Explorer } from './components/explorer'

export default function Home() {
  const [activePage, setActivePage] = useState('/home')

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
        <Button>
          Fazer Login
          <SignIn size={20} />
        </Button>
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
