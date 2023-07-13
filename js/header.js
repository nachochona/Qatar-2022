console.log("header active")


 const abrirMenu = document.getElementById("btn-nav");
 const cerrarMenu = document.getElementById("btn-nav-close");
 const menu = document.getElementById("menu");
 const btn_3 =document.querySelector(".btn-3-lineas"); 




 abrirMenu.addEventListener('click', ()=>{
     menu.classList.toggle('visible');
     console.log("Funciona boton nav");
 })


// const navBar = document.getElementById('navBar');
// const abrirMenu = document.getElementById('abrirMenu');
// const cerrarMenu = document.getElementById('cerrarMenu');

// abrirMenu.addEventListener('click', ()=>{
//     navBar.classList.add('visible');
//     abrirMenu.classList.add('quitar');
//     console.log("oli");
// });

// cerrarMenu.addEventListener('click', ()=>{
//     navBar.classList.remove('visible');
//     abrirMenu.classList.remove('quitar');
//     console.log("oli");
// });