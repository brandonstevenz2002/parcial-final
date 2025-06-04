const express = require("express");
const { getRoles, addRole } = require("../controllers/rolesController");
const router = express.Router();

router.get("/list", (req, res) => {
  res.json(getRoles());
});

router.post("/add", (req, res) => {
  const { name, description } = req.body;
  res.json(addRole(name, description));
});

module.exports = router;
