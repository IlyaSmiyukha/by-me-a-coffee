import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";

import ListItem from 'components/ListItem'
import NoItems from 'components/NoItems'

import { fetchCoffee, getList, getListIsLoading } from 'store/slice/walletSlice';

const ListContainer = styled.div`
  width: 500px;
  max-width: 100%;
  padding: 0 20px 20px;
  background: ${props => props.theme.colors.containerBackground};
  overflow: auto;

  @media(min-width: 800px) {
    height: calc(100% - 170px);
  }
`;


const  List = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => getListIsLoading(state))
  const itemsList = useSelector(state => getList(state))

  useEffect(() => {
    dispatch(fetchCoffee())
  }, [])

  return (
      <ListContainer>
        {
          itemsList.length ?
            itemsList.map(item => <ListItem key={item.timestamp} {...item}/>)
            : <NoItems isLoading={isLoading} />
        }
      </ListContainer>
  );
}

export default List;
