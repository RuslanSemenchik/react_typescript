import "./styles.css";
import Feedback from "components/Feedback/Feedback";

import { useState } from "react";



function Homework_07(){
 const [like, setLike] = useState<number>(0); 
  const [dislike, setDislike] = useState<number>(0);

  const onLike = () :void => {
    setLike((prevValue :number):number => {
   
      return prevValue + 1;
    });
    
  };

  const onDislike = () : void => {
    setDislike((prevValue:number):number => prevValue + 1);
  };

  const resetResults = () => {
    setLike(0);
    setDislike(0);
  };

    return (<div> 
        <Feedback
        like={like}
        dislike={dislike}
        onLike={onLike}
        onDislike={onDislike}
        resetResults={resetResults}
        />

         </div>
)}
export default Homework_07