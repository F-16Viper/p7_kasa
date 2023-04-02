import AboutBanner from "../../components/AboutBanner/AboutBanner";
import Collapse from "../../components/Collapse/Collapse";
import aboutArray from "../../datas/aboutArray.json"; // Importe les données à partir d'un fichier JSON, qui sont utilisées pour générer les collapses.

export default function About() {
	return (
		<>
			<AboutBanner />
			{aboutArray.map((rule, id) => ( // la méthode "map" pour boucler sur chaque élément du tableau de données et créer un Collapse pour chaque élément.
				<Collapse
					key={id} //Ajoute un identifiant unique à chaque Collapse pour aider React à gérer efficacement les mises à jour.
					aboutTitle={rule.aboutTitle}
					aboutText={rule.aboutText}
					aboutStyle="about-style"
				/>
			))}
		</>
	);
}
