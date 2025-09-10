import { PageWrapper,ClientsTitle, ClientsNavigation, ClientsLink } from "./styles";
import Apple from "./Apple/Apple";
import Audi from "./Audi/Audi";
import Wargaming from "./Wargaming/Wargaming";
import {MENU_ROUTES}from "constants/routes"
import { useEffect } from "react";

function Clients() {

useEffect(() => {
    // Unmounting
    return () => {
      console.log("Unmounting Clients Component");
    };
  }, []);

  return (
    <PageWrapper>
      <ClientsTitle>Clients :</ClientsTitle>
      <ClientsNavigation>
        <ClientsLink to={MENU_ROUTES.APPLE}>Apple</ClientsLink>
        <ClientsLink to={MENU_ROUTES.AUDI}>Audi</ClientsLink>
        <ClientsLink to={MENU_ROUTES.WARGAMING}>Wargaming</ClientsLink>
      </ClientsNavigation>
      
    </PageWrapper>
  );
}
export default Clients;
