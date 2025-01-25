import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import TxtHome from "../components/header/TxtHome";
import Loading from "../components/Loading";
import Projets from "../components/projets/Projets";
import Competences from "../components/competences/Competences";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Footer from "../components/Footer";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="main-content">
          <Header />
          <TxtHome />
          <Projets />
          <Competences />
          <About />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;
