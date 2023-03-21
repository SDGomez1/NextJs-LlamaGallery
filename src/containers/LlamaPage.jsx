import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/favoriteCounterSlice";
import { addPage, removePage, selectPage } from "../features/favoritePageSlice";
import styles from "../styles/LlamaPage.module.css";

const LlamaPage = ({ imageSrc, title, location, country, description }) => {
	const [favorite, setFavorite] = useState("Añadir a Favoritos");
	const pages = useSelector(selectPage);

	const dispatch = useDispatch();

	const addFavorite = () => {
		const id = pages.map((c) => {
			if (c != undefined) {
				if (c.nombre == title) {
					return 1;
				} else {
					return 0;
				}
			}
		});
		const data = {
			nombre: title,
			src: imageSrc,
			pais: country,
		};

		if (id.lastIndexOf(1) != -1) {
			dispatch(removePage(data));
			dispatch(decrement());
			setFavorite("Añadir a Favoritos");
		} else {
			dispatch(addPage(data));
			dispatch(increment());

			setFavorite("Eliminar de favoritos");
		}
	};

	return (
		<>
			<div className={styles.Container}>
				<div className={styles.ImageContainer}>
					<Image
						src={imageSrc}
						fill
						alt=''
					/>
				</div>
				<div className={styles.TextContainer}>
					<h2>{title}</h2>
					<p>{location}</p>
					<p className={styles.Country}>{country}</p>
					<button onClick={addFavorite}> {favorite}</button>
				</div>
			</div>
			<div className={styles.DescriptionContainer}>
				<h2>Descripción</h2>
				<p>{description}</p>
			</div>
		</>
	);
};

export { LlamaPage };
