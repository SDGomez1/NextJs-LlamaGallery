import styles from "../styles/Gallery.module.css";
import { LlamaCard } from "../components/LlamaCard";
import Link from "next/link";

const Gallery = ({ LlamaInfo }) => {
	const generateCards = LlamaInfo.map((c) => {
		const url = `/Llama/${c.nombre.replace(" ", "")}`;

		return (
			<Link
				key={c.id}
				href={url}
			>
				<LlamaCard
					title={c.nombre}
					text={c.ubicacion}
					Imagesrc={c.imagen}
				/>
			</Link>
		);
	});
	return (
		<section className={styles.Gallery}>
			<h1>Bienvenido a la galeria de fotos de llamas</h1>
			<h3>Llamas para toda la gente</h3>
			<div className={styles.GalleryGrid}>{generateCards}</div>
		</section>
	);
};

export { Gallery };
