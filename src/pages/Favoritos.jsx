import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectPage } from "../features/favoritePageSlice";
import { FavoriteCard } from "../components/FavoriteCard";
import styles from "../styles/Favoritos.module.css";

const Favoritos = () => {
	const pages = useSelector(selectPage);

	const generateCard = pages.map((c, index) => {
		return (
			<FavoriteCard
				key={index}
				title={c.nombre}
				imageSrc={c.src}
				location={c.pais}
			/>
		);
	});

	return <div className={styles.Container}>{generateCard}</div>;
};

export default Favoritos;
