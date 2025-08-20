
import { type ButtonProps} from "./types"
import {ButtonComponent} from "./styles"

function Button({
    buttonName = "Send", 
    onClick = ()=>{}, 
    type = "button", 
    isRed = false,
    disabled = false,
    children }:ButtonProps){
    return <ButtonComponent  disabled = {disabled} $isRed = {isRed} onClick={onClick} type ={type}>
        {/* {children ? "" : buttonName}  - вариант 1*/}
        {!children && buttonName}
        {children}
        </ButtonComponent>
}
export default Button;