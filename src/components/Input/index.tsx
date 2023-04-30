import { FormEvent } from "react";
import * as S from "./styles";
interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type: string;
}

const Input = ({ onChange, value, type }: InputProps) => {
  const handleSubmit = (event: FormEvent) => {
    event?.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <S.Input onChange={onChange} value={value} type={type} />
      </form>
    </>
  );
};

export default Input;
