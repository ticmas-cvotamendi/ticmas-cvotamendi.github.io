
const nombre = document.getElementById('nombre');
const empresa = document.getElementById('empresa');
const email = document.getElementById('email');
const select__motivo = document.getElementById('select__motivo');

console.log(nombre);
console.log(empresa);
console.log(email);
console.log(select__motivo);

const nombreText = nombre.innerText;
console.log(nombreText);

function nombreAlert(event) {
    nombre.addEventListener('keypress', () => {
    if (nombre.innerHTML = 0) {
        return alert("hola");
    }
})}