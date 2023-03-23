export type DLlamaInfo = {
    id: number,
    nombre: string,
    ubicacion: string,
    pais: string,
    descripcion: string,
    imagen: string
}


const data: DLlamaInfo[] = [
    {
        id: 1,
        nombre: "Llama Peruana",
        ubicacion: "Machu Pichu",
        pais: "Peru",
        descripcion:
            "La llama peruana es un animal originario de los Andes peruanos, conocido por su pelaje suave y esponjoso, que puede variar en tonos de marrón, beige y blanco. Esta especie de camélido es alto y delgado, con patas largas y delgadas que le permiten moverse con facilidad por las montañas rocosas y empinadas. La cabeza de la llama peruana es pequeña y triangular, con grandes ojos marrones y orejas largas y puntiagudas. A menudo se le describe como un animal elegante y majestuoso, capaz de soportar las condiciones climáticas adversas de las alturas andinas y de caminar durante largas horas sin cansarse. La llama peruana es un animal valioso para los habitantes de los Andes, ya que se utiliza para transportar cargas, producir lana y carne, y como animal de compañía. Además, es un símbolo de la cultura andina y una atracción turística popular en Perú y otros países de América del Sur.",
        imagen: "/img/llamaMachuPichu.jpg",
    },
    {
        id: 2,
        nombre: "Llama glama",
        ubicacion: "Zoologico de Chile",
        pais: "Chile",
        descripcion: "La llama glama es una subespecie de llama, originaria de Sudamérica y ampliamente distribuida en países como Perú, Bolivia, Chile y Argentina. Es similar en apariencia a la llama peruana, con un pelaje suave y esponjoso que puede variar en tonos de marrón, beige y blanco. Sin embargo, la llama glama tiende a ser un poco más grande que la llama peruana y puede tener patas más cortas y gruesas. La cabeza de la llama glama es proporcionalmente más grande que la de la llama peruana, con orejas más largas y cuello más corto y grueso. Los ojos grandes y expresivos son marrones oscuros y tienen pestañas largas y rizadas que ayudan a protegerlos del sol y el viento. A diferencia de la llama peruana, que se utiliza principalmente para la producción de lana y carne, la llama glama también se ha utilizado históricamente como animal de carga y como medio de transporte en zonas rurales de Sudamérica.  ",
        imagen: "/img/llamaGlama.jpg",
    },
    {
        id: 3,
        nombre: "Llama Argentina",
        ubicacion: "El pasto",
        pais: "Argentina",
        descripcion: "La llama argentina es una subespecie de llama que habita en las regiones montañosas y altiplánicas de Argentina, principalmente en la región de los Andes. Es un animal alto y esbelto, con un pelaje suave y esponjoso que varía en tonos de marrón, beige y blanco. La cabeza de la llama argentina es pequeña y triangular, con orejas largas y puntiagudas y ojos grandes y expresivos. Tiene un cuello largo y delgado, patas largas y delgadas que le permiten caminar sobre terrenos rocosos y empinados, y una cola corta y esponjosa. A menudo se le describe como un animal elegante y majestuoso, capaz de soportar las duras condiciones climáticas de las alturas andinas La llama argentina es un animal muy valorado por los habitantes de la región andina, ya que se utiliza para la producción de lana y carne, así como para el transporte de carga en zonas rurales. Además, la llama argentina es un símbolo de la cultura andina y es un atractivo turístico popular en Argentina y otros países de Sudamérica. En general, la llama argentina es un animal resistente y adaptable que ha evolucionado para sobrevivir en las condiciones difíciles de los Andes. Es una parte importante de la rica herencia cultural y natural de Argentina y es apreciada tanto por su utilidad como por su belleza.",
        imagen: "/img/llamaColombia.jpeg",
    },
];
export default data;
