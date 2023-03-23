import Veterinario from "../models/Veterinario.js";

const registrar = async ( req, res )=>{
    //const {nombre, email, password} = req.body;

    try {
        //Guardar nuevo usuario
        const veterinario = new Veterinario(req.body);
        const veterinarioSave = await veterinario.save();

        res.json(veterinarioSave);
    } catch (error) {
        console.log(error);
    }


};

const perfil =( req, res )=>{
    res.json({msg: 'Mostrando Perfil'});
}

export {
    registrar,
    perfil,
}