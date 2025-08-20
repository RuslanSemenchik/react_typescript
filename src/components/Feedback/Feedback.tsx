import { useState } from "react";

import Button from "components/Button/Button"
import {type FeedbackProps} from  "./types"
import "./styles.css";

function Feedback({like, dislike, onLike, onDislike, resetResults}:FeedbackProps) {
 

  return (
    <div className="feedback-wrapper">
      <div className="feedback-control">
        <div className="buttonwithcount-container">
          <Button buttonName="Like" onClick={onLike} />
          <p className="count">{like}</p>
        </div>
        <div className="buttonwithcount-container">
          <Button buttonName="Dislike" onClick={onDislike} />
          <p className="count">{dislike}</p>
        </div>
      </div>
      <Button buttonName="Reset Results" onClick={resetResults} />
    </div>
  );
}

export default Feedback;