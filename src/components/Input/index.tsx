import { FormEvent } from "react";
import * as S from "./styles";
interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type: string;
  name?: string;
  SX?: object;
}

const Input = ({ onChange, value, type, name, SX }: InputProps) => {
  const handleSubmit = (event: FormEvent) => {
    event?.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{ transition: "all 0.2s" }}>
        <S.Input
          onChange={onChange}
          style={SX}
          value={value}
          type={type}
          required
        />
        <span>{name}</span>
      </form>
    </>
  );
};

export default Input;
