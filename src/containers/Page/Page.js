import { useSelector } from 'react-redux'
import styled from "styled-components";

import { getIsConected } from 'store/slice/walletSlice'

import Content from 'containers/Content';
import Header from 'components/Header';
import Placeholder from 'components/Placeholder';

const MainContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${props => props.theme.colors.background};
  color:  ${props => props.theme.colors.text};
  transition: background-color .5s
`;

const  App = () => {
  const isConected = useSelector(state => getIsConected(state));

  return (
      <MainContainer>
        <Header />
        {
          isConected ? <Content /> : <Placeholder />
        }
      </MainContainer>
  );
}

export default App;
