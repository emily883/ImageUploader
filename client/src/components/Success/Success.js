import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import style from "./Success.module.css";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

function Success({ url }) {
  const [Copy, setCopy] = useState(false);
  const { link } = url;
  return (
    <div className={style.successContainer}>
      <div className={style.SuccessfulCheckMark}>
        <CheckCircleIcon fontSize="large" />
      </div>
      <div className={style.SuccessfulMessage}>Uploaded Successfully!</div>
      <div className={style.ImageUploadedContainer}>
        <img className={style.ImageUploaded} src={link} alt="Uploaded" />
      </div>
      <div className={style.CopyFunction}>
        <input
          className={style.InputLink}
          onFocus={(e) => {
            e.target.select();
          }}
          value={link}
          readOnly
        />
        <button
          className={style.ButtonLink}
          onClick={() => {
            navigator.clipboard
              .writeText(link)
              .then(setCopy(true))
              .catch((err) => console.log(err.message));
          }}
        >
          Copy Link
        </button>
      </div>
      {Copy ? (
        <div className={style.CopySuccessful}>
          <div className={style.CopyIcon}>
            <AssignmentTurnedInIcon color="primary" size="small" />
          </div>
          <div className={style.CopyText}>Link copied to clipboard</div>
        </div>
      ) : null}
    </div>
  );
}

export default Success;
