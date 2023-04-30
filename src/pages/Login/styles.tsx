import styled from "styled-components";

export const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  //border: solid black 1px;
  span {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 1rem;
    input {
      width: 10rem;
      margin-left: 1rem;
    }
  }
`;
