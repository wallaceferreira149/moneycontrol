import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assests/close.svg';
import incomeImg from '../../assests/income.svg';
import outcomeImg from '../../assests/outcome.svg';
import { api } from '../../services/api';
import { useTransactions } from '../../hooks/useTransactions';
import {Container, TransactionTypeContainer, RadioBox} from './styles';

Modal.setAppElement('#root');

interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
  const { createTransaction } = useTransactions();


  const[title, setTitle] = useState('');
  const[amount, setAmount] = useState(0);
  const [type, setType] = useState('deposit');
  const[category, setCategory] = useState('');


  async function handeCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    
    await createTransaction({
      title,
      amount,
      type,
      category
     });
    
     setTitle('');
     setAmount(0);
     setType('');
     setCategory('');

     onRequestClose();
  }

  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button 
          type="button" 
          onClick={onRequestClose} 
          className="react-modal-close">
          <img src={closeImg} alt="Fechar modal"/>
        </button>
        <Container onSubmit={handeCreateNewTransaction}>
          <h2>Cadastrar transação</h2>
          <input type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Título"/>
          <input 
            type="number"
            value={amount}
            onChange={(event) => setAmount(Number(event.target.value))}
            placeholder="Valor" />
          <TransactionTypeContainer>
            <RadioBox 
              type="button" 
              onClick={() => setType('deposit')}
              isActive={type === 'deposit'}
              activeColor="green">
              <img src={incomeImg} alt="Entrada"/>
              <span>Entrada</span>
            </RadioBox>
            <RadioBox 
              type="button" 
              onClick={() => setType('withdraw')}
              isActive={type === 'withdraw'}
              activeColor="red">
              <img src={outcomeImg} alt="Entrada"/>
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>
          <input 
            type="text"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            placeholder="Categoria"/>
          <button type="submit">Cadastrar</button>
        </Container>
    </Modal>
  )
}