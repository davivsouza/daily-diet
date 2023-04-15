import { Container, Logo, ProfileIcon} from "./styles";

import logo from '@assets/Logo.png'
import profileIcon from '@assets/images/monkey.jpg'
export function Header() {
  return (
    <Container>
      <Logo source={logo}/>
      <ProfileIcon source={profileIcon} resizeMode="cover"/>
    </Container>
  )
}