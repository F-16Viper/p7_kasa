import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "../../components/Carrousel/Carrousel";
import Collapse from "../../components/Collapse/Collapse";
import Host from "../../components/Host/Host";
import Rate from "../../components/Rate/Rate";
import Tag from "../../components/Tag/Tag";

export default function FicheLogement() {
  //Les lignes 15 et 16 utilisent les hooks "useParams" et "useNavigate" fournis par le module "react-router-dom" pour récupérer les paramètres de l'URL et la fonction de navigation.
  const params = useParams();
  const navigate = useNavigate();

  const [pickedAppart, setPickedAppart] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("/logements.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const picked = data.find(({ id }) => id === params.id);
        setPickedAppart(picked);
        if (picked === undefined) {
          navigate("/404", { state: { message: "Can't get data" } });
        }
      } catch (error) {
        console.error("There was an error fetching the data:", error);
      }
    };
    getData();
  }, [params.id]); // array vide du useEffect pour ne lancer qu'une seule fois
  //définissent des constantes pour extraire des données de "pickedAppart" telles que les images, les tags et les équipements.
  const slidePics = pickedAppart && pickedAppart.pictures;
  const tags = pickedAppart && pickedAppart.tags;
  const equipments = pickedAppart && pickedAppart.equipments;
  const equip =
    pickedAppart &&
    equipments.map((item, index) => (
      <li key={index} className="equipList">
        {item}
      </li>
    ));
  //
  return (
    //L'expression pickedAppart && est utilisée ici comme un raccourci pour conditionner l'affichage du reste du code.
    //Elle vérifie que la variable pickedAppart existe et n'est pas nulle. Si c'est le cas, elle renvoie le reste du code.
    // Sinon, elle renvoie null, ce qui ne provoque pas l'affichage de contenu dans la page.
    pickedAppart && (
      //crée un conteneur principal pour l'affichage des informations de la fiche de logement. key est une propriété spéciale de React qui permet d'identifier de manière unique un élément dans une liste d'éléments.
      <div key={params.id} className="fiche-container">
        <Carrousel slides={slidePics} />
        {/*affiche le carrousel des images de la fiche de logement. slides est une propriété qui contient la liste des images à afficher.*/}
        <section className="hostInfo-container">
          <div className="title-tags-container">
            <div className="title-container redFont">
              <h1>{pickedAppart.title}</h1>
              <h3>{pickedAppart.location}</h3>
            </div>
            {/**affiche les étiquettes de la fiche de logement. La méthode map est utilisée pour
             * parcourir la liste des étiquettes, et la composante Tag est appelée pour chaque étiquette. */}
            <div className="tags-container">
              {tags.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
          </div>
          <div className="rate-host-container">
            <div className="host-container redFont">
              <Host
                hostName={pickedAppart.host.name}
                hostPic={pickedAppart.host.picture}
              />
            </div>
            <div className="rate-container">
              <Rate score={pickedAppart.rating} />
            </div>
          </div>
        </section>
        <div className="collapse-fiche-container">
          <Collapse
            aboutTitle="Description"
            aboutText={pickedAppart.description}
          />
          <Collapse aboutTitle="Équipements" aboutText={equip} />
        </div>
      </div>
    )
  );
}
