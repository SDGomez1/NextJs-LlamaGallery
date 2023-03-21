import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/favoriteCounterSlice";
import { addPage, removePage, selectPage } from "../features/favoritePageSlice";
import styles from "../styles/LlamaPage.module.css";

const LlamaPage = ({ imageSrc, title, location, country }) => {
	const pages = useSelector(selectPage);

	const dispatch = useDispatch();

	const addFavorite = () => {
		const id = pages.map((c)=>{
			if (c != undefined)
			{
				if (c.nombre == title){
					return 1
				} else{
					return 0
				}
			}
		})
		const data = {
			nombre: title,
			src: imageSrc,
			pais: country
		}

		if (id.lastIndexOf(1) != -1) {
			dispatch(removePage(data));
			dispatch(decrement());
		} else {
			dispatch(addPage(data));
			dispatch(increment());
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
					<p>{country}</p>
					<button onClick={addFavorite}> Añadir a Favoritos</button>
				</div>
			</div>
		</>
	);
};

export { LlamaPage };
