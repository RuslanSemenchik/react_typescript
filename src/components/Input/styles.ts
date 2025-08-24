import styled from "@emotion/styled";


interface InputErrorProps {
    $error : string | undefined;
}

const generateInput = (disabled: boolean|undefined, error: string|undefined) => {
  if (disabled) {
    return "#acacacff";
  } else if (error === "Some error") {
    return "red";
  } else {
     return " rgba(63, 63, 63, 1)"  
    }
  };

// const generateInputError = (error : string|undefined) => {
//   if (error === "Some error") {
//     return "red";
//   } else {
//      return " rgba(63, 63, 63, 1)"
      
//     }
//   };


export const InputContainer = styled.input<InputErrorProps>`
display: flex;
flex-direction: column;
justify-content: center;
outline : none;
border: 2px solid ${({disabled,$error})=>(generateInput(disabled, $error))};
border-radius : 4px;
padding: 12px;
height: 50px;
width: 470px;
background-color: white;
color:  rgba(30, 30, 30, 1);
font-size: 16px;

 `
 export const LoginFormLabel = styled.label`
  font-size: 18px;
  font-weight: 400;
  padding: 1px;
  color: rgba(111, 111, 111, 1);
  height: 24px;

 `
  export const LoginFormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 68px;

  `

  