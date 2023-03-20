import Image from 'next/image'
import Link from 'next/link'
import { Button, LinkContainer, NavContainer, NavLink } from './styles'
import { ChartLineUp, Binoculars, SignIn } from 'phosphor-react'

import logo from '@/assets/Logo.svg'

export function Nav() {
  return (
    <NavContainer>
      <Image src={logo} width={128} alt="BookWise" />

      <LinkContainer>
        <Link href="#">
          <NavLink variant={'active'}>
            <ChartLineUp size={24} />
            Início
          </NavLink>
        </Link>
        <Link href="#">
          <NavLink>
            <Binoculars size={24} />
            Explorar
          </NavLink>
        </Link>
      </LinkContainer>
      <Button>
        Fazer Login
        <SignIn size={20} />
      </Button>
    </NavContainer>
  )
}
