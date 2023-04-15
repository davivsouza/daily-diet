import { Header } from '@components/Header'
import { Statistic } from '@components/Statistics'
import {Container} from './styles'

export function Home(){
  return(
    <Container>
      <Header/>
      <Statistic/>
    </Container>

  )
}