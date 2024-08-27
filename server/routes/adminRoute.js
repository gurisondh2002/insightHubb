const router = require("express").Router();
const adminController = require("../controllers/adminController");
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.post('/register', upload.single('adminProfile'), adminController.createAdmin);
router.post("/login", adminController.loginAdmin);

module.exports = router;