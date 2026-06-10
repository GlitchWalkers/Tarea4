const botonIniciar = document.getElementById("botonIniciar");
let cantidadPalabras = 0;
let listadoPalabras = [];
const vocales = ["a","e","i","o","u"];

botonIniciar.addEventListener("click",()=> ejecutarProcedimiento());

function ejecutarProcedimiento()
{
    listadoPalabras = [];
    cantidadPalabras = validarIngreso();
    ingresoPalabras(cantidadPalabras);
    let palabra = listadoPalabras.join("");
    historial(contarVocales(palabra));
}

function validarIngreso()
    {
    let ingreso = 0;
    let validado = false;
    while(validado == false)
    {
    ingreso = parseInt(prompt("Ingrese cantidad de palabras para trabajar"));
    if(isNaN(ingreso))
        {alert("Debe ingresar un numero valido");}
    else
        {if(ingreso > 10)
            {
            alert("La cantidad ingesada es mayor a 10. Esta seguro de la cantidad de palabras para trabajar");
            ingreso = parseInt(prompt("Confirme la cantidad ingresada o ingrese un nuevo valor",ingreso));
            if(isNaN(ingreso)) //revalidar que ingrese un numero
                {
                alert("Debe ingresar un numero valido");
                validado=false;
                }
            else
                {
                validado = true;
                return ingreso;
                }
            }
        else
            {
            validado = true;
            return ingreso;   
            }
    }
    }
    }

function ingresoPalabras(cantidadPalabras)
    {
    for(let i = 0; i < cantidadPalabras; i++)
    {
    let temp = "";
    temp = prompt(`Ingrese la palabra ${i+1}`)
    temp = temp.toLocaleLowerCase();
    listadoPalabras.push(temp);
    };    
    }

function contarVocales(pal)
    {
    let cadena = "";
    cadena = pal;
    let contador = 0;
    for(let i = 0; i<vocales.length; i++)
        {
        for(let j = 0; j<cadena.length; j++)
            {
            if (vocales[i] == cadena.charAt(j))
                {
                console.log("En la Posicion "+j+" esta la vocal "+vocales[i]); //verificacion vocales
                contador++
                console.log(`Hay ${contador} vocales en las palabras ingresadsa`); //verificacion conteo
                };           
            }
        }
    return contador;
    }

function historial (aux)
    {
    document.getElementById("palCantidad").innerHTML=cantidadPalabras;
    document.getElementById("palIngresadas").innerHTML=listadoPalabras;
    document.getElementById("palVocales").innerHTML=aux;
    console.log("El total de vocales es " + aux);
    alert("El total de vocales es " + aux);
    }