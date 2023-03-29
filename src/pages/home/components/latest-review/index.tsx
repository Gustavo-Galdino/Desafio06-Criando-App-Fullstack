import { Cards } from '@/components/cards'

import { ChartLineUp } from 'phosphor-react'
import { LastReading } from './components/lastReading'
import { Header, ReviewContainer } from './styles'

export function Review() {
  return (
    <ReviewContainer>
      <Header>
        <ChartLineUp size={26} weight="bold" />
        <h1>Início</h1>
      </Header>
      <LastReading />
      <p>Avaliações mais recentes</p>
      <Cards short />
    </ReviewContainer>
  )
}
