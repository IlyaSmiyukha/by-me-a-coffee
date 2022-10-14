import styled from "styled-components";

const PlaceholderContainer = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const H1 = styled.h1`
  font-size: 3rem;
`

const P = styled.p`
  font-size: 1.25rem;
  margin-top: 5px;
`

const A = styled.a`
`

const  Placeholder = () => {
  return (
    <PlaceholderContainer>
      <H1>Buy Me A Crypto Coffee</H1>
      <P>Small app working on Goerli network. Was made for fun.</P>
      <P>
        You can ask some free tokens here:
        <A target="_blank" rel="noopener norefferer" href='https://goerlifaucet.com/'>Faucet</A>
      </P>
    </PlaceholderContainer>
  );
}

export default Placeholder;
