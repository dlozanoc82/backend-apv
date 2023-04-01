import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import conectarDB from "./config/db.js";
import veterinarioRoutes from "./routes/veterinarioRoutes.js";
import pacienteRoutes from "./routes/pacienteRoutes.js";


const app = express();
app.use(express.json());

//Conexion DB y variables de entorno
dotenv.config();
conectarDB();

//Cors
const dominiosPermitidos = [process.env.FRONTEND_URL];

const corsOptions = {
    origin: function (origin, callback) {
        if (dominiosPermitidos.indexOf(origin) !== -1) {
            callback(null, true);
        }else{
            callback(new Error('No permitido por CORS'))
        }
    }
}

app.use(cors(corsOptions));

//EndPoints 
app.use("/api/veterinarios", veterinarioRoutes);
app.use("/api/pacientes", pacienteRoutes);

//Puerto para lanzar el servidor.
const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto ${PORT}`)
});