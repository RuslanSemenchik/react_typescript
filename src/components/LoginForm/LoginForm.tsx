
import {LoginForm_component,Title_loginForm} from "./styles";
import Button from '../Button/Button';
import Input from 'components/Input/Input';
function LoginForm(){
    
    // const testFunction = ()=>{
    //     console.log("Click on button test works")
    // }
    return  (
        <LoginForm_component  
        onSubmit={(event)=>
        { event.preventDefault();
        console.log(event);
        console.log("Login started")}} 
         >
        <Title_loginForm>Login form</Title_loginForm>
        
        <Input
    
        label={"Email"}
         name = {"email"}
         type = {"email"}
         placeholder = {"Enter your email"}
         id = {"email-id"}
         
         
        />
        <Input
        label={"Password"}
         name = {"password"}
         type = {"password"}
         placeholder = {"Enter your password"}
         id = {"password"}
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