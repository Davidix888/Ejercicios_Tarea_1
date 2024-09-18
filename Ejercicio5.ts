//Luis David Ixquic Sac
//151223

console.log("Tablas de multiplicar")
function tablas(numero1: number): void {
    console.log("Tabla de multiplicar del " + numero1 + ":");
    for (let i = 1; i <= 10; i++) {
        console.log(numero1 * i);
    }
}

tablas(5); 
console.log("")
console.log("Cuenta regresiva")

function contar(numero2:number){
    if(numero2 <= 0){
        console.log("Haz llegado a cero")
    } else{
        console.log(numero2);

        contar(numero2 - 1);
    }
}

contar(9)

