import "./styles.css";
import { CardAutoComponent, CardTitle, CardInfo } from "./styles";

interface CarComponent {
  brand: string;
  price: number;
  isDiesel: boolean;
}
function CardAuto({ brand = "", price = 0, isDiesel }: CarComponent) {
  return (
    <CardAutoComponent>
      <CardInfo>
        <CardTitle>Brand: </CardTitle>
        {brand}
      </CardInfo>

      <CardInfo>
        <CardTitle>Price: </CardTitle>
        {price}
      </CardInfo>

      <CardInfo>
        <CardTitle>IsDiesel: </CardTitle>
        {isDiesel ? "Yes" : "No"}
      </CardInfo>
    </CardAutoComponent>
  );
}

export default CardAuto;
