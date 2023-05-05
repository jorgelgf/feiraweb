import * as S from "./styles";
interface ButtomProps {
  children: string;
  onClick?: () => void;
  SX?: object;
}
const Buttom = ({ children, onClick, SX }: ButtomProps) => {
  return (
    <S.Button style={SX} onClick={onClick}>
      {children}
    </S.Button>
  );
};

export default Buttom;
