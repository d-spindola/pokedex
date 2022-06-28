import styled from "@emotion/styled";
import { FC } from "react";
import { Sprite } from "../lib/types";

interface Props {
  pokemonName: string;
  types: string[];
  id: unknown;
  dominantColor: [string, string, string];
  sprites: Sprite;
}

const Container = styled.div<{ background: string }>(({ background }) => ({
  backgroundColor: background,
  display: "flex",
  flexDirection: "column",
  height: "10em",
  borderRadius: "8px",
  padding: "0 15px",
  position: "relative",
  "&::before": {
    content: "''",
    backgroundImage: "url('/pokeball.png')",
    backgroundBlendMode: "soft-light",
    backgroundPosition: "top",
    backgroundPositionX: "0px",
  },
}));

const PokemonNameContainer = styled.div(() => ({
  padding: "0 5px",
}));

const PokemonNameText = styled.p(() => ({
  fontSize: "1.5em",
  color: "white",
  fontWeight: "bold",
}));

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: end;
  align-items: center;
`;

const PokemonCardLink: FC<Props> = ({
  pokemonName,
  types,
  // id,
  dominantColor: [r, g, b],
  sprites,
}) => {
  return (
    <Container background={`rgb(${r}, ${g}, ${b})`}>
      <PokemonNameContainer>
        <PokemonNameText>{pokemonName}</PokemonNameText>
      </PokemonNameContainer>
      <div>
        <ul>
          {types.map((type, index) => {
            return <li key={`n-${index}-${type}`}>{type}</li>;
          })}
        </ul>
      </div>
      <ImageContainer>
        {sprites.front_default && (
          <img
            src={sprites.front_default}
            width={100}
            height={100}
            crossOrigin="anonymous"
          />
        )}
      </ImageContainer>
    </Container>
  );
};

export default PokemonCardLink;
