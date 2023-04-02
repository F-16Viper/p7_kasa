import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Cards/Card";
import { Link } from "react-router-dom";

export default function Home() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('/logements.json')
  .then(response => response.json())
  .then(data => setData(data))
  .catch(error => console.error(error)); 
	}, []);

	return (
		<>
			<Banner />
			<div className="cards-container">
				{data.map((appart, id) => (
					<div className="card_logement" key={id}>
						<Link className="link_card_logement" to={`/logement/${appart.id}`}>{/**La page de détail est accessible à partir de l'URL "/logement/:id"
						 * , où ":id" est l'identifiant unique pour chaque logement. Le lien qui enveloppe chaque carte utilise cette URL pour diriger l'utilisateur 
						 * vers la page de détail correspondante. */}
							<Card cover={appart.cover} title={appart.title} />
						</Link>
					</div>
				))}
			</div>
		</>
	);
}
