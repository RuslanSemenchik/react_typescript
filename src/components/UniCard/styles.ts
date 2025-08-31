import styled from "@emotion/styled";


export const UniCardComponent = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width : 300px;
  min-width:content;
  min-height: content;
  height: 150px;
  border: 2px solid rgb(5, 36, 42);
  padding: 30px;
  border-radius: 6px;
  background-color: rgb(227, 237, 237);


`
export const CardTitle = styled.p`
  font-size: 20px;
  color: rgb(18, 109, 162);
  font-weight: bold;

`
export const CardInfo = styled.a`
  font-size: 18px;
  color: black;
text-decoration :none
`