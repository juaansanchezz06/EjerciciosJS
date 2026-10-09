const envio = 6.5
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

let precioFinal = baseImponibleTotal + ivaTotal

if (baseImponibleTotal < 50) {
    precioFinal += envio
}

alert(`Su total sin IVA es: ${baseImponibleTotal}€\nSu IVA suma: ${ivaTotal}€\nSu total es: ${precioFinal}€`)
