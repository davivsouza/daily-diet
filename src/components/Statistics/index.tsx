import { Container, Icon, OpenStatisticScreen, Percent, PercentLabel } from "./styles";

export function Statistics() {
  return (
    <Container>
      <Percent>90,86%</Percent>
      <PercentLabel>das refeições dentro da dieta</PercentLabel>
      <OpenStatisticScreen>
        <Icon/>
      </OpenStatisticScreen>
    </Container>
  )
}