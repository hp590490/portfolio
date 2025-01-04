import React from "react";
import Bloc from "./Bloc";
import Ccard from "./C-card";

const Compétences = () => {
  const cardsData = [
    {
      images: [
        "https://static.vecteezy.com/system/resources/previews/012/697/299/non_2x/stylized-3d-html-logo-design-free-png.png",
        "https://cdn3d.iconscout.com/3d/free/thumb/free-logo-css-6563485-5453030.png?f=webp",
      ],
      title: "Intégration web avec HTML - CSS",
    },
    {
      images: [
        "https://cdn3d.iconscout.com/3d/free/thumb/free-javascript-9294848-7577991.png?f=webp",
      ],
      title: "Développement web avec JavaScript",
    },
    {
      images: [
        "https://cdn3d.iconscout.com/3d/free/thumb/free-react-3d-icon-download-in-png-blend-fbx-gltf-file-formats--facebook-logo-native-javascript-library-user-interfaces-coding-lang-pack-logos-icons-7578010.png?f=webp",
        "https://sass-lang.com/assets/img/styleguide/seal-color.png",
      ],
      title: "Manipulation de React",
    },
    {
      images: [
        "https://static.vecteezy.com/system/resources/previews/020/717/022/non_2x/3d-cartoon-brain-development-concept-cartoon-brain-anatomy-learning-to-get-a-new-idea-brain-inside-a-bubble-floating-on-top-of-a-hand-3d-rendering-illustration-png.png",
        "https://cdn3d.iconscout.com/3d/free/thumb/free-github-3d-icon-download-in-png-blend-fbx-gltf-file-formats--logo-social-media-pack-logos-icons-6491025.png?f=webp",
      ],
      title: "Gestion de projet et outils de développeurs",
    },
    {
      images: [
        "https://cdn.worldvectorlogo.com/logos/google-lighthouse.svg",
        "https://static-00.iconduck.com/assets.00/chrome-devtools-icon-1024x1024-bgoqb03p.png",
      ],
      title: "Optimisation et debug",
    },
    {
      images: [
        "https://ugeek.github.io/blog/images-blog/node.png",
        "https://raw.githubusercontent.com/NX211/homer-icons/master/svg/mongodb.svg",
      ],
      title: "Développement back-end avec NodeJS",
    },
    {
      images: [
        "https://www.svgrepo.com/show/327408/logo-vercel.svg",
        "https://cdn.iconscout.com/icon/free/png-256/free-netlify-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-3030170.png?f=webp",
      ],
      title: "Publication d'un site web",
    },
  ];
  return (
    <div id="competences-content">
      <h2>Mes compétences</h2>
      <Bloc title="compétences.txt" className="competences-txt">
        <div>
          <div className="competencescards">
            {cardsData.map((card, index) => (
              <Ccard key={index} images={card.images} title={card.title} />
            ))}
          </div>
        </div>
      </Bloc>
    </div>
  );
};

export default Compétences;
