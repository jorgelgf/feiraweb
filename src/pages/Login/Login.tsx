import { useState } from "react";
import Input from "../../components/Input";
import * as S from "./styles";
import Buttom from "../../components/Buttom";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    if (login === "jobel" && password === process.env.REACT_APP_PASSWORD) {
      navigate("/PageList");
    }
  };
  return (
    <S.ContainerLogin>
      <span>
        LOGIN:{" "}
        <Input
          type="text"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
      </span>
      <span>
        PASSWORD:{" "}
        <Input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </span>

      <Buttom onClick={() => handleClick()}>SignIn</Buttom>
    </S.ContainerLogin>
  );
};

export default Login;
