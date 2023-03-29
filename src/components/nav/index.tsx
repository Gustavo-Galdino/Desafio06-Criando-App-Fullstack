import Image from 'next/image'
import { ChartLineUp, Binoculars, SignIn, SignOut, User } from 'phosphor-react'
import { Button, LinkContainer, NavContainer, NavLink } from './styles'
import logo from '@/assets/Logo.svg'
import { signOut, useSession } from 'next-auth/react'
import { Avatar } from '@/components/avatar'
import { useRouter } from 'next/router'
import { LoginBox } from '../loginBox'
import * as Dialog from '@radix-ui/react-dialog'

export function Nav() {
  const session = useSession()
  const router = useRouter()

  const isSignedIn = session.status === 'authenticated'

  return (
    <NavContainer>
      <div>
        <Image src={logo} width={128} alt="BookWise" />

        <LinkContainer>
          <NavLink
            href="/home"
            variant={router.pathname === '/home' ? 'active' : 'light'}
          >
            <ChartLineUp size={24} />
            Início
          </NavLink>
          <NavLink
            href="explorer"
            variant={router.pathname === '/explorer' ? 'active' : 'light'}
          >
            <Binoculars size={24} />
            Explorar
          </NavLink>

          {isSignedIn && (
            <NavLink
              href="profile"
              variant={router.pathname === '/profile' ? 'active' : 'light'}
            >
              <User size={24} />
              Perfil
            </NavLink>
          )}
        </LinkContainer>
      </div>
      {isSignedIn ? (
        <Button onClick={() => signOut()}>
          <Avatar image={session.data.user?.image || ''} />
          {session.data.user?.name}
          <SignOut size={20} color="#F75A68" />
        </Button>
      ) : (
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button>
              Fazer Login <SignIn size={20} color="red" />
            </Button>
          </Dialog.Trigger>
          {!isSignedIn && <LoginBox />}
        </Dialog.Root>
      )}
    </NavContainer>
  )
}
