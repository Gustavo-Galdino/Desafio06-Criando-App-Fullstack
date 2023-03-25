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

      <Cards short={false} width={64} height={94} popularView={true} />
    </PopularContainer>
  )
}
