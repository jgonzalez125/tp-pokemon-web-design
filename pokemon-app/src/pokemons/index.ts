import { Pokemon } from "./types";

export const pokemons: Pokemon[] = [
	{
		id: 1,
		name: "Bulbasaur",
		type: "grass",
		image: "https://www.serebii.net/pokemongo/pokemon/001.png",
		hp: 45,
		description:
			"Una extraña semilla fue plantada en su espalda al nacer. La planta brota y crece con este Pokémon.",
		evolutions: [
			{
				image: "https://www.serebii.net/pokemongo/pokemon/002.png",
				name: "Ivysaur",
			},
			{
				image: "https://www.serebii.net/pokemongo/pokemon/003.png",
				name: "Venusaur",
			},
		],
	},
	{
		id: 4,
		name: "Charmander",
		type: "fire",
		image: "https://www.serebii.net/pokemongo/pokemon/004.png",
		hp: 39,
		description:
			"Obviamente prefiere lugares calientes. Cuando llueve, se dice que el vapor brota de la punta de su cola.",
		evolutions: [
			{
				image: "https://www.serebii.net/pokemongo/pokemon/005.png",
				name: "Charmeleon",
			},
			{
				image: "https://www.serebii.net/pokemongo/pokemon/006.png",
				name: "Charizard",
			},
		],
	},
	{
		id: 7,
		name: "Squirtle",
		type: "water",
		image: "https://www.serebii.net/pokemongo/pokemon/007.png",
		hp: 44,
		description:
			"Después de nacer, su espalda se hincha y se endurece en una concha. Rocía espuma poderosamente desde su boca.",
		evolutions: [
			{
				image: "https://www.serebii.net/pokemongo/pokemon/008.png",
				name: "Wartortle",
			},
			{
				image: "https://www.serebii.net/pokemongo/pokemon/009.png",
				name: "Blastoise",
			},
		],
	},
	{
		id: 25,
		name: "Pikachu",
		hp: 35,
		type: "electric",
		image: "https://www.serebii.net/pokemongo/pokemon/025.png",
		description:
			"Cuando varios de estos Pokémon se reúnen, su electricidad podría acumularse y causar tormentas eléctricas.",
		evolutions: [
			{
				image: "https://www.serebii.net/pokemongo/pokemon/026.png",
				name: "Raichu",
			},
		],
	},
	{
		id: 52,
		name: "Meowth",
		type: "normal",
		image: "https://www.serebii.net/pokemongo/pokemon/052.png",
		hp: 40,
		description:
			"Adora los objetos redondos. Deambula por las calles todas las noches en busca de cambio suelto caído.",
		evolutions: [],
	},
	{
		id: 16,
		name: "Pidgey",
		type: "normal",
		image: "https://www.serebii.net/pokemongo/pokemon/016.png",
		hp: 40,
		description:
			"Una vista común en bosques y selvas. Agita sus alas a nivel del suelo para levantar arena cegadora.",
		evolutions: [
			{
				image: "https://www.serebii.net/pokemongo/pokemon/017.png",
				name: "Pidgeotto",
			},
			{
				image: "https://www.serebii.net/pokemongo/pokemon/018.png",
				name: "Pidgeot",
			},
		],
	},
	{
		id: 10,
		name: "Caterpie",
		type: "grass",
		image: "https://www.serebii.net/pokemongo/pokemon/010.png",
		hp: 45,
		description:
			"Para protegerse, libera un horrible hedor de las antenas en su cabeza para ahuyentar a los enemigos.",
		evolutions: [
			{
				image: "https://www.serebii.net/pokemongo/pokemon/011.png",
				name: "Metapod",
			},
			{
				image: "https://www.serebii.net/pokemongo/pokemon/012.png",
				name: "Butterfree",
			},
		],
	},
	{
		id: 58,
		name: "Growlithe",
		type: "fire",
		image: "https://www.serebii.net/pokemongo/pokemon/058.png",
		hp: 55,
		description:
			"Muy protector de su territorio. Ladrará y morderá para repeler a los intrusos de su espacio.",
		evolutions: [
			{
				image: "https://www.serebii.net/pokemongo/pokemon/059.png",
				name: "Arcanine",
			},
		],
	},
	{
		id: 98,
		name: "Krabby",
		type: "water",
		image: "https://www.serebii.net/pokemongo/pokemon/098.png",
		hp: 30,
		description:
			"Sus pinzas no solo son armas poderosas, sino que también se usan para equilibrarse al caminar de lado.",
		evolutions: [
			{
				image: "https://www.serebii.net/pokemongo/pokemon/099.png",
				name: "Kingler",
			},
		],
	},
	{
		id: 100,
		name: "Voltorb",
		type: "electric",
		image: "https://www.serebii.net/pokemongo/pokemon/100.png",
		hp: 40,
		description:
			"Generalmente se encuentra en plantas de energía. Fácilmente confundido con una Poké Ball, ha electrocutado a muchas personas.",
		evolutions: [
			{
				image: "https://www.serebii.net/pokemongo/pokemon/101.png",
				name: "Electrode",
			},
		],
	},
	{
		id: 37,
		name: "Vulpix",
		type: "fire",
		image: "https://www.serebii.net/pokemongo/pokemon/037.png",
		hp: 38,
		description:
			"Al nacer, tiene solo una cola. La cola se divide desde su punta a medida que crece.",
		evolutions: [
			{
				image: "https://www.serebii.net/pokemongo/pokemon/038.png",
				name: "Ninetales",
			},
		],
	},
	{
		id: 54,
		name: "Psyduck",
		type: "water",
		image: "https://www.serebii.net/pokemongo/pokemon/054.png",
		hp: 50,
		description:
			"Al adormecer a sus enemigos con su mirada vacía, este astuto Pokémon usará poderes psicoquinéticos.",
		evolutions: [
			{
				image: "https://www.serebii.net/pokemongo/pokemon/055.png",
				name: "Golduck",
			},
		],
	},
	{
		id: 35,
		name: "Clefairy",
		type: "normal",
		image: "https://www.serebii.net/pokemongo/pokemon/035.png",
		hp: 70,
		description:
			"Su atractivo mágico y lindo tiene muchos admiradores. Es raro y se encuentra solo en ciertas áreas.",
		evolutions: [
			{
				image: "https://www.serebii.net/pokemongo/pokemon/036.png",
				name: "Clefable",
			},
		],
	},
	{
		id: 63,
		name: "Abra",
		type: "normal",
		image: "https://www.serebii.net/pokemongo/pokemon/063.png",
		hp: 25,
		description:
			"Usando su habilidad para leer mentes, percibirá el peligro inminente y se teletransportará a un lugar seguro.",
		evolutions: [
			{
				image: "https://www.serebii.net/pokemongo/pokemon/064.png",
				name: "Kadabra",
			},
			{
				image: "https://www.serebii.net/pokemongo/pokemon/065.png",
				name: "Alakazam",
			},
		],
	},
	{
		id: 88,
		name: "Grimer",
		type: "normal",
		image: "https://www.serebii.net/pokemongo/pokemon/088.png",
		hp: 80,
		description:
			"Hecho de lodo, se ve en pilas de basura. Evoluciona alimentándose de aguas residuales.",
		evolutions: [
			{
				image: "https://www.serebii.net/pokemongo/pokemon/089.png",
				name: "Muk",
			},
		],
	},
	{
		id: 132,
		name: "Ditto",
		type: "normal",
		image: "https://www.serebii.net/pokemongo/pokemon/132.png",
		hp: 48,
		description:
			"Puede reconstituir toda su estructura celular para transformarse en lo que ve.",
		evolutions: [],
	},
	{
		id: 144,
		name: "Articuno",
		type: "legendary",
		image: "https://www.serebii.net/pokemongo/pokemon/144.png",
		hp: 90,
		description:
			"Un Pokémon pájaro legendario. Se dice que aparece a las personas condenadas que están perdidas en montañas heladas.",
		evolutions: [],
	},
	{
		id: 145,
		name: "Zapdos",
		type: "legendary",
		image: "https://www.serebii.net/pokemongo/pokemon/145.png",
		hp: 90,
		description:
			"Un Pokémon pájaro legendario que se dice que aparece de las nubes mientras lanza enormes rayos.",
		evolutions: [],
	},
	{
		id: 146,
		name: "Moltres",
		type: "legendary",
		image: "https://www.serebii.net/pokemongo/pokemon/146.png",
		hp: 90,
		description:
			"Un Pokémon pájaro legendario. Se dice que migra desde el sur junto con la primavera.",
		evolutions: [],
	},
	{
		id: 150,
		name: "Mewtwo",
		type: "legendary",
		image: "https://www.serebii.net/pokemongo/pokemon/150.png",
		hp: 106,
		description:
			"Un Pokémon creado recombinando los genes de Mew. Se dice que es el Pokémon más salvaje.",
		evolutions: [],
	},
	{
		id: 151,
		name: "Mew",
		type: "legendary",
		image: "https://www.serebii.net/pokemongo/pokemon/151.png",
		hp: 100,
		description:
			"Tan raro que todavía se dice que es un espejismo por muchos expertos. Solo unas pocas personas lo han visto en todo el mundo.",
		evolutions: [],
	},
];
