import { PageWrapper,ClientsTitle, ClientsNavigation, ClientsLink } from "./styles";
import Apple from "./Apple/Apple";
import Audi from "./Audi/Audi";
import Wargaming from "./Wargaming/Wargaming";

function Clients() {
  return (
    <PageWrapper>
      <ClientsTitle>Clients :</ClientsTitle>
      <ClientsNavigation>
        <ClientsLink to="/clients/apple">Apple</ClientsLink>
        <ClientsLink to="/clients/audi">Audi</ClientsLink>
        <ClientsLink to="/clients/wargaming">Wargaming</ClientsLink>
      </ClientsNavigation>
      
    </PageWrapper>
  );
}
export default Clients;
