const express = require("express");
const cors = require("cors");
const roleRoutes = require("./routes/roles");
const userRoutes = require("./routes/users");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/roles", roleRoutes);
app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
