// import { type FormEvent, useState,type ChangeEvent } from "react"; 
import {LoginForm_component,Title_loginForm} from "./styles";
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import { useFormik } from "formik";
import * as Yup from "yup";
import {LOGIN_FORM_VALUES} from "./types"



function LoginForm(){
// пример работы с контролируемыми элентами на странице
    // const [inputValue, setinputValue] = useState<string>(""); 

    // const changeInputValue = (event : ChangeEvent<HTMLInputElement>)=>{

    //   setinputValue(event.target.value);
    // // }

  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");

  // const changeEmail = (event: ChangeEvent<HTMLInputElement>) => {
  //   setEmail(event.target.value);
   
  // };

  // const changePassword  = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPassword(event.target.value);
     
  // };
 
  //   const login = (event: FormEvent<HTMLFormElement>)=>{ 
  //       event.preventDefault();

  //        console.log (email)
  //        console.log (password)
  //   }

///////////////////////////////////////////////////////////////////////////////////////
  // Вадидация с помощью yup
  const validationSchema = Yup.object().shape({
    [LOGIN_FORM_VALUES.EMAIL]: Yup.string()
      .required("Email field is required")
      .email("This field should be in email format"),
    [LOGIN_FORM_VALUES.PASSWORD]: Yup.string()
      .required("Password field is required")
      .min(5, "Password field should contain minimum 5 characters")
      .max(20, "Passwod field should contain maximum 20 characters"),
  });


   //////////////////////////////////////////////////////////////
   // useFormik возвращает обьект, в котором прописанные необходимые данные о форме и вспомогательные функции для работы с формой
  // useFormik принимает в качестве аргумента обьект - он является обязательным
  // обьект который мы передаем useFormik нужен для настройки обьекта, который возвращает хук useFormik
  // обьект, который мы передаем useFomik имеет 2 обязательных ключа:
  // 1. initialValues - принимат в качестве значения обьект:
  // - в качестве ключа у нас выступает значение атрубута name в элементах формы
  // - в качестве значения ключа мы прописывает значение по умолчанию, которое должно быть в элеиенте формы
  // 2. onSubmit - это функция, которая вызывается на событие submit(при клике на кнопку с type="submit")
const formik = useFormik({
  initialValues : {
    [LOGIN_FORM_VALUES.EMAIL]:"",
    [LOGIN_FORM_VALUES.PASSWORD]: ""
  },
  validationSchema: validationSchema,
  validateOnMount: false,
  validateOnChange: false,
  onSubmit: (values, helpers) => {
    console.log("formik~~~")
   // values - это обьект, ключи которого явлются значение атприбута name у элементов формы, а значение ключа - это то что ввел пользователь в наших элементах формы
      console.log(values);
      // Вспомогательные функции, которые мы можем использовать во время события submit
      // например helpers.resetForm() -  очищает форму от значений(т.е делает занчения формы по умолчанию)
      console.log(helpers);
      // helpers.resetForm();
      

  }
});

  console.log(formik);




    return  (
      // formik.handleSubmit - мы прописывает для того, чтобы когда мы нажали на кнопку c type="submit",
    //  у нас вызвалась функция, которую мы прописали в onSubmit
        <LoginForm_component  
        onSubmit={formik.handleSubmit} 
         >
        <Title_loginForm>Login form</Title_loginForm>
        
        <Input
        label="Email"
         name = {LOGIN_FORM_VALUES.EMAIL}
         
         placeholder = "Enter your email"
         id = "email-id"

         value={formik.values[LOGIN_FORM_VALUES.EMAIL]}
         // formik.values.email - мы прописываем, чтобы элемент формы получил значение
          // которое пользователь вводит с клавиатуры
         onChange={formik.handleChange}
         // formik.handleChange - помогает контрлировать ввод пользователя данных с клавиатуры
          // и когда пользователь что-то вводит, то formik.handleChange записывает данные в formik.values.email
          error={formik.errors[LOGIN_FORM_VALUES.EMAIL]}
        />
        <Input
        label="Password"
         name = {LOGIN_FORM_VALUES.PASSWORD}
         type = "password"
         placeholder = "Enter your password"
         id = "password"
         value={formik.values[LOGIN_FORM_VALUES.PASSWORD]}
         onChange={formik.handleChange}
         error={formik.errors[LOGIN_FORM_VALUES.PASSWORD]}
        />
    
        
        <Button 
         buttonName = "Login"
         type = "submit"
        />
        {/* <button type = "button" onClick = {testFunction}>Test</button>
         - вариант 1*/}
         {/* <button type = "button" onClick = {()=>{console.log ("Click on button test works")}}>
        Test</button> */}
        </LoginForm_component> )
}
export default LoginForm;