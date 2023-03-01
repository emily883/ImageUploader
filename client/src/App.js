import React from "react";
import Home from "./pages/Menu/Home";
import Footer from "./components/Footer/Footer";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.AppContainer}>
      <div className={style.ImageUploaderContainer}>
        <Home />
      </div>
      <div className={style.FooterContainer}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
