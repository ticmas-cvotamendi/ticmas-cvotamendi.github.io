const formulario = document.getElementById('formulario');
const select = document.getElementById("select__motivo");
const options = document.querySelectorAll("#formulario option");



options.forEach((option) => {
option.addEventListener('click', validarOpcion);
});


const validarOpcion = () => {
    
}