
interface Reproductor{
    volumne:number;
    segundo:number;
    cancion:string;
    detalles:Detalles; //Esta es una interfaz 'Detalles'
}
interface Detalles{
    autor:string;
    year:number;
}
const reproductor:Reproductor={
    volumne:50,
    segundo:10,
    cancion:"Tightrope",
    detalles:{
        autor:"Lp mi novia",
        year:2015
    }
}
/*console.log('El volumne actual es: ${reproductor.volumne}');
console.log('Los segundos son: ${reproductor.segundo}');
console.log('La cancion es: ${reproductor.cancion}');
console.log('El cantante es: ${reproductor.autor}');
console.log('El año es: ${reproductor.year}');*/

const{volumne, segundo, cancion, detalles}=reproductor;
const{autor, year}=detalles;

console.log(`El volumne actual es: ${volumne}`);
console.log(`Los segundos son: ${segundo}`);
console.log(`La cancion es: ${cancion}`);
console.log(`El cantante es: ${autor}`);
console.log(`El año es: ${year}`);

const dbz:string[]=['Goku','Majinbu','Babidy','Freezer'];
console.log(`Personaje 1 ${dbz[0]}`);
console.log(`Personaje 2 ${dbz[1]}`);
console.log(`Personaje 3 ${dbz[2]}`);
console.log(`Personaje 4 ${dbz[3]}`);

const[a,,b]=dbz;
console.log(`Personaje 1 ${a}`);
console.log(`Personaje 1 ${b}`);


