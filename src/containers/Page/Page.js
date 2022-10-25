import { useSelector } from 'react-redux'
import styled from "styled-components";

import { getisConnected } from 'store/slice/walletSlice'

import Header from 'components/Header';
import Placeholder from 'components/Placeholder';
import Form from 'containers/Form';
import List from 'containers/List';

const MainContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${props => props.theme.colors.background};
  color:  ${props => props.theme.colors.text};
  transition: background-color .5s;
  overflow: hidden;
  padding: 50px 20px 20px;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  height: 100%;

  @media(min-width: 800px) {
    align-items: flex-start;
    flex-direction: row;
  }
`;

const  App = () => {
  const isConnected = useSelector(state => getisConnected(state));

  return (
      <MainContainer>
        <Header />
        <Placeholder isConnected={isConnected}/>
        {
          isConnected && <ContentContainer>
              <List />
              <Form />
            </ContentContainer>
        }

      </MainContainer>
  );
}

export default App;
