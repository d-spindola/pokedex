type Sprite = {
  back_default: string | null;
  back_female: string | null;
  front_default: string | null;
  front_female: string | null;
};

export interface PokemonPayload {
  id: string;
  name: string;
  sprites: Sprite;
}
