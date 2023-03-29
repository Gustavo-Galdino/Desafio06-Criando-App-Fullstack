import { Nav } from '@/components/nav'
import { Review } from './components/latest-review'
import { Popular } from './components/popular'
import { Container, Main } from './styles'

export default function Home() {
  return (
    <Container>
      <Nav />
      <Main>
        <Review />
        <Popular />
      </Main>
    </Container>
  )
}
