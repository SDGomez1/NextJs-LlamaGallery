import { Navbar } from "../components/Navbar";
import { Gallery } from "../containers/Gallery";

export async function getStaticProps() {
	const response = await fetch("http://localhost:3000/api/llamas");
	const data = await response.json();
	return {
		props: { data }, // will be passed to the page component as props
	};
}

const homePage = ({data}) => {
	console.log(data)
	return (
		<>
			
			<Navbar />
			<Gallery LlamaInfo={data} />
		</>
	);
};

export default homePage;