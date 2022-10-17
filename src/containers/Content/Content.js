import styled from "styled-components";

import Item from 'components/Item'

const ContentContainer = styled.section`
  padding: 0 10px;
  margin: 0 auto;
`;

const ItemsContainer = styled.div`
  display: flex;
  align-items: stratch;
  justify-content: center;
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
  return (
    <ContentContainer>
      <ItemsContainer>
        {
          itemsList.map(item => <Item key={item.id} {...item}/>)
        }
      </ItemsContainer>
    </ContentContainer>
  );
}

export default Content;
