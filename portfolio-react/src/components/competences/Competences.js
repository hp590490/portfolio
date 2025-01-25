import React from "react";
import Bloc from "../commons/Bloc";
import Ccard from "./C-card";

const Compétences = () => {
  const cardsData = [
    {
      images: [
        "https://static.vecteezy.com/system/resources/previews/012/697/299/non_2x/stylized-3d-html-logo-design-free-png.png",
        "https://cdn3d.iconscout.com/3d/free/thumb/free-logo-css-6563485-5453030.png?f=webp",
      ],
      title: "Intégration web avec HTML - CSS",
      competences: [
        "Concevoir des interfaces modernes et intuitives en suivant les <span class='green'>bonnes pratiques UI/UX</span>.",
        "Créer des <span class='blue'>designs responsives</span> pour garantir une expérience utilisateur optimale sur tous les appareils",
        "Utiliser des outils comme <span class='green'>Flexbox et Grid</span> pour organiser et structurer les mises en page.",
        "Appliquer des <span class='yellow'>animations et des effets interactifs</span> avec CSS.",
        "Travailler avec des <span class='purple'>préprocesseurs comme SASS</span> pour écrire du CSS plus propre et modulaire.",
        "Maîtriser l'intégration de composants réutilisables avec SASS pour une maintenance facilitée <span class='blue'>(mixin, fonts, colors...)</span>.",
      ],
    },
    {
      images: [
        "https://cdn3d.iconscout.com/3d/free/thumb/free-javascript-9294848-7577991.png?f=webp",
      ],
      title: "Développement web avec JavaScript",
      competences: [
        "Récupérer les données utilisateurs dans le JavaScript via des <span class='blue'>formulaires</span>",
        "Manipuler les éléments du <span class='green'>DOM</span> avec JavaScript",
        "Gérer les <span class='purple'>événements utilisateurs</span> avec JavaScript",
        "Optimiser les performances des scripts pour garantir une exécution fluide et rapide",
        "Utiliser des API REST pour récupérer et envoyer des données en <span class='yellow'>JSON</span>",
        "Implémenter des concepts avancés comme les <span class='green'>promesses et les async/await</span>",
        "Utiliser <span class='blue'>fetch</span> pour effectuer des <span class='blue'>requêtes HTTP asynchrones</span> et récupérer des données depuis des serveurs externes.",
      ],
    },
    {
      images: [
        "https://cdn3d.iconscout.com/3d/free/thumb/free-react-3d-icon-download-in-png-blend-fbx-gltf-file-formats--facebook-logo-native-javascript-library-user-interfaces-coding-lang-pack-logos-icons-7578010.png?f=webp",
        "https://sass-lang.com/assets/img/styleguide/seal-color.png",
      ],
      title: "Manipulation de React",
      competences: [
        "Configurer la navigation entre les pages de l'application avec <span class='purple'>React Router</span>",
        "Initialiser une application avec <span class='blue'>Create React App</span>",
        "Développer des éléments de l'interface d'un site web grâce à des <span class='yellow'>composants React</span>",
        "Effectuer des <span class='green'>requêtes API avec Axios ou Fetch</span> et gérer les cycles de vie avec <span class='green'>useEffect</span>",
        "Gérer l'état local des composants avec <span class='yellow'>useState</span>",
        "Utiliser les <span class='purple'>Props</span> pour passer des données entre les composants",
        "Assurer la <span class='blue'>conformité SEO</span> de l'application en utilisant <span class='blue'>Helmet</span> et améliorer la qualité du code avec <span class='blue'>ESLint</span> pour une meilleure lisibilité et maintenabilité.",
      ],
    },
    {
      images: [
        "https://static.vecteezy.com/system/resources/previews/020/717/022/non_2x/3d-cartoon-brain-development-concept-cartoon-brain-anatomy-learning-to-get-a-new-idea-brain-inside-a-bubble-floating-on-top-of-a-hand-3d-rendering-illustration-png.png",
        "https://cdn3d.iconscout.com/3d/free/thumb/free-github-3d-icon-download-in-png-blend-fbx-gltf-file-formats--logo-social-media-pack-logos-icons-6491025.png?f=webp",
      ],
      title: "Gestion de projet et outils de développeurs",
      competences: [
        "Suivre le déroulement du projet grâce à un outil de gestion de projet",
        "Rédiger les <span class='blue'>spécifications techniques</span> d'un projet web à partir de <span class='blue'>besoins fonctionnels</span>",
        "Découper une fonctionnalité en <span class='yellow'>tâches</span> pour préparer le développement",
        "Présenter la <span class='green'>solution technique</span>",
        "Mettre en place une méthode de <span class='blue'>veille technologique</span>",
        "<span class='purple'>Versionner</span> son projet avec Git et Github",
        "Installer un environnement de développement front-end",
      ],
    },
    {
      images: [
        "https://cdn.worldvectorlogo.com/logos/google-lighthouse.svg",
        "https://static-00.iconduck.com/assets.00/chrome-devtools-icon-1024x1024-bgoqb03p.png",
      ],
      title: "Optimisation et debug",
      competences: [
        "Optimiser les performances d’un site web",
        "Surveiller et analyser les <span class='purple'>performances web</span> avec des outils comme <span class='purple'>Lighthouse</span>",
        "Débugger un site web grâce aux <span class='green'>Chrome DevTools</span>",
        "Rédiger un <span class='blue'>cahier de recette</span> pour tester un site",
        "Bonne compréhension des principes de <span class='yellow'>SEO on-page</span> liés à la structure HTML.",
        "Respect des standards d'accessibilité web",
        "Utiliser des outils d'analyse d'<span class='blue'>accessibilité automatisée</span> (comme WAVE)",
        "Optimiser les performances des pages web en <span class='green'>minifiant fichiers CSS</span> et en appliquant le <span class='green'>lazy loading</span> des ressources.",
      ],
    },
    {
      images: [
        "https://img.icons8.com/fluent/512/node-js.png",
        "https://raw.githubusercontent.com/NX211/homer-icons/master/svg/mongodb.svg",
      ],
      title: "Développement back-end avec NodeJS",
      competences: [
        "Implémenter un modèle logique de données conformément à la réglementation",
        "Mettre en œuvre des <span class='green'>opérations CRUD</span> de manière sécurisée",
        "Mettre en place une <span class='purple'>architecture RESTful</span> pour la création d'API robustes et évolutives avec <span class='yellow'>Express.js.</span>",
        "Stocker des données de manière sécurisée",
        "Intégrer <span class='green'>MongoDB</span> pour la gestion des bases de données NoSQL",
        "Utiliser <span class='purple'>bcrypt</span> pour le hachage des mots de passe et la gestion sécurisée des authentifications",
        "Mettre en place un système de <span class='blue'>gestion des erreurs</span> dans une application Node.js",
      ],
    },
    {
      images: [
        "https://www.svgrepo.com/show/327408/logo-vercel.svg",
        "https://cdn.iconscout.com/icon/free/png-256/free-netlify-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-3030170.png?f=webp",
      ],
      title: "Publication d'un site web",
      competences: [
        "Déployer un site statique en ligne",
        "Utiliser <span class='yellow'>Vercel</span> pour déployer une application front-end",
        "Publier un site web en utilisant <span class='purple'>GitHub Pages</span>, en configurant le dépôt et en déployant le projet pour le rendre accessible en ligne",
        "Déployer un site web sur <span class='blue'>Netlify</span> en connectant un dépôt GitHub, et configurer des builds automatiques pour des mises à jour continues.",
        "<span class='green'>Configurer un domaine personnalisé</span> pour un site web déployé, afin de rendre l'adresse plus professionnelle et facile à retenir.",
      ],
    },
  ];
  return (
    <div id="competences-content">
      <h2>Mes compétences</h2>
      <Bloc title="compétences.jsx" className="competences-txt">
        <div>
          <div className="competencescards">
            {cardsData.map((card, index) => (
              <Ccard
                key={index}
                images={card.images}
                title={card.title}
                competences={card.competences}
              />
            ))}
          </div>
        </div>
      </Bloc>
    </div>
  );
};

export default Compétences;
