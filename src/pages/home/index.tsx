import { Review } from './components/latest-review'
import { Nav } from './components/navigations'
import { Popular } from './components/popular'
import { Container } from './styles'

export default function Login() {
  return (
    <Container>
      <Nav />
      <Review />

      <Popular />
    </Container>
  )
}
