import * as S from "./styles";
interface HeaderProps {
  children: React.ReactNode;
}
const Header = ({ children }: HeaderProps) => {
  return <S.HeaderContainer>{children}</S.HeaderContainer>;
};

export default Header;
