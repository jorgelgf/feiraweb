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
      <div>
        <Input
          type="text"
          name="LOGIN"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
      </div>
      <div>
        <Input
          type="password"
          name="PASSWORD"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <Buttom onClick={handleClick}>SignIn</Buttom>
    </S.ContainerLogin>
  );
};

export default Login;
