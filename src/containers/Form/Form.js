import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';
import styled from "styled-components";
import { buyCoffee, getisConnected, getIsTransactionPending } from 'store/slice/walletSlice'

import PriceItem from 'components/PriceItem';
import TransactionLayer from 'components/TransactionLayer';
import Button from 'components/Button';

const ContentContainer = styled.section`
  width: 500px;
  max-width: 100%;
  padding: 20px;
  margin: 20px;
  background: ${props => props.theme.colors.containerBackground};
  position: relative;
  button {
    width: 100%;
  }

  @media(min-width: 800px) {
    width: 300px;
    margin: 0 0 0 20px;
  }
`;

const ItemsContainer = styled.div`
  display: flex;
  align-items: stratch;
  justify-content: center;
`;

const InputName = styled.input`
  display: flex;
  align-items: stratch;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  border-radius: 4px;
  border: solid 1px #ccc;
  background: ${props => props.theme.colors.containerBackground};
`;

const InputMessage = styled.textarea`
  display: flex;
  align-items: stratch;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
  height: 100px;
  padding: 10px;
  border-radius: 4px;
  border: solid 1px #ccc;
  resize: none;
  background: ${props => props.theme.colors.containerBackground};
`;

const itemsList = [
  {
    price: '5$',
    id: 1
  },
  {
    price: '10$',
    id: 2
  },
  {
    price: '15$',
    id: 3
  },
]

const coffeePrice = 0.0038;

const  Form = () => {
  const dispatch = useDispatch();
  const isConnected = useSelector(state => getisConnected(state));
  const isTransactionPending = useSelector(state => getIsTransactionPending(state));
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [activeItem, setActiveItem] = useState(1);

  const changeName = e => setName(e.target.value);
  const changeMessage = e => setMessage(e.target.value);
  const onItemChange = id => setActiveItem(id);
  const onSubmit = () => {
    dispatch(buyCoffee({
      price: coffeePrice * activeItem,
      message,
      name
    }))
 }

  return (
    <ContentContainer>
      <ItemsContainer>

        {
          isTransactionPending && <TransactionLayer />
        }

        {
          itemsList.map(item => <PriceItem key={item.id}
                                      {...item}
                                      isActive={item.id === activeItem}
                                      onChange={onItemChange}/>)
        }

      </ItemsContainer>

      <InputName
                onChange={changeName}
                value={name}
                placeholder='Enter your name (optional)' />
      <InputMessage
                onChange={changeMessage}
                value={message}
                placeholder='Enter your message (optional)' />
      <Button onClick={onSubmit} disabled={!isConnected}>
        {isConnected ? 'Send transaction' : 'Connect wallet first'}
      </Button>

    </ContentContainer>
  );
}

export default Form;
