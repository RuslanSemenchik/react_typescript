import styled from "@emotion/styled";

export const BlogManagementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 80px;
  width: 800px;
  min-height: 300px;
  max-height: fit-content;
  border: 2px solid black;
  border-radius: 8px;
  background-color: white;
`;

export const TextArea = styled.textarea`
  outline: none;
  border: 1px solid black;
  min-width: 100%;
  max-width: 100%;
  min-height: 70px;
  padding: 8px;
`;
