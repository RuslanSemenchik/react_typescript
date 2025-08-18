import "./styles.css";
import Button from "components/Button/Button";
// 1 шаг: импортировать функцию хук useState() из библиотеки React
import { useState } from "react";
import { type CounterProps } from "./types";
function Counter ({onMinus,onPlus,count}:CounterProps){
  


    return <div className="counter-wrapper">
        <div className="button-control">
            <Button 
            onClick={onMinus}
            buttonName= "-"/>
        </div>
        <p className="count">{count}</p>
        <div className="button-control">
            <Button
            onClick={onPlus}
            buttonName= "+"
            />
        </div>
    </div>

    
}
export default Counter;