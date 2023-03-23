import Image from "next/image";
import styles from "../styles/FavoriteCard.module.css";
import { useDispatch } from "react-redux";
import { decrement } from "../features/favoriteCounterSlice";
import { removePage } from "../features/favoritePageSlice";
import { motion } from "framer-motion";
import Link from "next/link";
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

	const url = `/Llama/${title.replace(" ", "")}`;
	return (
		
		<div className={styles.Container}>
			<Link href={url}>
			<div className={styles.ImageContainer}>
				<Image
					src={imageSrc}
					alt=''
					fill
				/>
			</div>
			</Link>
			<div className={styles.TextContainer}>
				<h2>{title}</h2>
				<p>{location}</p>
				<motion.button onClick={removeFavorite} whileHover = {{ borderRadius: '60px'}}> X </motion.button>
			</div>
		</div>
		
	);
};

export { FavoriteCard };
