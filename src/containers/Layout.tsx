import { Navbar } from "@components/Navbar";
import { Raleway } from "next/font/google";
import { Footer } from "@components/Footer";


const raleway = Raleway({
    subsets: ["latin"],
    weight: "400",
});
export default function Layout(props: { children: JSX.Element }): JSX.Element {
    return (
        <main className={raleway.className + ' Main'}>
            <Navbar />
            {props.children}
            <Footer />
        </main>
    );
}
