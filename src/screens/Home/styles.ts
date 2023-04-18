import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
`
export const Label = styled.Text`
  margin-top: 32px;
  ${({ theme }) => css`
    font-size: ${theme.fontSize.md}px;
    font-family: ${theme.fontFamily.regular};
    color: ${theme.colors.gray_1};
  `}

`;