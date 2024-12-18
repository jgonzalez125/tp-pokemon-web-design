import React from "react";
import { Evolution, PokemonType } from "../../pokemons/types";
import Modal from "react-modal";
import "./styles.css";

interface PokemonCardProps {
	name: string;
	id: number;
	evolutions: Evolution[];
	url: string;
	hp: number;
	type: PokemonType;
	description: string;
}

const Card: React.FC<PokemonCardProps> = ({
	id,
	name,
	type,
	evolutions,
	hp,
	description,
	url,
}) => {
	const [isModalOpen, setIsModalOpen] = React.useState(false);
	const openModal = () => setIsModalOpen(true);
	const closeModal = (e: React.MouseEvent | React.KeyboardEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setIsModalOpen(false);
	};

	const renderEvolutions = () => {
		if (evolutions.length === 0) {
			return <p>Este Pokemon no tiene evoluciones</p>;
		}
		return evolutions.map((evolution) => (
			<div key={evolution.name} className="evolution">
				<img src={evolution.image} alt={evolution.name} />
				<span>{evolution.name}</span>
			</div>
		));
	};

	return (
		<div
			onClick={openModal}
			className="pokemon-card"
			style={getCardStyles().card}>
			<img
				src={url || "https://via.placeholder.com/150"}
				alt={name}
				style={getCardStyles().image}
			/>
			<div style={getCardStyles().text}>
				<p style={getCardStyles().id}>N.º {id.toString().padStart(4, "0")}</p>
				<h3 style={getCardStyles().name}>{name}</h3>
				<div style={getCardStyles(type).type}>{type}</div>
			</div>
			{isModalOpen && (
				<Modal
					isOpen={isModalOpen}
					onRequestClose={(e) => closeModal(e)}
					style={modalStyles}>
					<h1>{name}</h1>
					<img src={url} alt={name} />
					<p>
						<strong>ID:</strong> {id}
					</p>
					<p>
						<strong>HP:</strong> {hp}
					</p>
					<p>
						<strong>Tipo:</strong> {type}
					</p>
					<p>
						<strong>Descripción:</strong> {description}
					</p>
					<h1>Evoluciones</h1>
					<div className="evolutions">{renderEvolutions()}</div>
					<button onClick={closeModal}>Cerrar</button>
				</Modal>
			)}
		</div>
	);
};

const getTypeBackgroundColor = (type?: PokemonType) => {
	switch (type) {
		case "fire":
			return "#f08030";
		case "water":
			return "#6890f0";
		case "grass":
			return "#78c850";
		case "electric":
			return "#f8d030";
		case "normal":
			return "#a8a878";
		case "legendary":
			return "#a040a0";
		default:
			return "#a8a878";
	}
};

const getCardStyles = (type?: PokemonType) => {
	const styles = {
		card: {
			width: "200px",
			border: "1px solid #ddd",
			borderRadius: "8px",
			overflow: "hidden",
			boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
			fontFamily: "Arial, sans-serif",
			textAlign: "center" as const,
			backgroundColor: "#e4e4e4",
		},
		image: {
			width: "100%",
			height: "fit-content",
			objectFit: "cover" as const,
		},
		text: {
			padding: "10px",
		},
		id: {
			margin: "5px 0",
			fontSize: "14px",
			color: "#888",
		},
		name: {
			margin: "10px 0",
			fontSize: "18px",
			fontWeight: "bold" as const,
			color: "#333",
		},
		type: {
			marginTop: "10px",
			padding: "5px 10px",
			display: "inline-block",
			backgroundColor: getTypeBackgroundColor(type),
			color: "#fff",
			borderRadius: "5px",
			fontSize: "14px",
			fontWeight: "bold" as const,
		},
	};
	return styles;
};

const modalStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		borderRadius: "8px",
		padding: "20px",
		boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
		fontFamily: "Arial, sans-serif",
	},
};

export default Card;
