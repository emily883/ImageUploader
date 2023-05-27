import React, { useCallback, useState, createRef } from "react";
import style from "./CardUploader.module.css";
import Dropzone from "react-dropzone";
import image from "../image.svg";
// import axios from "axios";
import Loading from "../Loading/Loading.js";
import Success from "../Success/Success.js";
import storage from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// const HOST = process.env.REACT_APP_HOST;
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function CardUploader() {
  const [url, setUrl] = useState(undefined);
  const [LoadingStatus, setLoading] = useState(false);
  const [SuccessStatus, setSuccess] = useState(false);
  const [Error, setError] = useState(false);

  const dropzoneRef = createRef();
  const openDialog = () => {
    if (dropzoneRef.current) {
      dropzoneRef.current.open();
    }
  };

  // WIthout Firebase integration
  // const upload_Image = (data) => {
  //   setLoading(true);
  //   axios
  //     .post(HOST, data)
  //     .then((res) => {
  //       setLoading(false);
  //       setUrl(res.data);
  //       setSuccess(true);
  //     })
  //     .catch();
  // };

  const UploadPhoto = (photo) => {
    const storageRef = ref(storage, `ImageUploaderImages/${photo.name}`);

    uploadBytes(storageRef, photo).then(() => {
      getDownloadURL(storageRef).then((url) => {
        setUrl(url);
        setSuccess(true);
        setLoading(false);
      });
    });
  };

  // Without Firebase integration
  // const onDrop = useCallback((acceptedFiles) => {
  //   const data = new FormData();
  //   data.append("image", acceptedFiles[0]);

  //   upload_Image(data);
  // }, []);
  const onDrop = useCallback((acceptedFiles) => {
    const regex = /^image\/(jpeg|png)$/;
    if (!regex.test(acceptedFiles[0].type)) {
      setError(true)
    } else {
      setError(false);
      setLoading(true);
      UploadPhoto(acceptedFiles[0]);
    }
  }, []);

  return (
    <>
      <Box sx={{ width: "100%" }} className={style.BoxNotify}>
        <Collapse in={Error}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setError(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            File should be an image
          </Alert>
        </Collapse>
      </Box>
      {LoadingStatus ? (
        <div className={style.LoadingWrapper}>
          <Loading />
        </div>
      ) : SuccessStatus ? (
        <Success url={url} />
      ) : (
        <div className={style.CardUploaderContainer}>
          <div className={style.title}>Upload your image</div>
          <div className={style.FilesAccepted}>File should be Jpeg,Png</div>
          <div className={style.DropZone}>
            <Dropzone
              ref={dropzoneRef}
              onDrop={(acceptedFiles) => onDrop(acceptedFiles)}
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <img
                      className={style.DropIcon}
                      src={image}
                      alt="DropIcon"
                    />
                    <p className={style.DropText}>
                      Drag 'n' drop your image here
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
          <div className={style.Or}>
            <span>Or</span>
          </div>
          <div className={style.ChooseFileButtonContainer}>
            <button
              type="button"
              className={style.ChooseFileButton}
              onClick={openDialog}
            >
              Choose a File
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CardUploader;
