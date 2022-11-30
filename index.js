


// Generación de viarables.

let usuarioConEmail = "pablojuarez@gmail.com";
let contrasenia = "pablito";
const nameUser = prompt ("Ingresa tu nombre:")
const user = prompt ("Ingresa tu usuario:")
const pass = prompt ("Ingresa tu contraseña:")


// Validación del usuario y la contraseña.

const validacionUsuarioPassword = (usuario, password) => {
    if ( usuarioConEmail != usuario && contrasenia != password ){
        alert ("Su usuario y contraseña son erróneos")
    } else if (usuarioConEmail != usuario) {
         alert ("Su usuario es incorrecto")   
    }else if (contrasenia != password) {
        alert ("Su contraseña es incorrecta")
    } 
}

validacionUsuarioPassword (user, pass)


// Logueo exitoso

const login = (nombre ,usuario, pass) => {
 if (usuarioConEmail === usuario && contrasenia === pass){
    alert (`¡Bienvenido ${nombre}!`)
 }
}

login (nameUser ,user, pass)


// Validación del usuario, con respecto a un caracter especial (@).

const usuarioArroba = (usuario) => {
    let arroba = false;
    for ( let i = 0 ; i < usuario.length; i++ ) {
       if (usuario[i] === "@"){
       arroba = true;
       break;     
       
       } 
    }
    usuarioConEmail = prompt ("Ingrese nuevamente el mail, debe contener @")
}

usuarioArroba (usuarioConEmail)


// Validación de la seguridad de la contraseña. 

const passwordCacteres = (password) => {
    if (password.length < 8) {
        alert ("Su contraseña es insegura")
    } else {
        alert ("Su contraseña es segura")
    }
}

passwordCacteres (pass)


// Validación de si la contraseña es alfanumérica.

let confirmacionCambioPass = "Si"

const passwordNumero = (password) => {
    for (let i = 0 ; i < password.length ; i++){   
        if (password[i].match (/[0123456789]/)) {
            alert ("Su contraseña contiene un caracter alfanumérico")
        } else {
           let cambioPassword = prompt ("Su contraseña debe tener caracteres alfanuméricos. ¿Desea cambiarla?")


        if (cambioPassword === confirmacionCambioPass) {
            password = prompt ("Ingrese la nueva contraseña")
            break;
        }

        }
    }
} 

passwordNumero (pass)