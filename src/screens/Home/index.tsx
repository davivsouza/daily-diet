import { Header } from '@components/Header'
import { Statistics } from '@components/Statistics'
import {Container, Label} from './styles'
import { NewMeal } from '@components/Button/NewMeal'

export function Home(){
  return(
    <Container>
      <Header/>
      <Statistics/>
      <Label>
        Refeições
      </Label>
      <NewMeal />
    </Container>

  )
}