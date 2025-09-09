import {
  PageWrapper,
  Container,
  NaviTitle,
  InfoText,
  ButtonControl,
} from "./styles";
import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom";

function Apple() {
  const navigation = useNavigate();
  const goBack = () => {
    navigation(-1);
  };
  return (
    <PageWrapper>
      <Container>
        <NaviTitle href = "https://www.apple.com/" target = "_blank">Apple</NaviTitle>
        <InfoText>
          Apple — американская корпорация, разработчик
          персональных и планшетных компьютеров, аудиоплееров, смартфонов,
          программного обеспечения и цифрового контента. Штаб-квартира
          расположена в Купертино, штат Калифорния. Практически вся продукция
          Apple выпускается контрактными производителями на заводах в Азии,
          крупнейшим подрядчиком является тайваньская компания Foxconn,
          крупнейший завод — в Чжэнчжоу[6].
        </InfoText>
      </Container>
      <ButtonControl>
        <Button buttonName="Go back" onClick={goBack} />
      </ButtonControl>
    </PageWrapper>
  );
}
export default Apple;
