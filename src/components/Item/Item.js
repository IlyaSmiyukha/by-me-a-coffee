import styled from "styled-components";

import cupcake from './cupcake.png'
import pizza from './pizza.png'

const ItemContainer = styled.div`
  width: 250px;
  padding-top: 20px;
  border-radius: 6px;
  background: ${props => props.theme.colors.containerBackground};
  margin: 0 20px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 5px 8px #00098000, 0 5px 16px rgb(0 9 128 / 5%);
`;

const LogoContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
`

const Coffe = styled.i`
  width: 60px;
  height: 60px;
  background-position: center;
  background-size: contain;
  display: block;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' x='0px' y='0px' viewBox='0 0 529.766 529.766' xml:space='preserve'%3E%3Cpath fill='%230d0d0d' d='M492.601,10.671c-1.2-5.5-6.101-8.6-11.601-8.6c-145.699-6.7-290.7,4.9-436.399,6.1c-6.1,0-12.9,5.5-12.2,12.2 c1.8,20.2,4.3,39.2,17.1,55.7c4.9,6.1,12.2,6.1,17.1,2.4c2.4,0.6,5.5,0.6,8,1.2c-4.3,67.9,6.1,138.3,18.4,204.999 c12.2,69.2,26.3,145.7,56.3,209.301c-3.7,1.8-5.5,8.6-0.6,11c82.6,41.6,170.101,25.699,252.101-9.801 c6.699-3.1,7.3-9.8,3.699-14.699c26.301-125.5,66.7-252.1,58.801-381.3c0-0.6-0.601-1.8-0.601-2.4c6.101,0,12.2,0,18.4,0 c5.5,0,10.399-3.7,11.6-8.6C498.7,62.071,499.301,36.971,492.601,10.671z M413.601,336.271c-94.2,34.3-186.7,53.899-279.7,0.6 c-2.4-1.2-4.3-1.2-6.1,0c-3.7-14.1-6.7-27.5-9.8-41.6c-8-36.7-13.5-72.8-18.4-109.5c85.1,47.1,267.399,94.899,337.8,0.6 C432,236.571,422.801,286.07,413.601,336.271z M406.301,73.071c-37.9,0-75.9,0-113.801-0.6c-75.3-0.6-149.899-4.9-225.2-9.8 c-5.5-9.2-8.6-19-9.8-30c65.5-0.6,130.4-3.1,195.8-5.5c31.8-1.2,216.6-22.6,220.9,14.7 C479.101,84.771,433.801,73.071,406.301,73.071z'/%3E%3C/svg%3E");
`

const Price = styled.div`
  background: ${props => props.theme.colors.accentColor};
  min-width: 100%;
  color: ${props => props.theme.colors.containerBackground};
  height: 40px;
  line-height: 40px;
  font-wight: bold;
  font-size: 1.5rem;
`;

const Name = styled.h4`
  font-size: 1.75rem;
  margin-bottom: 30px;
`;

const Img = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  transform: rotate(30deg);
  margin-left: -22px;
`;

const  Item = ({ name, price, id }) => {
  const styles = {
    transform: id === 2 || id===3 ?  'rotate(-15deg)' : null
  }

  return (
    <ItemContainer>
      <Name>{ name }</Name>
      <LogoContainer>
        <Coffe style={styles}/>
        {
          id === 2 && <Img src={cupcake} />
        }
        {
          id === 3 && <Img src={pizza} styles={{
            transform: 'rotate(45deg)'
          }}/>
        }
      </LogoContainer>
      <Price>{ price }</Price>
    </ItemContainer>
  );
}

export default Item;