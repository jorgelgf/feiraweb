import styled from "styled-components";

export const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: auto;
  transition: all 0.5s;
  div {
    width: auto;
    position: relative;
    margin: 1rem;
    text-transform: uppercase;

    span {
      font-size: 1rem;
      color: #ccc;
      color: rgba(255, 255, 255, 0, 0.25);
      position: absolute;
      top: 18px;
      left: 10px;
      pointer-events: none;
      z-index: 1;
    }
  }

  div Input:valid ~ span,
  div Input:focus ~ span {
    color: #858181;
    transform: translateX(10px) translateY(-14px);
    font-size: 0.65em;
  }
`;
