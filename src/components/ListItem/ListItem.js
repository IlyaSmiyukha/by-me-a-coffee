import styled from "styled-components";

const ItemContainer = styled.div`
  border: solid 1px #ccc;
  margin-bottom: 10px;
  padding: 10px;
  color: ${props => props.theme.colors.text};
  font-size: 1.3rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ItemInfo = styled.div`
  margin-top: 5px;
`;

const ListItem = ({ address, name, message }) => {

  return (
    <ItemContainer>
      From {address}
      <ItemInfo>
        { name }: { message }
      </ItemInfo>
    </ItemContainer>
  );
}

export default ListItem;
