import styled from "@emotion/styled";
import {Link}from "react-router-dom"

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: left ;
  justify-content:start;
  gap: 30px;
  
  
`;
export const ClientsTitle = styled.p`
color: rgba(47, 67, 15, 1);
  font-size: 24px;
  font-weight: bold;

`;


export const ClientsNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ClientsLink = styled(Link)`
  color: black;
  font-size: 20px;
  
`;