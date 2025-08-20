import{ type Car} from "./types";
import CardAuto from "components/CardAuto/CardAuto";
import "./styles.css";
import { v4 } from "uuid";
// import {type ReactNode } from "react";
function Homework_06(){


const cars: Car [] = [ { brand: "BMW", price: 20000, isDiesel: true }, { brand: "Mercedes", price: 22000, isDiesel: false }, { brand: "Porshe", price: 50000, isDiesel: true }, { brand: "Nissan", price: 25000, isDiesel: false }, { brand: "Audi", price: 50000, isDiesel: true } ];


    return (
    <div className="homework_06_page_wrapper">
         
        {cars.map((car: Car) => (
          <CardAuto 
          key={v4()}
          brand={car.brand}
          price={car.price}
          isDiesel={car.isDiesel}
        />
      ))}
    </div>
  ); 
}
export default Homework_06;