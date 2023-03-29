import { Cards } from '@/components/cards'

import { CaretRight } from 'phosphor-react'
import { Header, PopularContainer } from './styles'

export function Popular() {
  return (
    <PopularContainer>
      <Header>
        <h4>Livros populares</h4>
        <button>
          Ver todos <CaretRight size={16} />
        </button>
      </Header>

      <Cards short={false} popularView={true} />
    </PopularContainer>
  )
}
