import { useContext } from "react";
import { BlogManagmentContext } from "homeworks/Homework_13/components/BlogManagement/BlogManagement";

import { MessageWrapper, MessageText, MessageTitle } from "./styles";

function Message() {
  const message = useContext(BlogManagmentContext);

  return (
    <MessageWrapper>
      <MessageTitle>Message:</MessageTitle>
      <MessageText>{message}</MessageText>
    </MessageWrapper>
  );
}

export default Message;
