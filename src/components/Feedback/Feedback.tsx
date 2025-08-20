import { useState } from "react";

import Button from "components/Button/Button"
import {type FeedbackProps} from  "./types"
import{FeedbackWrapper,FeedbackControl,ButtonCountContainer,FeedbackCount,}from "./styles";

function Feedback({like, dislike, onLike, onDislike, resetResults}:FeedbackProps) {
 

  return (
    <FeedbackWrapper>
      <FeedbackControl>
        <ButtonCountContainer>
          <Button buttonName="Like" onClick={onLike} />
          <FeedbackCount>{like}</FeedbackCount>
        </ButtonCountContainer>
        <ButtonCountContainer>
          <Button buttonName="Dislike" onClick={onDislike} />
          <FeedbackCount>{dislike}</FeedbackCount>
        </ButtonCountContainer>
      </FeedbackControl>
      <Button buttonName="Reset Results" onClick={resetResults} />
    </FeedbackWrapper>
  );
}

export default Feedback;