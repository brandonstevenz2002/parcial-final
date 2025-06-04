const express = require("express");
const {
  getUsers,
  addUser,
  getRoles,
} = require("../controllers/usersController");

const router = express.Router();

router.get("/list", (req, res) => {
  try {
    const users = getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
});

router.post("/add", (req, res) => {
  try {
    const { firstName, lastName, identification, email, role } = req.body;
    const result = addUser(firstName, lastName, identification, email, role);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Error interno al agregar usuario" });
  }
});

router.get("/roles", (req, res) => {
  try {
    const roles = getRoles();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener roles" });
  }
});

module.exports = router;
