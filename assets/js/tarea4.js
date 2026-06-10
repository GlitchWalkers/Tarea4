const iniciarAdivinacion = document.getElementById("adivinarNumero");

iniciarAdivinacion.addEventListener("click", ()=>jugar());

function jugar()
    {
    const numeroSecreto = Math.floor(Math.random()*10)+1;
    document.getElementById("adorno").src="";
    let intentos = 3;
    let i = 0;
    let numero = 0;
    let numeroElegido = [];
    while(i < intentos)
        {
        let numeroValido = 0;
        numeroValido=validarIntento();
        if (!verificarRepetido(numeroValido,numeroElegido))
            {
            numeroElegido.push(numeroValido);
            document.getElementById("numElegidos").innerHTML=numeroElegido;
            i++;
            if (comprobar(numeroValido,numeroSecreto))
                {
                alert(`Acertaste, el numero ${numeroSecreto} era el numero secreto`);
                document.getElementById("adorno").src="./assets/img/win.jpg";
                document.getElementById("resultadoJuego").innerHTML="Adivinaste";
                document.getElementById("numSecreto").innerHTML=numeroSecreto;
                break;
                }
            else
                {
                if(intentos-i==0)
                    {
                    alert(`No quedan mas intentos, el numero secreto era el ${numeroSecreto}`);
                    document.getElementById("adorno").src="./assets/img/question_cat.png";
                    document.getElementById("resultadoJuego").innerHTML="No adivinaste";
                    document.getElementById("numSecreto").innerHTML=numeroSecreto;
                    }
                else
                    {
                    alert(`Numero equivocado te quedan ${intentos - i} intentos`);
                    };
                }
            }
        };
    };

function validarIntento()
    {
    let numValido = false;
        while (numValido == false)
        {
            let numeroElegido = parseInt(prompt("Ingrese un numero valido entre 1 y 10", 0));
            if(isNaN(numeroElegido) || numeroElegido < 1 || numeroElegido > 10)
                {                
                numValido = false;
                alert(`El numero ${numeroElegido} esta fuera de rango`);
                }
            else
                {
                numValido = true;   
                return numeroElegido;                
                };
        }; 
    };

function verificarRepetido(numeroValido,numeroElegido)
    {
        let intentosAnteriores = [];
        intentosAnteriores = numeroElegido;
        if (intentosAnteriores.includes(numeroValido))
            {
            alert(`El numero ${numeroValido} ya fue usado`);
            return true;
            };
    }

function comprobar(numeroValido,numeroSecreto)
    {
        if(numeroValido==numeroSecreto)
        {
         return true;   
        }        
    };