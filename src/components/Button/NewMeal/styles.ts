import { Plus } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'


export const Container = styled(TouchableOpacity)`
  width: 100%;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray_2};
  padding: 24px 8px;
  margin-top: 12px;
  border-radius: 6px;
`



export const ButtonLabel = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.s}px;
    font-family: ${theme.fontFamily.regular};
    color: ${theme.colors.white};
  `}
`

export const ButtonIcon = styled(Plus).attrs(({ theme }) => ({
  size: 14,
  color: theme.colors.white
}))``;
