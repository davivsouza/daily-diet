import { ButtonIcon, ButtonLabel, Container } from "./styles";
export function NewMeal(){
  return (
    <Container activeOpacity={0.9}>
      <ButtonIcon/>
      <ButtonLabel>Nova refeição</ButtonLabel>
    </Container>
  )
}