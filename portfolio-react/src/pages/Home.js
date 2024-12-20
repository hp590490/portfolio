import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import TxtHome from "../components/TxtHome";
import Loading from "../components/Loading";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Header />
          <TxtHome />
        </div>
      )}
    </div>
  );
};

export default Home;
