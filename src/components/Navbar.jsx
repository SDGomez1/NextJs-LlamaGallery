import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
	return (
		<nav className={styles.Navbar}>
			<div>
				<Link href='/'>
					<h1> Llamma Gallery</h1>
				</Link>
			</div>
			<div>
				<p>Favoritos(0)</p>
			</div>
		</nav>
	);
};

export { Navbar };
