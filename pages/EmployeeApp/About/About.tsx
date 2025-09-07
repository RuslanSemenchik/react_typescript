import Button from "components/Button/Button";

import { PageWrapper, ButtonControl } from "./styles";

function About() {
  return (
    <PageWrapper>
      Information about company
      <ButtonControl>
        <Button name="Go back" />
      </ButtonControl>
      <ButtonControl>
        <Button name="Go to Home page" />
      </ButtonControl>
    </PageWrapper>
  );
}

export default About;
