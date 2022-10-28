
//-----------------------------SCROLL----------------------------------->>>


const nav = document.getElementById("nav")

window.onscroll = function (){
    if(window.pageYOffset >= 10){
        nav.classList.add("scroll")
        console.log("Funciona el scroll")
    }
    else{
        nav.classList.remove("scroll")
    }
}
console.log("Hola")



//---------------------------------------------------------------------->>>









