import { Gallery } from "@containers/Gallery"
import { DLlamaInfo } from "@/database/data";

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/llamas");
  const data: DLlamaInfo[] = await response.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}

const Home = (props: { data: DLlamaInfo[] }): JSX.Element => {
  return (
    <>
      <Gallery LlamaInfo={props.data} />
    </>
  )
}

export default Home