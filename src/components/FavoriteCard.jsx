import Image from "next/image";
import styles from "../styles/FavoriteCard.module.css";
import { useDispatch } from "react-redux";
import { decrement } from "../features/favoriteCounterSlice";
import { removePage } from "../features/favoritePageSlice";
const FavoriteCard = ({ title, imageSrc, location }) => {

	const dispatch = useDispatch();

	const removeFavorite = () => {
		const data = {
			nombre: title,
			src: imageSrc,
			pais: location,
		};
		dispatch(removePage(data));
		dispatch(decrement());
	};
	return (
		<div className={styles.Container}>
			<div className={styles.ImageContainer}>
				<Image
					src={imageSrc}
					alt=''
					fill
				/>
			</div>
			<div className={styles.TextContainer}>
				<h2>{title}</h2>
				<p>{location}</p>
				<button onClick={removeFavorite}> X </button>
			</div>
		</div>
	);
};

export { FavoriteCard };
