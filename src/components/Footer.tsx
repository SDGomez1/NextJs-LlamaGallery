import Link from "next/link";
import styles from '../styles/Footer.module.css'
const Footer = (): JSX.Element => {
    return (
        <footer className={styles.Footer}>
            <div>
                <p>Nosotros</p>
                <Link href=''>
                    Conoce Más
                </Link>
            </div>
            <div>
                <p>Servicios</p>
                <Link href='/'>
                    Todas las Fotos
                </Link>
            </div>
            <div >
                <p>Hecho Para</p>
                <span>Los amantes de las llamas y entusiastas de NextJs</span>
                <a href="https://github.com/SDGomez1/NextJs-productGallery" target="_blank">
                    GitHub
                </a>
            </div>
        </footer>
    );
};

export { Footer };
