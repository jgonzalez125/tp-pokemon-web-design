import React from "react";
import { PokemonType } from "../pokemons/types";

interface NavbarProps {
	onTypeSelect: (type: PokemonType | null) => void;
	selectedType: PokemonType | null;
}

const Navbar: React.FC<NavbarProps> = ({ onTypeSelect, selectedType }) => {
	const types = [
		"fire",
		"water",
		"grass",
		"electric",
		"legendary",
		"normal",
	] as PokemonType[];

	return (
		<nav style={styles.nav}>
			{types.map((type) => (
				<button
					key={type}
					style={getButtonStyles(selectedType === type)}
					onClick={() => onTypeSelect(type)}>
					{type}
				</button>
			))}
			<button
				style={getButtonStyles(selectedType === null)}
				onClick={() => onTypeSelect(null)}>
				All
			</button>
		</nav>
	);
};

const getButtonStyles = (isSelected: boolean | null) => {
	return {
		margin: "0 10px",
		padding: "10px 15px",
		border: "none",
		borderRadius: "5px",
		backgroundColor: isSelected ? "#000000" : "#e0e0e0",
		color: isSelected ? "#ffffff" : "#000000",
		fontSize: "14px",
		fontWeight: "bold" as const,
		cursor: "pointer",
		textTransform: "capitalize" as const,
		transition: "background-color 0.3s",
	};
};

const styles = {
	nav: {
		display: "flex",
		justifyContent: "center",
		backgroundColor: "#f4f4f4",
		padding: "10px",
		gap: "10px",
		borderBottom: "1px solid #ddd",
		flexWrap: "wrap" as const,
	},
	button: {
		margin: "0 10px",
		padding: "10px 15px",
		border: "none",
		borderRadius: "5px",
		backgroundColor: "#e0e0e0",
		fontSize: "14px",
		fontWeight: "bold" as const,
		cursor: "pointer",
		textTransform: "capitalize" as const,
		transition: "background-color 0.3s",
	},
	buttonHover: {
		backgroundColor: "#d0d0d0",
	},
};

export default Navbar;
