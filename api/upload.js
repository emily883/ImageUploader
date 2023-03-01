const multer = require("multer");
const path = require("path");

// Files is being uploader to the files itself
// Make conection to firebase in the future.

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'Images')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  })
  
  const upload = multer({ storage: storage })
  

  module.exports = upload