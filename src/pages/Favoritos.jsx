import { useDispatch } from "react-redux";
import {removePage} from "../features/favoritePageSlice"
import {decrement} from"../features/favoriteCounterSlice"



const Favoritos = () => {
    const dispatch = useDispatch()
    const removeFavorite = ()=> {
        dispatch(removePage("Llama glama"))
                dispatch(decrement());
    }
	return (
		<>
			<h1>Pagina de favoritos</h1>
			<button onClick={removeFavorite}>Eliminar de favoritos</button>
		</>
	);
};

export default Favoritos;
