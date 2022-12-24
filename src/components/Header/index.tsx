import headerImg from '../../assets/header.png'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={headerImg} alt="" />
    </HeaderContainer>
  )
}
