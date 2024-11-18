import React from "react";
import LandingPage from "./Pages/LandingPage/LandingPage";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="app">
      <LandingPage />
    </div>
  );
};

export default App;
