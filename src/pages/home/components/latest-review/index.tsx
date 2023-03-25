import { Cards } from '@/components/cards'

import { ChartLineUp } from 'phosphor-react'

import { Header, ReviewContainer } from './styles'

export function Review() {
  return (
    <ReviewContainer>
      <Header>
        <ChartLineUp size={26} weight="bold" />
        <h1>Início</h1>
      </Header>
      <p>Avaliações mais recentes</p>

      <Cards short />
    </ReviewContainer>
  )
}
