import {
  PageWrapper,
  Container,
  NaviTitle,
  InfoText,
  ButtonControl,
} from "./styles";
import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom";

function Wargaming() {
  const navigation = useNavigate();
  const goBack = () => {
    navigation(-1);
  };
  return (
    <PageWrapper>
      <Container>
        <NaviTitle href="https://www.wargaming.net/" target="_blank">
          Wargaming
        </NaviTitle>
        <InfoText>
          Wargaming — частная компания, издатель и разработчик компьютерных игр
          преимущественно free-to-play ММО-жанра и околоигровых сервисов для
          разных платформ. Штаб-квартира располагается в Никосии, Республика
          Кипр[5], центры разработок — в Киеве, Сиэтле, Чикаго, Балтиморе,
          Сиднее, Хельсинки, Остине, Праге и Вильнюсе. Официальным партнёром
          компании является Wargaming Public Co. Limited — кипрская
          компания-дистрибьютор, основанная Виктором Кислым 26 июля 2011 года
        </InfoText>
      </Container>
      <ButtonControl>
        <Button buttonName="Go back" onClick={goBack} />
      </ButtonControl>
    </PageWrapper>
  );
}
export default Wargaming;
