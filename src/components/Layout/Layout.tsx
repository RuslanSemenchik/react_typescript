
import {
  LayoutWrepper,
  Header,
  Main,
  Footer,
  Logo,
  LogoImg,
  HeaderLink,
  NavigationContainer,
  FooterLink,
  FooterLogo,
  FooterNavigation,
} from "./styles";
import type { LayoutProps } from "./types";
import { useNavigate } from "react-router-dom"; 

function Layout({children}: LayoutProps) {
const navigate = useNavigate();

    const goToHomePage = ()=>{
        navigate("/");
    }






  return (
    <LayoutWrepper>
      <Header>
        <Logo onClick={goToHomePage}>
            <LogoImg
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOGDYH2tzlcwZSDpjg0qRGgEHAxVhsKHFUg&s"
            alt="Logo"
            />
        </Logo>
        <NavigationContainer>
            <HeaderLink 
            style = {({isActive})=> ({
                fontWeight: isActive ? "bold": "normal",
                textDecoration : isActive? "underline" : "none"

            })}to ="/">Home</HeaderLink>
            <HeaderLink 
             style = {({isActive})=> ({
                fontWeight: isActive ? "bold": "normal",
                textDecoration : isActive? "underline" : "none"

            })}
            to ="/contactUs">Contact Us</HeaderLink>
            <HeaderLink 
             style = {({isActive})=> ({
                fontWeight: isActive ? "bold": "normal",
                textDecoration : isActive? "underline" : "none"

            })}
            to ="/about">About</HeaderLink>
            <HeaderLink 
             style = {({isActive})=> ({
                fontWeight: isActive ? "bold": "normal",
                textDecoration : isActive? "underline" : "none"

            })}
            
            to ="/login">Login</HeaderLink>

            <HeaderLink 
            style={({isActive})=>({
                fontWeight: isActive ? "bold": "normal",
                textDecoration : isActive? "underline" : "none"
            })}
            to = "/clients">Clients</HeaderLink>
        </NavigationContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <FooterLogo>
            <LogoImg
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOGDYH2tzlcwZSDpjg0qRGgEHAxVhsKHFUg&s"
            alt="Logo"
            />
        </FooterLogo>
        <FooterNavigation>
            <FooterLink to ="/">Home</FooterLink>
            <FooterLink to ="/contactUs">Contact Us</FooterLink>
            <FooterLink to ="/about">About</FooterLink>
            <FooterLink to ="/Login">Login</FooterLink>
            <FooterLink to ="/Clients">Clients</FooterLink>
        </FooterNavigation>


      </Footer>
    </LayoutWrepper>
  );
}
export default Layout;
