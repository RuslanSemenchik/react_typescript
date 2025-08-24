import styled from "@emotion/styled";

 export const PageWrapper = styled.div`
display: flex;
flex-direction: column ;
flex : 1;
align-items: center;
justify-content: center;
gap: 20px;

`
interface ButtonComponentProps {
    $isRed : boolean;
}

const generateButtonColor = (isRed: boolean, disabled: boolean | undefined) => {
  if (disabled) {
    return "#acacacff";
  } else {
    if (isRed) {
      return " rgba(246, 108, 101, 1)";
    } else {
      return "#1f27f5";
    }
  }
};

const generateButtonColorOnHover = (
  isRed: boolean,
  disabled: boolean | undefined
) => {
  if (disabled) {
    return "#acacacff";
  } else {
    if (isRed) {
      return "#fc3333ff";
    } else {
      return "rgba(92, 97, 239, 1)";
    }
  }
};


 export const ButtonComponent = styled.button<ButtonComponentProps>`
 display: flex;
 align-items: center;
 justify-content: center;
 outline : none;
 border-radius : 4px;
 height: 70px;
 width: 100%;
 background-color: ${({$isRed, disabled})=> 
    generateButtonColor($isRed,disabled)} ;
 color:  rgba(255, 255, 255, 1);
 font-size: 20px;
 cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
 padding: 2px;


&:hover {
    background-color: ${({ $isRed, disabled }) =>
      generateButtonColorOnHover($isRed, disabled)};
  }
`;


export const ButtonControl = styled.div`
width: 300px;`