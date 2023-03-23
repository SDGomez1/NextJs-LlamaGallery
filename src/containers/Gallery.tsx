import { DLlamaInfo } from "@database/data";
import { LlamaCard } from "@components/LlamaCard";
import styles from "@styles/Gallery.module.css";
import Link from "next/link";

const Gallery = (props: { LlamaInfo: DLlamaInfo[] }): JSX.Element => {

    const generateCards: JSX.Element[] = props.LlamaInfo?.map((item) => {
        const url: string = `/Llama/${item.nombre.replace(" ", "")}`;

        return (
            <Link
                key={item.id}
                href={url}
            >
                <LlamaCard
                    title={item.nombre}
                    text={item.ubicacion}
                    Imagesrc={item.imagen}
                />
            </Link>
        );
    }
    )
    return (
        <section className={styles.Gallery}>
            <h1>Bienvenido a la galeria de fotos de llamas</h1>
            <h3>Llamas para toda la gente</h3>
            <div className={styles.GalleryGrid}>{generateCards}</div>
        </section>
    );
};

export { Gallery };
