function inicio(){
    console.log ('cargando ...');
    let numero1;
    let memoria = 0;
    let operacion;
    let resultado;

    const display = document.querySelector("span#display");
    const operdisplay = document.querySelector("span.operacion");
    const cero = document.querySelector("span#b0");
    const uno = document.querySelector("span#b1");
    const dos = document.querySelector("span#b2");
    const tres = document.querySelector("span#b3");
    const cuatro = document.querySelector("span#b4");
    const cinco = document.querySelector("span#b5");
    const seis = document.querySelector("span#b6");
    const siete = document.querySelector("span#b7");
    const ocho = document.querySelector("span#b8");
    const nueve = document.querySelector("span#b9");
    
    const mas = document.querySelector("span#bmas");
    const igual = document.querySelector("span#bigual");
    
    uno.addEventListener("click",() => {
        display.innerText = display.innerText.concat("1");
        display.innerText = parseInt(display.innerText, 10);
    });
    dos.addEventListener("click",() => {
        display.innerText = display.innerText.concat("2");
        display.innerText = parseInt(display.innerText, 10);
    });
    tres.addEventListener("click",() => {
        display.innerText = display.innerText.concat("3");
        display.innerText = parseInt(display.innerText, 10);
    });
    cuatro.addEventListener("click",() => {
        display.innerText = display.innerText.concat("4");
        display.innerText = parseInt(display.innerText, 10);
    });
    cinco.addEventListener("click",() => {
        display.innerText = display.innerText.concat("5");
        display.innerText = parseInt(display.innerText, 10);
    });
    bmas.addEventListener("click",() => {
        memoria = parseInt(display.innerText, 10);
        display.innerText = memoria;
        operacion = '+';
        operdisplay.innerText = memoria + '+';
    });
    bigual.addEventListener("click",() => {
        if (operacion == '+') {
            resultado = parseInt(display.innerText, 10) + memoria;
            display.innerText = resultado;
        }
        
    });

}

let result = () => {
    return eval(display.innerText);
}