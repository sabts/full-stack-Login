import AuthProvider from "./lib/providers/auth.providers";
import Home from "./pages/home/Home";
import { GlobalStyles } from "./styles/GlobalStyles";

const App = () => {
	return <>
	<GlobalStyles/>
	<AuthProvider> 
	<Home/>
	</AuthProvider>
	</>
};

export default App;
