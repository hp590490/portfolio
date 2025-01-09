import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import TxtHome from "../components/TxtHome";
import Loading from "../components/Loading";
import Projets from "../components/Projets";
import Competences from "../components/Competences";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 0);
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
