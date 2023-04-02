//import ReactDOM from "react-dom/client";: Importe la bibliothèque ReactDOM qui permet de manipuler le DOM (Document Object Model) de la page web.
import ReactDOM from "react-dom/client";
//import { BrowserRouter } from "react-router-dom";: Importe le composant BrowserRouter de la bibliothèque react-router-dom qui permet la gestion de l'historique de navigation du navigateur.
import { BrowserRouter } from "react-router-dom";
//import App from "./App";: Importe le composant App qui est le composant principal de l'application.
import App from "./App";

import "./style/main.scss";
//Crée un point d'entrée pour l'application dans le DOM. La méthode createRoot() de ReactDOM crée un "root" qui peut être utilisé pour afficher des composants React.
const root = ReactDOM.createRoot(document.getElementById("root"));
// Affiche le composant App dans le root créé précédemment.
root.render(
	//Utilise le composant BrowserRouter comme parent de l'application. 
	//Ce composant doit être utilisé pour permettre la gestion de l'historique
	//de navigation.
	<BrowserRouter>
		<App />
	</BrowserRouter>
	//Affiche le composant App, qui est le composant principal de l'application.
);
