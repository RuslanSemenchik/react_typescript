import styled from "@emotion/styled";
import {NavLink,Link}from "react-router-dom"


export const LayoutWrepper = styled.div`
display: flex;
flex-direction: column;
flex: 1;
border-bottom: 1px solid black;

`
export const Header = styled.header`
display:  flex;
justify-content: space-between;
width: 100%;
height: 100px;
background-color:  rgba(17, 21, 64, 0.52);
padding: 20px 40px;
color: white;


`;

export const Logo = styled.div`
  height: 100%;
  width: 80px;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const NavigationContainer = styled.nav`
  display: flex;
  gap: 30px;
  height: 100%;
  align-items: center;
`;

export const HeaderLink = styled(NavLink)`
  color: white;
  font-size: 20px;
  font-weight: normal;
  text-decoration: none;
`;




export const Main = styled.main`
display: flex;
flex: 1;
padding: 40px;

`;

export const Footer = styled.footer`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
height: 150px;
border-top: 1ps solid black;
background-color:  rgba(17, 21, 64, 0.52);
padding: 20px 40px;
color: white;

`;
export const FooterLogo = styled.div`
  height: 80px;
  width: 80px;
  cursor: pointer;
`;

export const FooterNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FooterLink = styled(Link)`
  color: white;
  font-size: 14px;
  font-weight: bold;
`;

export const navlinkProps = (isActive: boolean) => ({
                fontWeight: isActive ? "bold": "normal",
                textDecoration : isActive? "underline" : "none"
            })