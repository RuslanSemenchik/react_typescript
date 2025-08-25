import { type FormEvent, useState,type ChangeEvent } from "react"; 
import {LoginForm_component,Title_loginForm} from "./styles";
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
function LoginForm(){
// пример работы с контролируемыми элентами на странице
    // const [inputValue, setinputValue] = useState<string>(""); 

    // const changeInputValue = (event : ChangeEvent<HTMLInputElement>)=>{

    //   setinputValue(event.target.value);
    // // }

    const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const changeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
   
  };

  const changePassword  = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
     
  };
 
    const login = (event: FormEvent<HTMLFormElement>)=>{ 
        event.preventDefault();

         console.log (email)
         console.log (password)
    }
   
    return  (
        <LoginForm_component  
        onSubmit={login} 
         >
        <Title_loginForm>Login form</Title_loginForm>
        
        <Input
        label={"Email"}
         name = {"email"}
         type = {"email"}
         placeholder = {"Enter your email"}
         id = {"email-id"}
         value={email}
         onChange={changeEmail}
         
        />
        <Input
        label={"Password"}
         name = {"password"}
         type = {"password"}
         placeholder = {"Enter your password"}
         id = {"password"}
         value={password}
         onChange={changePassword}
        />
    
        
        <Button 
         buttonName = {"Login"}
         type = {"submit"}
        />
        {/* <button type = "button" onClick = {testFunction}>Test</button>
         - вариант 1*/}
         {/* <button type = "button" onClick = {()=>{console.log ("Click on button test works")}}>
        Test</button> */}
        </LoginForm_component> )
}
export default LoginForm;