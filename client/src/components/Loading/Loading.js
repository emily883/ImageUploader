import React from "react";
import style from "./loading.module.css";

function Loading() {
  return (
    <div className={style.card_loading}>
      <div className={style.loader}>
        <div className={style.card_loading_text}>Uploading...</div>
        <div className={style.loading_1} />
      </div>
    </div>
  );
}

export default Loading;
