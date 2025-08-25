import { PageWrapper,JokeCard,JokeText,JokeContainer} from "./styles";
import Button from "components/Button/Button";

import { useState,useEffect } from "react";



function Homework_09(){

const [joke, setJoke] = useState<string | undefined>(undefined) ; 

 
const JOKE_URL : string = " https://official-joke-api.appspot.com/random_joke";

const getJoke = async()=>{
    const response = await fetch (JOKE_URL);
    const result = await (response.json())

    if(response.ok){
        setJoke(result.setup) 

    } else {
        setJoke("Some Network Error")
       
    }
}


  useEffect(() => {
    
    console.log("MOUNTING");
    getJoke();
  }, []);


//   useEffect(() => {
//     if (joke) {
//       console.log("UPDATING");
//       getJoke();
//     }
//   }, [joke]);


return <PageWrapper>
<JokeCard>
<JokeContainer>
<JokeText>{joke}</JokeText>

</JokeContainer>


<Button
buttonName="Request"
onClick={()=>{

}}

/>
</JokeCard>
</PageWrapper>
}

export default Homework_09;