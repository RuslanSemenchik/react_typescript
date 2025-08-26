import styled from "@emotion/styled";

// export const PageWrapper = styled.div`
//   display: flex;
//   flex: 1;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background-color: rgba(0, 10, 66, 0.9);
//   gap:30px;
// `;
// export const InputButtonContainer = styled.div`

//    display: flex;
  
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background-color: rgba(0, 10, 66, 0.9);
 

// `

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
  max-width: 500px;
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
  gap: 16px;
  justify-content: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
`;
export const InputWrapper = styled.div`
  flex: 1;
  min-width: 280px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  color: aliceblue;
`;
export const UniCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;
export const Card = styled.div`
  background: white;
  color: #452c2cff;
  padding: 16px;
  border-radius: 12px;
  width: 260px;
`;
export const ErrorMessage = styled.div`
  text-align: center;
  color: #FF6666;
  font-size: 18px;
  margin: 20px;
`;