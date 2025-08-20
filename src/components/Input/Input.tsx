
import{InputContainer,LoginFormLabel,LoginFormInputContainer} from  "./styles"
import { type InputProps } from './types';
function Input({id , name = "",type = "", placeholder = "Enter your...",label}: InputProps){
    return <LoginFormInputContainer >
    
            <LoginFormLabel htmlFor={id}>{label}</LoginFormLabel>
            <InputContainer
            id={id}
            name= {name}
            type= {type}
            placeholder= {placeholder}
          />  
           </LoginFormInputContainer>
}
export default Input;