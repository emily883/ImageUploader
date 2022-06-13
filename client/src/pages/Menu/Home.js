import React from "react";
import CardUploader from "../../components/CardUploader/CardUploader";
import style from "./Home.module.css";

function Home() {
  return (
    <div className={style.HomeContainer}>
      <div className={style.CardUploaderContainer}>
        <CardUploader />
      </div>
    </div>
  );
}

export default Home;
