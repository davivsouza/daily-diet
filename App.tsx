import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_600SemiBold
} from '@expo-google-fonts/nunito-sans'
import theme from './src/theme'

export default function App() {

  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_600SemiBold
  })
  return (
    <ThemeProvider theme={theme}>
      <Home/>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
