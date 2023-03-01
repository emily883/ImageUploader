const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const router = require("./router/router");
const cors = require("cors");

const corsOptions = {
  origin: (origin, callback) => {
    callback(null, true);
  },
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Access-Control-Allow-Origin", "Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"],
  credentials: true
};

app.options('*', cors(corsOptions));
app.use(cors(corsOptions));


// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("Images"));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); 
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// Testing Api Call
// app.get("/", (req, res) => {
//   res.send("hola gente");
// });

app.use("/upload", router);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
