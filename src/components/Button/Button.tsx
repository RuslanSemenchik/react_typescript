import './styles.css'
import { type ButtonProps} from "./types"


function Button({buttonName = "Send", onClick = ()=>{}, type = "button", children }:ButtonProps){
    return <button className="button_component" onClick={onClick} type ={type}>
        {/* {children ? "" : buttonName}  - вариант 1*/}
        {!children && buttonName}
        {buttonName}
        </button>
}
export default Button;