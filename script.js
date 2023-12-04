
const back = "(";
const tick = ")";

// El valor se que seleccione se agregará a la pantalla

function Agregar(valor){
    document.getElementById('pantalla').value += valor;
}

// Elimina los valores agregados a la pantalla
function Borrar(){
    document.getElementById('pantalla').value = '';
}

// Transforma el string de pantalla y resuelve una operacion
function Calcular(){
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado
}
// Borra el último de las teclas ingresadas-PENDIENTE
function BorrarUno(){
    pass
}