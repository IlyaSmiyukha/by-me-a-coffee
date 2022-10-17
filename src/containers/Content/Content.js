import { useState } from 'react';
import styled from "styled-components";

import Item from 'components/Item'
import Button from 'components/Button'

const ContentContainer = styled.section`
  padding: 0 10px;
  margin: 0 auto;
`;

const Form =  styled.div`
  width: 500px;
  margin: 40px auto;

  button {
    width: 100%;
  }
`

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
    name: 'Coffe',
    price: '5$',
    id: 1
  },
  {
    name: 'Coffe & cupcake',
    price: '10$',
    id: 2
  },
  {
    name: 'Coffe & pizza',
    price: '15$',
    id: 3
  },
]

const  Content = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [activeItem, setActiveItem] = useState(1);

  const changeName = e => setName(e.target.value);
  const changeMessage = e => setMessage(e.target.value);
  const onItemChange = id => setActiveItem(id);
  const onSubmit = () => { console.error(name, message, activeItem); }

  return (
    <ContentContainer>
      <ItemsContainer>
        {
          itemsList.map(item => <Item key={item.id}
                                      {...item}
                                      isActive={item.id === activeItem}
                                      onChange={onItemChange}/>)
        }
      </ItemsContainer>

      <Form>
        <InputName
                  onChange={changeName}
                  value={name}
                  placeholder='Enter your name (optional)' />
        <InputMessage
                  onChange={changeMessage}
                  value={message}
                  placeholder='Enter your message (optional)' />
        <Button onClick={onSubmit}>Send transaction</Button>
      </Form>

    </ContentContainer>
  );
}

export default Content;
