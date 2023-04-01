import nodemailer from "nodemailer";

const emailResetPassword = async(datos) => {
    const transporte = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    //Enviar el email
    const { email, nombre, token} = datos;

    const info = await transporte.sendMail({
        from: "APV - Administrador de pacientes de veterinaria",
        to: email,
        subject: 'Restablecer Contraseña',
        text: 'Restablece tu Contraseña',
        html: `<p>Hola: ${nombre}, has solicitado restablecer tu contraseña</p>
            <p>Sigue el siguiente enlace para generar un nuevo password: 
            <a href="${process.env.FRONTEND_URL}/reset-password/${token}">Restablecer Contraseña</a></p>
            
            <p>Si tu no creaste la cuenta, puedes ignorar este mensaje</p>
        `
    });

    console.log("Mensaje enviado: %s", info.messageId)

}

export default emailResetPassword;