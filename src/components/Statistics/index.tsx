import { ArrowUpRight } from "phosphor-react";
import { Container, Icon, OpenStatisticScreen, Percent, PercentLabel } from "./styles";

export function Statistic() {
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