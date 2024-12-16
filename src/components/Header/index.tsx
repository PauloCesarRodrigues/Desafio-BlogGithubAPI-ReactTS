
import backgroundImg from '../../images/header/backgroundImg.jpg'
import { HeaderContainer, HeaderContent } from './styles'

export function Header(){
  return(
    <HeaderContainer>
      <img src={backgroundImg}/>
    <HeaderContent>

    </HeaderContent>
    </HeaderContainer>
  )
}