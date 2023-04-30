import Header from "../../components/Header/Header";
import * as S from "./styles";
interface LayoutProps {
  children?: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Container>
      <Header>FEIRA</Header>
      {children}
    </S.Container>
  );
};

export default Layout;
