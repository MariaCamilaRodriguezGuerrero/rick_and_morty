
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword= /^(?=.*\d).{6,10}$/;
function validation(userData) {
    let errors = {}
    if (userData.email === "") { errors.email = "Se requiere un email" }
    else if (!regexEmail.test(userData.email)) { errors.email = "Debe ser un correo electrónico" }
    else if (userData.email.length > 35) { errors.email = "no puede tener más de 35 caracteres" }

    if (!regexPassword.test(userData.password)) { errors.password = "La contraseña debe tener al menos 1 (un) numero y debe tener entre 6 y 10 caracteres" }

    return errors
}
export default validation