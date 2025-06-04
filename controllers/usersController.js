const fs = require("fs");
const path = require("path");

const usersPath = path.join(__dirname, "../data/users.json");
const rolesPath = path.join(__dirname, "../data/roles.json");

// Función para obtener usuarios
const getUsers = () => {
  try {
    if (!fs.existsSync(usersPath)) {
      return [];
    }
    const data = fs.readFileSync(usersPath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return [];
  }
};

// Función para obtener roles
const getRoles = () => {
  try {
    if (!fs.existsSync(rolesPath)) {
      return [];
    }
    const data = fs.readFileSync(rolesPath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error al obtener roles:", error);
    return [];
  }
};

// Función para agregar usuario
const addUser = (firstName, lastName, identification, email, roleName) => {
  try {
    const users = getUsers();
    const roles = getRoles();

    if (!firstName || !lastName || !identification || !email || !roleName) {
      return { error: "Todos los campos son obligatorios" };
    }

    const roleExists = roles.some(
      (role) => role.name.toLowerCase() === roleName.toLowerCase()
    );
    if (!roleExists) {
      return {
        error: `El rol '${roleName}' no existe. Roles disponibles: ${roles
          .map((r) => r.name)
          .join(", ")}`,
      };
    }

    const userExists = users.some(
      (user) => user.identification === identification
    );
    if (userExists) {
      return { error: "Ya existe un usuario con esa identificación" };
    }

    users.push({ firstName, lastName, identification, email, role: roleName });
    fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));

    return { message: "Usuario agregado exitosamente" };
  } catch (error) {
    console.error("Error al agregar usuario:", error);
    return { error: "Error interno al agregar usuario" };
  }
};

module.exports = { getUsers, getRoles, addUser };
