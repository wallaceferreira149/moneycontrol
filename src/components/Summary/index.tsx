import incomeImg from '../../assests/income.svg'
import outcomeImg from '../../assests/outcome.svg'
import totalImg from '../../assests/total.svg'
import {Container} from './styles'

export function Summary(){
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Entradas</p>
          <img src={outcomeImg} alt="Entradas" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div className='light-background'>
        <header>
          <p>Entradas</p>
          <img src={totalImg} alt="Entradas" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
    </Container>
  );
}