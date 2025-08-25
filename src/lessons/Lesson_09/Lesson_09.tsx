import { useEffect, useState } from "react";
import Input from "components/Input/Input";

import { PageWrapper, ContainerFacts, Card, Text } from "./styles";

function Lesson_09() {
  const CAT_FACT_URL: string = "https://catfact.ninja/fact";
  const [searchInput, setSearchInput] = useState<string>("");
  const [catFact, setCatFact] = useState<string | undefined>(undefined);

  const getCatFact = async () => {
    const response = await fetch(CAT_FACT_URL, {
      method: "GET",
    });

    const result = await response.json();

    console.log(result);

    if (response.ok) {
      // тут пишем логику, когда у нас пришел успешный ответ от сервера
      setCatFact(result.fact);
    } else {
      // тут пишем логику, когда у нас пришла ошибка
    }
  };

  // 1 Lifesycle phase - MOUNTING
  // 1 аргумент - функция, которая должна выполнится в определенный жизненный цикл компонента
  // 2 аргумент - массив зависимостей, с помощью него мы можем определить жизненный цикл компонента
  // Если мы прокидываем пустой массив во 2 аргументе, то мы определяем 1 фазу жизненного цикла - Mounting

  useEffect(() => {
    // Например в MOUNTING можно тправить запрос на сервер при загрузке страницы(т.е создании компонета - первичный рендеринг)
    console.log("MOUNTING");
    getCatFact();
  }, []);

  // UPDATING
  useEffect(() => {
    if (searchInput) {
      console.log("UPDATING");
      getCatFact();
    }
  }, [searchInput]);

  // UNMOUNTING
  useEffect(() => {
    return () => {
      console.log("UNMOINTING");
    };
  }, []);

  return (
    <PageWrapper>
      {/* <LoginForm /> */}
      <Card>
        <ContainerFacts>
          <Input
            id="search_input"
            name="search"
            placeholder="Enter something and get new cat fact"
            label="Get new cat fact"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <Text>{catFact}</Text>
        </ContainerFacts>
      </Card>
    </PageWrapper>
  );
}
export default Lesson_09;