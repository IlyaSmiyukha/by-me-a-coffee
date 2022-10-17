import {
  ItemContainer,
  Radio,
  Name,
  LogoContainer,
  Coffe,
  Img,
  Price
} from './StyledComponents'

import cupcake from './cupcake.png'
import pizza from './pizza.png'

const  Item = ({ name, price, id, onChange, isActive }) => {
  const styles = {
    transform: id === 2 || id===3 ?  'rotate(-15deg)' : null
  }

  return (
    <ItemContainer htmlFor={`item-${id}`}>
      <Radio
        type='radio'
        name="item"
        id={`item-${id}`}
        defaultChecked={isActive}
        onChange={() => onChange(id)}/>
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
