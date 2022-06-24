import styled from "@emotion/styled";
import { FC, ReactElement } from "react";

const mediaQuery = (query: "min" | "max", value: string) => {
  return `@media (${query}-width: ${value})`;
};

const Grid = styled.div(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: `1.5rem`,
  [mediaQuery("min", "50em")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  [mediaQuery("min", "70em")]: {
    gridTemplateColumns: "repeat(4, 1fr)",
  },
  [mediaQuery("min", "90em")]: {
    gridTemplateColumns: "repeat(5, 1fr)",
  },
  [mediaQuery("max", "30em")]: {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
}));

interface GridProps {
  children: JSX.Element;
}

const PokemonGridList: FC<GridProps> = ({ children }) => {
  return <Grid>{children}</Grid>;
};

export default PokemonGridList;
