import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const apikey = process.env.REACT_APP_APIKEY;
const authdomain = process.env.REACT_APP_AUTHDOMAIN;
const projectid = process.env.REACT_APP_PROJECTID;
const storagebucket = process.env.REACT_APP_STORAGEBUCKET;
const messagingsenderId = process.env.REACT_APP_MESSAGINGSENDERID;
const appid = process.env.REACT_APP_APPID;


const app = initializeApp({
    apiKey: apikey,
    authDomain: authdomain,
    projectId: projectid,
    storageBucket: storagebucket,
    messagingSenderId: messagingsenderId,
    appId: appid
});


const storage = getStorage(app);
export default storage;
