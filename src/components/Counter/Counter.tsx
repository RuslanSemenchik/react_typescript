import{CounterWrepper,ButtonControl,CountComponent} from "./styles.ts";
import Button from "components/Button/Button";
import { type CounterProps } from "./types";



function Counter ({onMinus,onPlus,count}:CounterProps){
  

    return <CounterWrepper>
        <ButtonControl>
        <Button 
            onClick={onMinus}
            buttonName= "-"/>
        </ButtonControl>
        <CountComponent>{count}</CountComponent>
        <ButtonControl>
        <Button
            onClick={onPlus}
            buttonName= "+"
            />
        </ButtonControl>
    </CounterWrepper>

    
}
export default Counter;