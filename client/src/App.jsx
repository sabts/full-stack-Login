import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./lib/providers/auth.providers";
import Home from "./pages/home/Home";
import { GlobalStyles } from "./styles/GlobalStyles";
import Router from "./lib/routes/Routes";

const App = () => {
	return <>
	<BrowserRouter>
	<GlobalStyles/>
	<AuthProvider> 
		<Router/>
	</AuthProvider>
	</BrowserRouter>
	</>
};

export default App;
