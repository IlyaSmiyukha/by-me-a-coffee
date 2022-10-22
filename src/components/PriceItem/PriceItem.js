import styled from "styled-components";

export const ItemContainer = styled.label`
  flex: 1;
  margin: 0 0 20px 10px;
  height: 40px;
  text-align: center;
  border-radius: 6px;
  border: solid 1px  ${props => props.theme.colors.accentColor};
  line-height: 40px;
  color: ${props => props.theme.colors.accentColor};
  font-size: 1.5rem;
  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }

  &:has(:checked) {
    background: ${props => props.theme.colors.accentColor};
    color: ${props => props.theme.colors.containerBackground};
  }
`;

export const Radio = styled.input`
  display: none;
`;

const PriceItem = ({ price, id, onChange, isActive }) => {

  return (
    <ItemContainer htmlFor={`item-${id}`}>
      <Radio
        type='radio'
        name="item"
        id={`item-${id}`}
        defaultChecked={isActive}
        onChange={() => onChange(id)}/>
        { price }
    </ItemContainer>
  );
}

export default PriceItem;
