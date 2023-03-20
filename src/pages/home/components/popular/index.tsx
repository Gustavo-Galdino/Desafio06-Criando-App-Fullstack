import Link from 'next/link'
import { CaretRight } from 'phosphor-react'
import { PopularContainer } from './styles'

export function Popular() {
  return (
    <PopularContainer>
      <div>
        <h4>Livros populares</h4>
        <Link href={'#'}>
          Ver todos <CaretRight size={16} />
        </Link>
      </div>

      {/* <Cards /> */}
    </PopularContainer>
  )
}
