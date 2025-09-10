import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";

import { PageWrapper, ButtonControl, Container, NaviTitle,InfoText} from "./styles";
import { type ClientTemplateProps } from "./types";

function ClientTemplate({ children, href, clientName }: ClientTemplateProps) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
   <PageWrapper>
      <Container>
        <NaviTitle 
         href = {href}  target = "_blank">{clientName}</NaviTitle>
        <InfoText>
          {children}
        </InfoText>
      </Container>
      <ButtonControl>
        <Button buttonName="Go back" onClick={goBack} />
      </ButtonControl>
    </PageWrapper>
  );
}

export default ClientTemplate;