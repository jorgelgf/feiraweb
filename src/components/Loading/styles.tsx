import styled from "styled-components";
export const DivLoading = styled.div`
  width: 100px;
  height: 100px;
  border: 5px solid white;
  border-radius: 50%;
  border-top-color: transparent;
  color: #fff;
  animation: load 0.5s linear infinite;
  @keyframes load {
    to {
      transform: rotate(360deg);
    }
  }
`;
