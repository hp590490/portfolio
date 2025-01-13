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
        "Concevoir des interfaces modernes et intuitives en suivant les bonnes pratiques UI/UX.",
        "Créer des designs responsives pour garantir une expérience utilisateur optimale sur tous les appareils",
        "Utiliser des outils comme Flexbox et Grid pour organiser et structurer les mises en page.",
        "Appliquer des animations et des effets interactifs avec CSS.",
        "Travailler avec des préprocesseurs comme SASS pour écrire du CSS plus propre et modulaire.",
        "Maîtriser l'intégration de composants réutilisables avec SASS pour une maintenance facilitée (mixin, fonts, colors...).",
      ],
    },
    {
      images: [
        "https://cdn3d.iconscout.com/3d/free/thumb/free-javascript-9294848-7577991.png?f=webp",
      ],
      title: "Développement web avec JavaScript",
      competences: [
        "Récupérer les données utilisateurs dans le JavaScript via des formulaires",
        "Manipuler les éléments du DOM avec JavaScript",
        "Gérer les événements utilisateurs avec JavaScript",
        "Optimiser les performances des scripts pour garantir une exécution fluide et rapide",
        "Utiliser des API REST pour récupérer et envoyer des données en JSON",
        "Implémenter des concepts avancés comme les promesses et les async/await",
        "Utiliser fetch pour effectuer des requêtes HTTP asynchrones et récupérer des données depuis des serveurs externes.",
      ],
    },
    {
      images: [
        "https://cdn3d.iconscout.com/3d/free/thumb/free-react-3d-icon-download-in-png-blend-fbx-gltf-file-formats--facebook-logo-native-javascript-library-user-interfaces-coding-lang-pack-logos-icons-7578010.png?f=webp",
        "https://sass-lang.com/assets/img/styleguide/seal-color.png",
      ],
      title: "Manipulation de React",
      competences: [
        "Configurer la navigation entre les pages de l'application avec React Router",
        "Initialiser une application avec Create React App",
        "Développer des éléments de l'interface d'un site web grâce à des composants React",
        "Effectuer des requêtes API avec Axios ou Fetch et gérer les cycles de vie avec useEffect",
        "Gérer l'état local des composants avec useState",
        "Utiliser les Props pour passer des données entre les composants",
        "Assurer la conformité SEO de l'application en utilisant Helmet et améliorer la qualité du code avec ESLint pour une meilleure lisibilité et maintenabilité.",
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
        "Rédiger les spécifications techniques d'un projet web à partir de besoins fonctionnels",
        "Découper une fonctionnalité en tâches pour préparer le développement",
        "Présenter la solution technique",
        "Mettre en place une méthode de veille technologique",
        "Versionner son projet avec Git et Github",
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
        "Surveiller et analyser les performances web avec des outils comme Lighthouse",
        "Débugger un site web grâce aux Chrome DevTools",
        "Rédiger un cahier de recette pour tester un site",
        "Bonne compréhension des principes de SEO on-page liés à la structure HTML.",
        "Respect des standards d'accessibilité web",
        "Utiliser des outils d'analyse d'accessibilité automatisée (comme WAVE)",
        "Optimiser les performances des pages web en minifiant fichiers CSS et en appliquant le lazy loading des ressources.",
      ],
    },
    {
      images: [
        "https://ugeek.github.io/blog/images-blog/node.png",
        "https://raw.githubusercontent.com/NX211/homer-icons/master/svg/mongodb.svg",
      ],
      title: "Développement back-end avec NodeJS",
      competences: [
        "Implémenter un modèle logique de données conformément à la réglementation",
        "Mettre en œuvre des opérations CRUD de manière sécurisée",
        "Mettre en place une architecture RESTful pour la création d'API robustes et évolutives avec Express.js.",
        "Stocker des données de manière sécurisée",
        "Intégrer MongoDB pour la gestion des bases de données NoSQL",
        "Utiliser bcrypt pour le hachage des mots de passe et la gestion sécurisée des authentifications",
        "Mettre en place un système de gestion des erreurs dans une application Node.js",
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
        "Utiliser Vercel pour déployer une application front-end",
        "Publier un site web en utilisant GitHub Pages, en configurant le dépôt et en déployant le projet pour le rendre accessible en ligne",
        "Déployer un site web sur Netlify en connectant un dépôt GitHub, et configurer des builds automatiques pour des mises à jour continues.",
        "Configurer un domaine personnalisé pour un site web déployé, afin de rendre l'adresse plus professionnelle et facile à retenir.",
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
