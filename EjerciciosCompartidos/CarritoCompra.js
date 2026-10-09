let precios = [2,5,30];
let cantidades = [5,2,1];
let tiposIva = [0.21, 0.10, 0.4];

let baseImponibleTotal = 0;
let ivaTotal = 0;
let baseProducto = 0;

for (let i = 0; i < precios.length; i++){
    baseProducto =  precios[i] * cantidades[i];
    baseImponibleTotal += baseProducto;
    ivaTotal += baseProducto* tiposIva[i];
};

console.log("Base Imponible total: ",baseImponibleTotal);
console.log("Iva total: ", ivaTotal);
