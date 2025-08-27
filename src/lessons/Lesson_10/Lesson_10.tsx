import { useState } from "react";
import {
  PageWrapper,
  InputButtonContainer,
  Container,
  Header,
  InputWrapper,
  ButtonWrapper,
  ErrorMessage,
  UniCardWrapper,
  
} from "./styles";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import UniCard from "components/UniCard/UniCard";
import axios from "axios";
import { v4 } from "uuid";
import { type UniCardType } from "./types";

// Функция, которая собирает корректный URL и сохраняет его в LAST_URL.
import { buildUniversitiesUrl } from "./data";

function Lesson_10() {

  const [country, setCountry] = useState<string>("");
  const [error, setError] = useState<string | undefined>(undefined);
  const [uniArray, setUniArray] = useState<UniCardType[]>([]);

  // Обработчик клика по кнопке "Get Universities".
  const handleGetClick = async () => {
    const query = country.trim();
    // Если поле пустое, то выходим и запрос не формируем.
    if (!query) {
      return;
    }
    setError(undefined);

    const url = buildUniversitiesUrl(query);
    
    console.log("Lesson_10 formed url:", url);
   

    try {
      const response = await axios.get(url);
      const data = response.data.slice(0, 15);
      if (data.length === 0) {
        setError("No universities found matching your request");
      }
      setUniArray(data);
      console.log(data);
    } catch (error: any) {
      console.log(error);
      setError(error.message);
    } finally {
      ;
    }
  };

  ///////////////////////////////////////////

  return (
    <PageWrapper>
      <Container>
        <Header>
          <h1>University Search</h1>
          <p>Find universities by country name</p>
        </Header>
        <InputButtonContainer>
          
          <InputWrapper>
            <Input
              id="countryInput"
              name="country"
              type="text"
              label="Country"
              placeholder="Enter Country for searching universities"
              value={country} // текущее значение из state
              onChange={(e) => setCountry(e.target.value)} // пишем в state при каждом вводе
            />
          </InputWrapper>
          {/* Кнопка запуска действия. По клику вызываем handleGetClick */}
          <ButtonWrapper>
            <Button buttonName="Get Universities" onClick={handleGetClick} />
          </ButtonWrapper>
        </InputButtonContainer>
        {error && <ErrorMessage>Error: {error}</ErrorMessage>}
        <UniCardWrapper>
          {uniArray.map((uni: UniCardType) => (
            <UniCard key={v4()} name={uni.name} webPage={uni.web_pages[0]} />
          ))}
        </UniCardWrapper>
      </Container>
    </PageWrapper>
  );
}
export default Lesson_10;
