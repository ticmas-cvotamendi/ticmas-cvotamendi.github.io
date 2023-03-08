const formulario = document.getElementById('formulario');
const btn_borrar = document.getElementById('btn-borrar');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s\'\-]{1,40}$/, // Letras y espacios, pueden llevar acentos, guion y apóstrofe.
	empresa: /^[a-zA-Z0-9\_\-]{0,16}$/, // Letras, numeros, guion y guion_bajo
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^[0-9]{2}-[0-9]{4}-[0-9]{4}$/ // xx-xxxx-xxxx.
}

const campos = {
    nombre: false,
    empresa: false,
    email: false,
    telefono: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
		case "nombre":
            validarCampo(expresiones.nombre, e.target, "nombre");
		break;
        case "empresa":
            validarCampo(expresiones.empresa, e.target, "empresa");
		break;
        case "email":
            validarCampo(expresiones.email, e.target, "email");
		break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, "telefono");
		break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.add("fa-circle-check");
        document.querySelector(`#grupo__${campo} i`).classList.remove("fa-circle-xmark");  
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");              
        campos[campo] = true;
    }
    else {
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.add("fa-circle-xmark");
        document.querySelector(`#grupo__${campo} i`).classList.remove("fa-circle-check"); 
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

    if(campos.nombre && campos.empresa && campos.email && campos.telefono) {
        formulario.reset();  
        swal('ENVIADO', '¡Muchas gracias por tu interés!', 'success');    
        document.querySelectorAll(".formulario__grupo-correcto").forEach((icono) => {
            icono.classList.remove("formulario__grupo-correcto");
        });
        swal('ENVIADO', '¡Muchas gracias por tu interés!', 'success');  
    }
    else {
        swal('OOOOPS', 'Por favor, completá los campos faltantes o incorrectos', 'error');
    }
});

btn_borrar.addEventListener('click', () => {
    formulario.reset();
    document.querySelectorAll(".formulario__grupo-incorrecto").forEach((icono) => {
        icono.classList.remove("formulario__grupo-incorrecto");
    });
    document.querySelectorAll(".formulario__grupo-correcto").forEach((icono) => {
        icono.classList.remove("formulario__grupo-correcto");
    });
})





