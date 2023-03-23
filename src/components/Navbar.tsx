import Link from "next/link";
import { useSelector } from "react-redux";
import { selectCount } from "@features/favoriteCounterSlice";
import logo from "../assets/img/alpaca.png";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const Navbar = (): JSX.Element => {
    const counter = useSelector(selectCount);
    return (
        <nav className={styles.Navbar}>
            <div>
                <Link
                    href='/'
                    className={styles.LogoContainer}
                >
                    <Image
                        src={logo}
                        width={35}
                        height={35}
                        style={{ filter: 'invert(42%) sepia(76%) saturate(3609%) hue-rotate(70deg) brightness(89%) contrast(104%)' }}
                        alt=""
                    />
                    <h1> Llamma Gallery</h1>
                </Link>
            </div>
            <div>
                <Link href='/Favoritos'>
                    <p>Favoritos ({counter})</p>
                </Link>
            </div>
        </nav>
    );
};

export { Navbar };