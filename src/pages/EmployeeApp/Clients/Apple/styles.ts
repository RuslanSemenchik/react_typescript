import styled from "@emotion/styled";


 export const PageWrapper = styled.div`
display: flex;
flex-direction: column ;
flex : 1;
align-items: center;
justify-content: center;
gap: 60px;
background-color:  rgba(104, 96, 96, 0.52);

`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:space-between;
  gap: 20px;
  width: 800px;
`;

export const NaviTitle = styled.a`
  font-size: 30px;
  font-weight: bold;
  color: black;
  cursor: pointer;

  
`;
export const InfoText = styled.p`
  font-size: 20px;
  color: black;
`;


export const ButtonControl = styled.div`
  width: 120px;

`;
