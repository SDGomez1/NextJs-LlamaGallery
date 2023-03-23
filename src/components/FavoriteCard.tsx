import Image from "next/image";
import styles from "@styles/FavoriteCard.module.css";
import { useDispatch } from "react-redux";
import { decrement } from "@features/favoriteCounterSlice";
import { removePage } from "@features/favoritePageSlice";
import { motion } from "framer-motion";
import Link from "next/link";
import { stateData } from "@containers/LlamaPage";
const FavoriteCard = (props: { title: string, imageSrc: string, location: string }): JSX.Element => {

    const dispatch = useDispatch();

    const removeFavorite = () => {
        const data: stateData = {
            nombre: props.title,
            src: props.imageSrc,
            pais: props.location,
        };
        dispatch(removePage(data));
        dispatch(decrement());
    };

    const url: string = `/Llama/${props.title.replace(" ", "")}`;
    return (

        <div className={styles.Container}>
            <Link href={url}>
                <div className={styles.ImageContainer}>
                    <Image
                        src={props.imageSrc}
                        alt=''
                        fill
                    />
                </div>
            </Link>
            <div className={styles.TextContainer}>
                <h2>{props.title}</h2>
                <p>{props.location}</p>
                <motion.button onClick={removeFavorite} whileHover={{ borderRadius: '60px' }}> X </motion.button>
            </div>
        </div>

    );
};

export { FavoriteCard };
