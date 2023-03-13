import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const apikey = process.env.APIKEY;
const authdomain = process.env.AUTHDOMAIN;
const projectid = process.env.PROJECTID;
const storagebucket = process.env.STORAGEBUCKET;
const messagingsenderId = process.env.MESSAGINGSENDERID;
const appid = process.env.APPID;


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
