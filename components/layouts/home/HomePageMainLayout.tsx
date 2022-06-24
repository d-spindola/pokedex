import styled from "@emotion/styled";

const HomePageMainLayout = styled("main")(({ children }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "1.5em",
  background: "linear-gradient(115deg, #ffffff, #ccd7ffe0)",
  padding: "0 1em",
}));

export default HomePageMainLayout;
