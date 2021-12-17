import logoImg from "../../assests/logo.svg";
import {Container, Content} from "./styles"


export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dtmoney" />
        <button type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  )
}