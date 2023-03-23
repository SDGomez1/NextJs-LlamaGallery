import { DLlamaInfo } from "@/database/data";
import { LlamaPage } from "@containers/LlamaPage";
import { GetStaticPaths } from "next";


export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch("http://localhost:3000/api/llamas");
    const data: DLlamaInfo[] = await response.json();

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

const LlamaPageGen = ({ data }): JSX.Element => {
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
