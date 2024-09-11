import{calcularIVA2, Producto} from "./05-desestructura.funciones"

const carrito:Producto[]=[
{
    desc:'Telefono1',
    precio:300
},

{
    desc:'Telefono2',
    precio:500
},

{
    desc:'Telefono3',
    precio:900
}
]

const [total,iva]=calcularIVA2(carrito);
console.log(`Total: ${total}`);
console.log(`IVA: ${iva}`);
