import { useState } from "react";
import { PageWrapper, InputButtonContainer } from "./styles";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import UniCard from "components/UniCard/UniCard";
import axios from "axios";
import { v4 } from "uuid";
import { type UniCardType } from "./types";

// Функция, которая собирает корректный URL и сохраняет его в LAST_URL.
import { buildUniversitiesUrl } from "./data";

function Lesson_10() {
  // Локальное состояние для ввода страны пользователем.
  const [country, setCountry] = useState<string>("");
  const [error, setError] = useState<string | undefined>(undefined);
  const [uniArray, setUniArray] = useState<UniCardType[]>([]);

  // Обработчик клика по кнопке "Get Universities".
  const handleGetClick = async () => {
    const query = country.trim();
    // Если поле пустое, то выходим и запрос не формируем.
    if (!query) return;

    const url = buildUniversitiesUrl(query);
    // Пока просто выводится адрес в консоль. Это проверка, что всё собралось верно. Далее этот момент можно убрать или изменить.
    console.log("Lesson_10 formed url:", url);
    // Здесь нужно будет поработать над axios и дальнейшей обработкой данных и/или ошибок.

    try {
      const response = await axios.get(url);
      const data = response.data.slice(0, 16);
      setUniArray(data);
      console.log(data);
    } catch (error: any) {
      // setJoke(`${data.setup} ${data.punchline}`);

      // тут пишем логику, когда нам пришла шутка(статус промиса fullfiled)
      // setJoke(`${data.setup} ${data.punchline}`);
      // тут пишем логику, когда нам пришла ошибка(статус промиса rejected)
      console.log(error);
      setError(error.message);
    } finally {
      // setIsDisabled(false);
    }
  };

  ///////////////////////////////////////////

  return (
    <PageWrapper>
      <InputButtonContainer>
        {/* Поле ввода: контролируемое значение (value) + onChange обновляет state */}
        <Input
          id="countryInput"
          name="country"
          type="text"
          label="Country"
          placeholder="Enter Country for searching universities"
          value={country} // текущее значение из state
          onChange={(e) => setCountry(e.target.value)} // пишем в state при каждом вводе
        />
        {/* Кнопка запуска действия. По клику вызываем handleGetClick */}
        <Button
          type="button"
          buttonName="Get Universities"
          onClick={handleGetClick}
        />
      </InputButtonContainer>
      <div>
        {uniArray.map((uni: UniCardType) => (
          <UniCard 
          key={v4()} 
          name={uni.name} 
          webPage={uni.web_pages[0]} />
        ))}
      </div>

     
    </PageWrapper>
  );
}
export default Lesson_10;
