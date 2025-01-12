import React from "react";
import Bloc from "../commons/Bloc";

const About = () => {
  const skills = [
    {
      name: "HTML - CSS -SASS",
      level: 90,
      color: "linear-gradient(45deg, #D6007C, #FF66B2)",
      images: [
        "https://static.vecteezy.com/system/resources/previews/012/697/299/non_2x/stylized-3d-html-logo-design-free-png.png",
        "https://cdn3d.iconscout.com/3d/free/thumb/free-logo-css-6563485-5453030.png?f=webp",
        "https://sass-lang.com/assets/img/styleguide/seal-color.png",
      ],
    },
    {
      name: "JS",
      level: 75,
      color: "linear-gradient(45deg, #FFEB3B, #FFC107)",
      images: [
        "https://cdn3d.iconscout.com/3d/free/thumb/free-javascript-9294848-7577991.png?f=webp",
      ],
    },
    {
      name: "React",
      level: 80,
      color: "linear-gradient(45deg, #0099CC, #66CCFF)",
      images: [
        "https://cdn3d.iconscout.com/3d/free/thumb/free-react-3d-icon-download-in-png-blend-fbx-gltf-file-formats--facebook-logo-native-javascript-library-user-interfaces-coding-lang-pack-logos-icons-7578010.png?f=webp",
      ],
    },
    {
      name: "ChromeDevTools - Accessibilité",
      level: 80,
      color: "linear-gradient(45deg, #4CAF50, #00BCD4)",
      images: [
        "https://static-00.iconduck.com/assets.00/chrome-devtools-icon-1024x1024-bgoqb03p.png",
      ],
    },
    {
      name: "Git - Github",
      level: 85,
      color: "linear-gradient(45deg, #6A4CFF, #9B59B6)",
      images: [
        "https://cdn3d.iconscout.com/3d/free/thumb/free-github-3d-icon-download-in-png-blend-fbx-gltf-file-formats--logo-social-media-pack-logos-icons-6491025.png?f=webp",
      ],
    },
    {
      name: "NodeJS - MongoDB",
      level: 50,
      color:
        "linear-gradient(90deg, rgba(54,92,48,1) 0%, rgba(28,98,51,1) 51%, rgba(28,209,89,1) 88%)",
      images: [
        "https://ugeek.github.io/blog/images-blog/node.png",
        "https://raw.githubusercontent.com/NX211/homer-icons/master/svg/mongodb.svg",
      ],
    },
  ];

  return (
    <div id="about-content">
      <h2>À propos de moi ! </h2>
      <div className="blocs-content">
        <Bloc title="about.txt" className="about-bloc">
          <div className="about-bloc-content">
            <div className="line-about">
              <p>01</p>
              <h3>
                Hello ! Je suis{" "}
                <span className="surlignagegreen">Hugo PLASTRE </span>
                développeur web
                <span className="surlignageblue"> front-end</span> junior,
              </h3>
            </div>
            <div className="line-about">
              <p>02</p>
              <h3>
                Actuellement en fin de{" "}
                <span className="surlignageyellow">formation</span> Développeur
                web chez OpenClassrooms.
              </h3>
            </div>
            <div className="line-about">
              <p>03</p>
              <h3>
                Spécialisé en développement front-end et tout ce qui
                lIt&#39;englobe (
                <span className="surlignagepurple">
                  accessibilité, performances, gestion de projet...
                </span>
                ).
              </h3>
            </div>
            <div className="line-about">
              <p>04</p>
              <h3>
                Passionné par la programmation et le développement web,
                jIt&#39;aime relever des{" "}
                <span className="surlignageblue">défis techniques</span>,
                concevoir des{" "}
                <span className="surlignagepurple">solutions innovantes</span>,
                et transformer des idées en{" "}
                <span className="surlignageyellow">projets concrets</span> grâce
                au code.
              </h3>
            </div>
            <div className="line-about">
              <p>05</p>
              <h3>
                Que ce soit en équipe ou en autonomie, je
                <span className="surlignageblue"> mIt&#39;adapte</span>{" "}
                facilement aux différents modes de travail.{" "}
                <span className="surlignagegreen">Déterminé et rigoureux</span>,
                je mIt&#39;efforce toujours dIt&#39;atteindre les objectifs
                fixés tout en apportant une{" "}
                <span className="surlignageyellow">énergie positive</span> au
                projet.
              </h3>
            </div>
          </div>
        </Bloc>
        <Bloc title="skills.js" className="skills-bloc">
          <div className="skills-bloc-content">
            {skills.map((skill, index) => (
              <div key={index} className="skill">
                <div className="title-bar">
                  <h4>{skill.name}</h4>
                  {skill.images.map((image) => (
                    <img key={image} src={image} alt="logo langage" />
                  ))}
                </div>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{
                      width: `${skill.level}%`, // Si visible, applique la largeur
                      backgroundImage: skill.color,
                    }}
                  ></div>
                </div>
              </div>
            ))}
            <p>Barres de progression en constante évolution...</p>
          </div>
        </Bloc>
      </div>
    </div>
  );
};

export default About;
