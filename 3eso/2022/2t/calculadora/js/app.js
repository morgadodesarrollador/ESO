function inicio(){
    console.log ('cargando ...');

    const display = document.querySelector("span#display");
    const uno = document.querySelector("span#b1");
    const dos = document.querySelector("span#b2");
    const mas = document.querySelector("span#bmas");
    console.log(uno, display);
    uno.addEventListener("click",() => {
        console.log("uno");
        display.innerText = display.innerText.concat("1");
        console.log (result());
    });
    dos.addEventListener("click",() => {
        console.log("dos");
        display.innerText = display.innerText.concat("2");
    });


}

let result = () => {
    return eval(display.innerText);
}