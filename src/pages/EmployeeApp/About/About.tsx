import Button from "components/Button/Button";

import { PageWrapper, ButtonControl } from "./styles";
import { useNavigate } from "react-router-dom";


function About() {
  const navigation  = useNavigate();

  const goToHome =()=>{
    navigation("/");
  }

  

const goBack =() =>{
    
    navigation(-1);
}


  return (
    <PageWrapper>
      Information about company
      <ButtonControl>
        <Button 
        buttonName ="Go back" 
        onClick={goBack}
        />
      </ButtonControl>
      <ButtonControl>
        <Button 
        buttonName ="Go to Home page"
        onClick={goToHome}
        />
      </ButtonControl>
    </PageWrapper>
  );
}

export default About;
