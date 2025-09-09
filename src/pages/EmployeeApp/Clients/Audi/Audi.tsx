import {
  PageWrapper,
  Container,
  NaviTitle,
  InfoText,
  ButtonControl,
} from "./styles";
import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom";

function Audi() {
  const navigation = useNavigate();
  const goBack = () => {
    navigation(-1);
  };
  return (
    <PageWrapper>
      <Container>
        <NaviTitle href="https://www.audi.com/" target="_blank">
          Audi
        </NaviTitle>
        <InfoText>
          Audi AG — немецкая
          автомобилестроительная компания в составе концерна Volkswagen Group,
          специализирующаяся на выпуске автомобилей под маркой Audi.
          Штаб-квартира расположена в городе Ингольштадт (Германия). 
          Девиз — Vorsprung durch Technik. 
          Объём производства в 2016 году составил около 1 903 259 автомобилей.
        </InfoText>
      </Container>
      <ButtonControl>
        <Button buttonName="Go back" onClick={goBack} />
      </ButtonControl>
    </PageWrapper>
  );
}
export default Audi;
