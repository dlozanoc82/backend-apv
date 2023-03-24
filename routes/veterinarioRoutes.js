import express  from "express";
import { registrar, perfil, confirmar, autenticar, resetPassword, confirmToken, newPassword } from "../controllers/veterinarioController.js";
import checkAuth from "../middleware/authMiddleware.js";

const router = express.Router();

//Area Publica
router.post('/', registrar);
router.get('/confirmar/:token', confirmar);
router.post('/login', autenticar );
router.post('/reset-password', resetPassword);
router.route('/reset-password/:token').get(confirmToken).post(newPassword);

//Area Privada
router.get('/perfil', checkAuth, perfil);

export default router;