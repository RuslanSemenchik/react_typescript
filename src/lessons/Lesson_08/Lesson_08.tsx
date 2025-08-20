import { ButtonControl, PageWrapper, Paragraph,Box1,Box2,Box3 } from "./styles";
import Button from "components/Button/Button";
function Lesson_08(){
    return <PageWrapper>
        <Paragraph>Lesson_08</Paragraph>
        <ButtonControl>
        <Button buttonName="Simple Button"/>
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

      <Box1>Box 1</Box1>
      <Box2>Box 2</Box2>
      <Box3>Box 3</Box3>
        </PageWrapper>
}
export default Lesson_08;