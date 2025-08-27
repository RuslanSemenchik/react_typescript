import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  background-image: url("https://toping.uz/storage/articles/6810/fsLsztBdlwF9oQmV7pY12lkEtB9UmPK9.webp");
  background-size: cover;
  background-position: center;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 20px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.49);
    z-index: 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  z-index: 1;
  color: white;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
  h1 {
    color: black;
    font-size: 36px;
    margin: 10px;
    font-family: "Lato", sans-serif;
  }
  p {
    font-size: 18px;
    font-family: "Lato", sans-serif;
  }
`;

export const InputButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0 auto 30px;
  width: 100%;
  max-width: 500px;
`;

export const InputWrapper = styled.div`
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  color: aliceblue;
  display: flex;
  justify-content: center;
  width: 100%;

  button {
    width: auto;
    min-width: 200px;
    max-width: 100%;
  }
`;

export const UniCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 100%;
`;

export const Card = styled.div`
  background: white;
  color: #452c2cff;
  padding: 16px;
  border-radius: 12px;
  width: 260px;
  box-sizing: border-box;
  max-height: 200px;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3,
  a {
    min-width: 0;
  }

  h3 {
    font-size: 16px;
    margin-bottom: 8px;
    max-width: 100%;
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  a {
    font-size: 14px;
    color: #1f27f5;
    text-decoration: none;
    display: block;
    max-width: 100%;
    overflow-wrap: anywhere;
    word-break: break-word;
    white-space: normal;
  }
`;

export const ErrorMessage = styled.div`
  text-align: center;
  color: #7e1717ff;
  font-size: 24px;
  font-weight: bold;
  margin: 20px;
`;
