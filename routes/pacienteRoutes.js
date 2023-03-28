import express from "express";
import { agregarPaciente, obtenerPaciente } from "../controllers/pacienteController.js";
const router = express.Router();
import checkAuth from "../middleware/authMiddleware.js";

router.route('/')
    .post(checkAuth, agregarPaciente)
    .get(checkAuth, obtenerPaciente)

export default router;