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

	useEffect(() => {
		console.log(pages.length ? 1 : 0)
	},[])

	return (
	<div className={styles.Container}>
		<h2> Lista de Favoritos</h2>
		{pages.length ? generateCard : <p className={styles.NoHay}><strong>Aun no tienes niguna imagen en favoritos </strong><br></br><br></br>  Añade una imagen en la galeria principal para verlas aca.</p>}

		</div>
	)
};

export default Favoritos;
