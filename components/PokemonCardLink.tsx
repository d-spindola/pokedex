import styled from "@emotion/styled";
import { FC, useEffect, useRef, useState } from "react";
import { getPokemon } from "../lib/api";
import { Pokemon } from "../types/api";
import { hexColorRandomizer } from "../utils/hexColorRandomizer";
import Image from "next/image";
import CT from "colorthief";

interface Props {
  pokemonName: string;
  types: string[];
  id: unknown;
}

const Container = styled.div<{ background: string }>(({ background }) => ({
  backgroundColor: background,
  display: "flex",
  flexDirection: "column",
  height: "10em",
  borderRadius: "8px",
  padding: "0 15px",
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

const PokemonCardLink: FC<Props> = ({ pokemonName, types, id }) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const imageId = `pokemon-image-${pokemonName}`;
  const [background, setBackground] = useState<string>("");
  const ref = useRef<HTMLImageElement>();

  useEffect(() => {
    getPokemon(pokemonName).then((p) => {
      setPokemon(p);
    });
  }, []);

  useEffect(() => {
    const ct = new CT();
    const el = document.getElementById(imageId);
    console.log(ct, el);

    if (el) {
      const [r, g, b] = ct.getColor(el, 1);
      setBackground(`rgb(${r}, ${g}, ${b})`);
    }

    // console.log(color);
  }, [pokemon, ref]);

  return (
    <Container background={background}>
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
        {pokemon && pokemon.sprites.front_default && (
          <img
            ref={ref}
            id={imageId}
            src={pokemon.sprites.front_default}
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
