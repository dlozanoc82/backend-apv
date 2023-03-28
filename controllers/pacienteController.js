import Paciente from "../models/Paciente.js";

const agregarPaciente = async (req, res) => {

    const paciente = new Paciente(req.body);
    paciente.veterinario = req.veterinario._id;

    try {
        const pacienteSave = await paciente.save();
        res.json(pacienteSave);
    } catch (error) {
        console.log(error);
    }

};

const obtenerPaciente = (req, res) => {

};

export{
    agregarPaciente,
    obtenerPaciente
};