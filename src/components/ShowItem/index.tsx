import * as S from "./styles";

interface ShowItemProps {
  children: React.ReactNode;
}

const ShowItem = ({ children }: ShowItemProps) => {
  return <S.ContainerItem>{children}</S.ContainerItem>;
};

export default ShowItem;
