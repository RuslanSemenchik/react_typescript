
import { type ButtonProps} from "./types"
import {ButtonComponent} from "./styles"

function Button({buttonName = "Send", onClick = ()=>{}, type = "button", children }:ButtonProps){
    return <ButtonComponent  onClick={onClick} type ={type}>
        {/* {children ? "" : buttonName}  - вариант 1*/}
        {!children && buttonName}
        {children}
        </ButtonComponent>
}
export default Button;