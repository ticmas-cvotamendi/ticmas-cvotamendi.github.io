
    // if (input.item =! 0) {
        // return swal('ENVIADO', '¡Muchas gracias por tu interés!', 'success');
        // form.reset();
    // }
    // else {
    //     event.preventDefault();
    //     return swal('OOOPS', 'Campos requeridos incompletos', 'error');
    // }

const form = document.getElementById('formulario');    
form.addEventListener('submit', function(event) { 
    event.preventDefault;
})

const btn_enviar = document.getElementById('btn-enviar');

btn_enviar.addEventListener('click',  () => {     
        return swal('ENVIADO', '¡Muchas gracias por tu interés!', 'success');
        form.reset();
    })

const btn_borrar = document.getElementById('btn-borrar');

btn_borrar.addEventListener('click', () => {
    form.reset();
})