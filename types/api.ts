import { PokemonPayload } from "../lib/types";

export type Pokemon = PokemonPayload & {
  dominantColor: [string, string, string];
};
