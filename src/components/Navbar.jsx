import Link from "next/link";
import { useSelector } from "react-redux";
import { selectCount } from "../features/favoriteCounterSlice";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
	const counter = useSelector(selectCount);
	return (
		<nav className={styles.Navbar}>
			<div>
				<Link href='/'>
					<h1> Llamma Gallery</h1>
				</Link>
			</div>
			<div>
				<p>Favoritos {counter}</p>
			</div>
		</nav>
	);
};

export { Navbar };
