// Luis David Ixquiac Sac
// 1521223
import { Persona } from './Ejercicio8';

let persona1 = new Persona("David", 19, "Quetzaltenango");

console.log("Nombre:", persona1.getNombre());
console.log("Edad:", persona1.getEdad());
console.log("Ciudad:", persona1.getCiudad());

persona1.setNombre("Pablo");
persona1.setEdad(14);
persona1.setCiudad("Coatepeque");

console.log("")
console.log("Nuevo nombre:", persona1.getNombre());
console.log("Nueva edad:", persona1.getEdad());
console.log("Nueva ciudad:", persona1.getCiudad());
