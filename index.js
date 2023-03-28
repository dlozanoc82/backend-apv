import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import veterinarioRoutes from "./routes/veterinarioRoutes.js";
import pacienteRoutes from "./routes/pacienteRoutes.js";

const app = express();
app.use(express.json());

//Conexion DB y variables de entorno
dotenv.config();
conectarDB();

//EndPoints 
app.use("/api/veterinarios", veterinarioRoutes);
app.use("/api/pacientes", pacienteRoutes);

//Puerto para lanzar el servidor.
const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto ${PORT}`)
});