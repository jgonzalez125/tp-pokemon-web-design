import React, { useState } from "react";
import Header from "./header";
import Navbar from "./navbar";
import Card from "./pokemon-cards/card";
import { pokemons as pokemonsList } from "../pokemons";
import { Pokemon, PokemonType } from "../pokemons/types";
import "./main-page.css";

const MainPage: React.FC = () => {
	const [selectedType, setSelectedType] = useState<PokemonType | null>(null);
	const [pokemons, setPokemons] = useState<Pokemon[]>(pokemonsList);

	const handleTypeSelect = (type: PokemonType | null) => {
		setSelectedType(type);
		if (!type) {
			setPokemons(pokemonsList);
		} else {
			setPokemons(pokemonsList.filter((pokemon) => pokemon.type === type));
		}
	};

	return (
		<div>
			<Header />
			<Navbar onTypeSelect={handleTypeSelect} selectedType={selectedType} />
			<main className="main-page-container" style={styles.main}>
				{selectedType ? (
					<h2 style={styles.heading}>Tipo Seleccionado: {selectedType}</h2>
				) : (
					<h2 style={styles.heading}>Selecciona un Pokemon</h2>
				)}
				<div style={styles.cardsContainer}>
					{pokemons.map((pokemon) => (
						<Card
							key={pokemon.id}
							evolutions={pokemon.evolutions}
							id={pokemon.id}
							name={pokemon.name}
							url={pokemon.image}
							hp={pokemon.hp}
							description={pokemon.description}
							type={pokemon.type}
						/>
					))}
				</div>
			</main>
		</div>
	);
};

const styles = {
	main: {
		padding: "20px",
		textAlign: "center" as const,
	},
	heading: {
		fontSize: "22px",
		color: "#333",
		margin: "20px 0",
	},
	cardsContainer: {
		display: "flex",
		justifyContent: "center",
		gap: "20px",
		flexWrap: "wrap" as const,
	},
};

export default MainPage;
