
import{InputContainer,LoginFormLabel,LoginFormInputContainer,ErrorText} from  "./styles"
import { type InputProps } from './types';

function Input({
  id , 
  name = "",
  type = "", 
  placeholder = "Enter your...",
  label,
  disabled = false,
  error,
  value,
  onChange } : InputProps ) {
    return <LoginFormInputContainer > 
           <LoginFormLabel htmlFor={id}>{label}</LoginFormLabel>
            <InputContainer
            id={id}
            name= {name}
            type= {type}
            placeholder= {placeholder}
            disabled = {disabled}
            $error = {error}
            value={value}
            onChange={onChange}
          />  

          {!!error && <ErrorText>{error}</ErrorText>}
           </LoginFormInputContainer>
}
export default Input;