import { LlamaPage } from "../../containers/LlamaPage";

export const getStaticPaths = async () => {
	const response = await fetch(
		"https://next-js-product-gallery.vercel.app/api/llamas"
	);
	const data = await response.json();

	const paths = data.map((c) => {
		return { params: { llama: c.nombre.replace(" ", "") } };
	});

	return {
		// Statically generate all paths
		paths,
		// Display 404 for everything else
		fallback: false,
	};
};

export async function getStaticProps({ params }) {
	const url = `http://localhost:3000/api/${params.llama}`;
	const response = await fetch(url);
	const data = await response.json();

	return {
		// Passed to the page component as props
		props: {
			data,
		},
	};
}

const LlamaPageGen = ({ data }) => {
	return (
		<>
			<LlamaPage
				imageSrc={data.imagen}
				title={data.nombre}
				location={data.ubicacion}
				country={data.pais}
				description={data.descripcion}
			/>
		</>
	);
};

export default LlamaPageGen;
