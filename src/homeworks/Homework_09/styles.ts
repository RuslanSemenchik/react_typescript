import styled from "@emotion/styled";

 export const PageWrapper = styled.div`
display: flex;
flex-direction: column ;
flex : 1;
align-items: center;
justify-content: center;
gap: 20px;
background-color:  rgba(104, 96, 96, 0.52);

`
export const JokeText = styled.p`
  font-size: 20px;
  color: black;
`;

export const JokeCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 30px;
  width: 500px;
  min-height: 400px;
  padding: 40px;
  border: 2px solid rgba(124, 153, 69, 1);
  border-radius: 10px;
  background-color:rgba(197, 219, 74, 1);
`;

export const JokeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:space-between;
  gap: 70px;
`;



export const JokeError = styled(JokeText)`
  
  font-weight: bold;
  color: red;
`;





