import { Cards } from '@/components/cards'
import Link from 'next/link'
import { CaretRight } from 'phosphor-react'
import { Header, PopularContainer } from './styles'

export function Popular() {
  return (
    <PopularContainer>
      <Header>
        <h4>Livros populares</h4>
        <Link href={'#'}>
          Ver todos <CaretRight size={16} />
        </Link>
      </Header>

      <Cards short={false} popularView={true} />
    </PopularContainer>
  )
}
