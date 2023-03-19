import "../styles/global.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({
	subsets: ["latin"],
	weight: "400",
});

export default function MyApp({ Component, pageProps }) {
	return (
		<main className={raleway.className}>
			<Component {...pageProps} />
		</main>
	);
}
