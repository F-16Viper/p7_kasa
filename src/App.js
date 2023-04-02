import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Header from "./components/Header/Header";
import FicheLogement from "./pages/FicheLogement/FicheLogement";
import Footer from "./components/Footer/Footer";
import Error from "./pages/Error/Error.jsx";

//Ce code React est une application React qui contient un composant 
//Header, un composant Footer et un composant principal. Le composant 
//principal contient des routes qui mènent à la page d'accueil,
// à la page À propos, à la page FicheLogement et à la page d'erreur. 
//La page d'accueil affiche un contenu, la page À propos affiche des 
//informations sur l'application, la page FicheLogement affiche des 
//informations sur un logement spécifique et la page d'erreur affiche 
//un message d'erreur en cas de problème.

function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/logement/:id" element={<FicheLogement />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
