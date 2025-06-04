const fs = require("fs");
const path = require("path");

const rolesPath = path.join(__dirname, "../data/roles.json");

const getRoles = () => {
  const data = fs.readFileSync(rolesPath, "utf8");
  return JSON.parse(data);
};

const addRole = (name, description) => {
  const roles = getRoles();
  roles.push({ name, description });
  fs.writeFileSync(rolesPath, JSON.stringify(roles, null, 2));
  return { message: "Rol agregado exitosamente" };
};

module.exports = { getRoles, addRole };
