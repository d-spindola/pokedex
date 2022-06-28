import styled from "@emotion/styled";
import Image from "next/image";

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

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Image src="/pokeball.png" width={32} height={32} />
        <p>{process.env.app_name}</p>
      </LogoContainer>
    </HeaderContainer>
  );
};

export default Header;
