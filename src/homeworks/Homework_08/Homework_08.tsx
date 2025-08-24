
import { PageWrapper,ButtonControl} from "./styles";
import Button from "components/Button/Button";
import Input from "components/Input/Input";





function Homework_08(){


return <PageWrapper>
<ButtonControl>
        <Button buttonName="Simple Button"
         onClick={() => {
            console.log("Button Works")}}
        />
        
        </ButtonControl>

        <ButtonControl>
        <Button 
        isRed
        buttonName=" Delete Button"/>
        </ButtonControl>
        <ButtonControl>
        <Button 
         disabled={true}
          isRed={true}
          buttonName="Disabled Button"
          onClick={() => {
            console.log("Button Works");
          }}
        
        />
        </ButtonControl>


      
        <Input
        id="first"
        name="input_01"
        label="disabled"
        placeholder="disabled"
        disabled = {true}
        
        />

        
        <Input
        id="first"
        name="input_01"
        label="disabled"
        placeholder="disabled"
        error= "Some error"
        
/>



</PageWrapper>
}
export default Homework_08;