const express = require("express");
const router = express.Router();

const {
  uploadContact,
  getAllContact,
  updateContact,
  deleteContact,
  getSingleContact,
} = require("../controllers/Form");

router.post("/upload",  uploadContact);
router.put("/update/:id",  updateContact);
router.delete("/delete/:id", deleteContact);
router.get("/contacts",  getAllContact);
router.get("/contacts/:id", getSingleContact)


module.exports = router;










