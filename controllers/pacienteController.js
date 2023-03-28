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

const obtenerPaciente = async(req, res) => {

    const pacientes = await Paciente
        .find()
        .where('veterinario')
        .equals(req.veterinario);

    res.json(pacientes);
    
};

export{
    agregarPaciente,
    obtenerPaciente
};