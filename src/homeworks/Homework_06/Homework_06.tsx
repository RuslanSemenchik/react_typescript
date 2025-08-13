import CardAuto from "../../components/CardAuto/CardAuto";
import "./styles.css";

function Homework_06(){


    interface Car {
        brand: string;
        price: number;
        isDiesel: boolean;
    }
const cars: Car [] = [ { brand: "BMW", price: 20000, isDiesel: true }, { brand: "Mercedes", price: 22000, isDiesel: false }, { brand: "Porshe", price: 50000, isDiesel: true }, { brand: "Nissan", price: 25000, isDiesel: false }, { brand: "Audi", price: 50000, isDiesel: true } ];


    return (
    <div className="homework_06_page_wrapper">
         
        {cars.map((car: Car) => (
          <CardAuto
          brand={car.brand}
          price={car.price}
          isDiesel={car.isDiesel}
        />
      ))}
    </div>
  ); 
}
export default Homework_06;