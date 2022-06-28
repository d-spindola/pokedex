import styled from "@emotion/styled";
import Image from "next/image";
import { FC } from "react";

const HeaderContainer = styled.header({
  display: "flex",
  alignItems: "center",
  padding: "1em 0 0",
});

const LogoContainer = styled.div({
  display: "flex",
  alignItems: "center",
  fontSize: "1.2em",
  fontWeight: "bold",
});

interface Props {
  appName: string;
}

const Header: FC<Props> = ({ appName }) => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Image src="/pokeball.png" width={32} height={32} />
        <p>{appName}</p>
      </LogoContainer>
    </HeaderContainer>
  );
};

export default Header;
