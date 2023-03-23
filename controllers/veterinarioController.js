import Veterinario from "../models/Veterinario.js";

const registrar = async ( req, res )=>{
    const { email } = req.body;

    //Prevenir usuarios duplicados
    const existeUsuario = await Veterinario.findOne({email});
    if (existeUsuario) {
        const error = new Error('Usuario ya registrado');
        return res.status(400).json({msg: error.message});
    }

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

const confirmar = ( req, res ) => {
    console.log(req.params.token);
    res.json({msg: 'Confirmando cuenta ...'})
}

export {
    registrar,
    perfil,
    confirmar
}