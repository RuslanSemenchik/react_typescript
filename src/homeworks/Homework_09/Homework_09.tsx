import { PageWrapper,JokeCard,JokeText,JokeContainer, JokeError} from "./styles";
import Button from "components/Button/Button";
import { JOKE_URL } from "./data";
import { useState,useEffect } from "react";
import axios from "axios";



function Homework_09(){

const [joke, setJoke] = useState<string | undefined>(undefined) ; 
const [error,setError] = useState<string | undefined>(undefined) ; 
const [isDisabled, setIsDisabled] = useState <boolean>(false);


const getJoke = async () => {
    setJoke(undefined);
    setError(undefined);
    setIsDisabled(true);
    ////////////////////////////////////////////////////////
    // Пример запроса через библиотеку axios
    try {
      const response = await axios.get(JOKE_URL);
      const data = response.data;
      console.log (error)
      
      // тут пишем логику, когда нам пришла шутка(статус промиса fullfiled)
      setJoke(`${data.setup} ${data.punchline}`);
    } catch (error: any) {
      // тут пишем логику, когда нам пришла ошибка(статус промиса rejected)
      console.log(error);
      setError(error.message);
    } finally {
      setIsDisabled(false);
    }
  }






   ///////////////////////////////////////////////////////////
//     // Пример запроса через метод fetch()
// const getJoke = async()=>{
//     setIsDisabled(true);
//     setJoke(undefined);
//     setError(undefined);
    


//     const response = await fetch (JOKE_URL);
//     const result = await (response.json())

//     if(response.ok){
//         setIsDisabled(false);
//         setJoke(`${result.setup} ${result.punchline}`) 
        

//     } else {
//       setIsDisabled(false);
//         setError("Some Network Error")
       
//     }
// }


  useEffect(() => {
    
    console.log("MOUNTING");
    getJoke();
  }, []);




return <PageWrapper>
<JokeCard>
<JokeContainer>

 {!!joke && <JokeText>{joke}</JokeText>}

 {!!error && <JokeError>{error}</JokeError>} 

</JokeContainer>


<Button
disabled = {isDisabled}
buttonName="Request"
onClick={()=>{
    getJoke()
}}

/>
</JokeCard>
</PageWrapper>
}

export default Homework_09;