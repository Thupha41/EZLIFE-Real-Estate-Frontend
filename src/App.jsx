import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { useRef } from "react";
import AppContent from "./Components/Layout/AppContent";
const App = () => {
  const isLoading = useSelector((state) => state.account.isLoading);
  const firstRenderRef = useRef(true);
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
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
    <Router>
      {isLoading ? (
        <div style={style}>
          <HashLoader color={"#fd7e14"} loading={true} size={150} />
        </div>
      ) : (
        <AppContent firstRenderRef={firstRenderRef} />
      )}
    </Router>
  );
};

export default App;
