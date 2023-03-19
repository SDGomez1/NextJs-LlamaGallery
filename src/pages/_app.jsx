import { Provider } from "react-redux";
import store from "../app/store";
import Layout from "../containers/Layout";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}
