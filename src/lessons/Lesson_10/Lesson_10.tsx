import { useState } from "react";
import { PageWrapper } from "./styles";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

// Функция, которая собирает корректный URL и сохраняет его в LAST_URL.
import { buildUniversitiesUrl } from "./data";

function Lesson_10() {
  // Локальное состояние для ввода страны пользователем.
  const [country, setCountry] = useState<string>("");

  // Обработчик клика по кнопке "Get Universities".
  const handleGetClick = () => {
    const query = country.trim();
    // Если поле пустое, то выходим и запрос не формируем.
    if (!query) return;

    const url = buildUniversitiesUrl(query);
    // Пока просто выводится адрес в консоль. Это проверка, что всё собралось верно. Далее этот момент можно убрать или изменить.
    console.log("Lesson_10 formed url:", url);
    // Здесь нужно будет поработать над axios и дальнейшей обработкой данных и/или ошибок.
  };

  return (
    <PageWrapper>
      <div>
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
      </div>
    </PageWrapper>
  );
}

export default Lesson_10;
