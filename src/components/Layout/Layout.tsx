
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
  navlinkProps
} from "./styles";
import type { LayoutProps } from "./types";
import { useNavigate } from "react-router-dom";
import { NAVIGATION_MENU_ROUTES } from "constants/routes";
import { v4 } from "uuid";

function Layout({children}: LayoutProps) {
const navigate = useNavigate();

    const goToHomePage = ()=>{
        navigate("/");
    }
    

  const headerLinks = Object.keys(NAVIGATION_MENU_ROUTES).map((route) => {
      return(
      <HeaderLink 
      key={v4()} 
      to ={NAVIGATION_MENU_ROUTES[route as keyof typeof NAVIGATION_MENU_ROUTES]}
      style = {({isActive})=> navlinkProps(isActive)}
      >
      {route}
      </HeaderLink> 
    )}
    )

    const footerLinks = Object.keys(NAVIGATION_MENU_ROUTES).map((route) => {
      return(
      <FooterLink 
      key={v4()} 
      to ={NAVIGATION_MENU_ROUTES[route as keyof typeof NAVIGATION_MENU_ROUTES]}>
        {route}
      </FooterLink> 
    )}
    )




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
           {headerLinks}
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
            {footerLinks}
        </FooterNavigation>


      </Footer>
    </LayoutWrepper>
  );
}
export default Layout;
