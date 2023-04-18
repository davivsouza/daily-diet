import { TouchableOpacity } from 'react-native';
import { ArrowUpRight } from 'phosphor-react-native';
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  margin-top: 32px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.green_light};
  border-radius: 8px;
  padding: 32px;

`

export const Percent = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.xxl}px;
    color: ${theme.colors.gray_1};
    font-family: ${theme.fontFamily.bold};
  `}
`;

export const PercentLabel = styled.Text`
${({ theme }) => css`
  font-size: ${theme.fontSize.s}px;
  color: ${theme.colors.gray_2};
  font-family: ${theme.fontFamily.regular};
  `}
`;


export const OpenStatisticScreen = styled(TouchableOpacity)`
  position: absolute;
  right: 10px;
  top: 10px;
`

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 32,
  color: theme.colors.green_dark
}))``