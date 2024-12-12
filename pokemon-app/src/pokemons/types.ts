export type PokemonType =
	| "fire"
	| "water"
	| "grass"
	| "electric"
	| "normal"
	| "legendary";

export interface Evolution {
	image: string;
	name: string;
}

export interface Pokemon {
	id: number;
	name: string;
	type: PokemonType;
	image: string;
	hp: number;
	description: string;
	evolutions: Evolution[];
}
