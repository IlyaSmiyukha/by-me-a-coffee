import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from{transform:rotate(0deg);}
  to{transform:rotate(360deg);}
`;

const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, .7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Clock = styled.div`
    border-radius: 100%;
    border: 5px solid ${props => props.theme.colors.accentColor};
    height: 80px;
    width: 80px;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      background-color: ${props => props.theme.colors.accentColor};
      top:2px;
      left: 48%;
      height: 33px;
      width: 5px;
      border-radius: 5px;
      transform-origin: 50% 97%;
      animation: ${rotate} 2s linear infinite;
    }

    &:after {
      content: "";
    	position: absolute;
    	background-color: ${props => props.theme.colors.accentColor};
    	top: 6px;
    	left: 48%;
    	height: 30px;
    	width: 5px;
    	border-radius: 5px;
			transform-origin: 50% 94%;
			animation: ${rotate} 12s linear infinite;
    }
`;

const  TransactionLayer = () => {
  return (
    <LoaderContainer>
      <Clock />
    </LoaderContainer>
  );
}

export default TransactionLayer;
