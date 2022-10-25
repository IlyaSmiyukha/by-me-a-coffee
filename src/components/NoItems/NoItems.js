import styled from "styled-components";

const NoItemsContaier = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5rem;
`;

const  NoItems = ({ isLoading }) => {
  return (
    <NoItemsContaier>
    { !isLoading ? 'No transactions yet' : 'Wait a minute...'}
    </NoItemsContaier>
  );
}

export default NoItems;
