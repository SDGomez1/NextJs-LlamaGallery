import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/favoriteCounterSlice";
import { addPage, removePage, selectPage } from "../features/favoritePageSlice";
import { motion } from "framer-motion";
import styles from "@styles/LlamaPage.module.css";


export type stateData = {
	nombre: string,
	src: string,
	pais: string,
}

const LlamaPage = (props: { imageSrc: string, title: string, location: string, country: string, description: string }): JSX.Element => {

	const pages = useSelector(selectPage);


	const [favorite, setFavorite] = useState("Añadir a Favoritos");


	const dispatch = useDispatch();

	const addFavorite = () => {
		const id = pages.map((c) => {
			if (c != undefined) {
				if (c.nombre == props.title) {
					return 1;
				} else {
					return 0;
				}
			}
			return c
		});
		const data: stateData = {
			nombre: props.title,
			src: props.imageSrc,
			pais: props.country,
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
						src={props.imageSrc}
						fill
						alt=''
					/>
				</div>
				<div className={styles.TextContainer}>
					<h2>{props.title}</h2>
					<p>{props.location}</p>
					<p className={styles.Country}>{props.country}</p>
					<motion.button onClick={addFavorite} whileTap={{ scale: [1.0, 1.1] }}>  {favorite}</motion.button>
				</div>
			</div>
			<div className={styles.DescriptionContainer}>
				<h2>Descripción</h2>
				<p>{props.description}</p>
			</div>
		</>
	);
};

export { LlamaPage };
