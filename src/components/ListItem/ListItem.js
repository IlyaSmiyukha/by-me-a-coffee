import styled from "styled-components";

const ItemContainer = styled.div`
  margin: 20px 0;
  color: ${props => props.theme.colors.text};
  font-size: 1.3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
`;

const ItemInfo = styled.div`
  font-size: 1.5rem;
`;

const InfoDiv = styled.div`
  opacity: .5;
  margin-bottom-5px;
  font-size: 1.2rem;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
  margin-bottom: 3px;
`;

const Price = styled.div`
  width: 50px;
  min-width: 50px;
  margin-right: 10px;
  height: 50px;
  border-radius: 6px;
  background:  ${props => props.theme.colors.accentColor};
  color: ${props => props.theme.colors.containerBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

const months = ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const coffeePrice = 0.0038;

const ListItem = ({ address, name, message, timestamp, value }) => {
  const date = new Date(timestamp * 1000);

  const getPrice = () => {
    console.error(value);
    return (value/coffeePrice === 3 && '15$') || (value/coffeePrice === 2 && '10$') || '5$';
  }

  return (
    <ItemContainer>
      <Price>
        {getPrice()}
      </Price>
      <ItemInfo>
        <InfoDiv>
          {`${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}
        </InfoDiv>
        <InfoDiv>
          From: {address}
        </InfoDiv>
        { name }: { message }
      </ItemInfo>
    </ItemContainer>
  );
}

export default ListItem;
