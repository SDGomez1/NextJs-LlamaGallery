import { Navbar } from "../components/Navbar";
import { Raleway } from "next/font/google";
import { Footer } from "../components/Footer";


const raleway = Raleway({
	subsets: ["latin"],
	weight: "400",
});
export default function Layout({ children }) {
	return (
		<main className={raleway.className + ' Main'}>
			<Navbar />
			{children}
			<Footer />
		</main>
	);
}
