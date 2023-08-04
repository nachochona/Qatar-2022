








const stadiums = [
    {   
        nombre: "Stadium 974",
        img: "../../img/stadium-974-a.jpg",
        fecha: "22 nov. - 05 dic.",
        descripcion: "Un estadio con capacidad para 40,000 espectadores que rinde homenaje a la tradición marítima de Catar.",
        partidos: "6 x Fase de Grupos, Octavos de Final",
        link:"../pag/estadios/stadium-974.html"

    },
    {
        nombre: "Lusail Stadium",
        img: "../../img/estadio-final.jpg",
        fecha: "24 nov. - 18 dic.",
        descripcion: "Estadio con capacidad para 80,000 espectadores, que albergará la final de la Copa Mundial de la FIFA Catar 2022™.",
        partidos: "6 x Fase de Grupos, Octavos de Final, Cuartos de Final, Semifinal, Final del Mundial FIFA Catar 2022™ ",
        link:"../pag/estadios/lusail.html"
    },
    {
        nombre: "Al Bayt Stadium",
        img: "../img/al-bayt.jpg",
        fecha: "21 nov. - 14 dic.",
        descripcion: "Estadio con capacidad para 60,000 espectadores ubicado en la ciudad de Al Khor, célebre por sus actividades de pesca y de buceo para encontrar perlas.",
        partidos: "Partido Inaugural, 5 x Fase de Grupos, Octavos de Final, Cuartos de Final, Semifinal",
        link:"../pag/estadios/al-bayt.html"
    },
    {
        nombre: "Khalifa Internacional",
        img: "../img/khalifa_stadium-a.jpg",
        fecha: "21 nov. - 17 dic.",
        descripcion: "Estadio con capacidad para 40,000 espectadores, que ha sido la piedra angular de los deportes en Catar desde 1976.",
        partidos: "6 x Fase de Grupos, Octavos de Final, Tercer Puesto ",
        link:"../pag/estadios/khalifa.html"
    },
    {
        nombre: "Education City",
        img: "../img/education-city.webp",
        fecha: "22 nov. - 09 dic.",
        descripcion: "Estadio con capacidad para 40,000 espectadores rodeado por las instituciones educativas de primer nivel de Catar.",
        partidos: "6 x Fase de Grupos, Octavos de Final, Cuartos de Final",
        link:"../pag/estadios/education-city.html"
    },
    {
        nombre: "Ahmad Bin Ali",
        img: "../img/ahmad-bin-ali.jpg",
        fecha: "21 nov. - 03 dic.",
        descripcion: "Estadio con capacidad para 40,000 espectadores situado en los terrenos del antiguo estadio Ahmad bin Ali.",
        partidos: "6 x Fase de Grupos, Octavos de Final",
        link:"../pag/estadios/ahmad-bin-ali.html"
    },
    {
        nombre: "Al Janoub",
        img: "../img/al-janoub.jpg",
        fecha: "22 nov. - 05 dic.",
        descripcion: "Estadio con capacidad para 40,000 espectadores en la ciudad sureña de Al Wakrah, uno de los asentamientos humanos más antiguos de Catar.",
        partidos: "6 x Fase de Grupos, Octavos de Final",
        link:"../pag/estadios/al-janoub.html"
    },
    {
        nombre: "Al Thumama",
        img: "../img/Al-thumama.jpg",
        fecha: "21 nov. - 10 dic.",
        descripcion: "Estadio con capacidad para 40,000 espectadores, inspirado en la tradicional gahfiya, ubicado a 12 km al sur de Doha.",
        partidos: "6 x Fase de Grupos, Octavos de Final, Cuartos de Final",
        link:"../pag/estadios/al-thumama.html"

    },
];

const contenedorEstadios = document.getElementById("estadioos")


console.log(stadiums)
function mostrarStadiums(items) {
    items.forEach(element => {
        contenedorEstadios.innerHTML+= `
                <div class="div-est">
                    <div class= "stadiums-main">          
                        <div class="stadiums-main-info">                          
                            <h4>${element.fecha}</h4>
                            <h3>${element.nombre}</h3>
                            <div class="separator" style="width:70%;"></div>
                            <p>${element.descripcion}</p>
                            <div class="separator" style="width:70%;"></div>
                            <span class="part-tittle">Partidos</span>
                            <p class="part">${element.partidos}</p>
                            <button class="btn-est"><span><a href="${element.link}">Ver más</a></span></button>
                        </div>
                        <img style="clip-path: polygon(0 42%, 0 0, 100% 0, 100% 100%, 0 100%, 0 58%, 5% 50%);" src="${element.img}">
                    </div>
                    <div class="separator-est-end" ></div>
                </div>     
        `
    });
}
mostrarStadiums(stadiums)



console.log(stadiums)








// stadiums.forEach(element => {
//     const array = document.createElement("div")
//     array.classList.add("div-est")
//     array.innerHTML = ` 
//                         <div class= "stadiums-main">          
//                         <div class="stadiums-main-info">                          
//                             <h4>${element.fecha}</h4>
//                             <h3>${element.nombre}</h3>
//                             <div class="separator"></div>
//                             <p>${element.descripcion}</p>
//                             <div class="separator"></div>
//                             <span class="part-tittle">Partidos</span>
//                             <p class="part">${element.partidos}</p>
//                             <button class="btn-est"><span>Ver más</span></button>
//                         </div>
//                         <img style="clip-path: polygon(0 42%, 0 0, 100% 0, 100% 100%, 0 100%, 0 58%, 5% 50%);" src="${element.img}">
//                         </div>
//                         <div class="separator-2"></div>
//                         <div class="separator-large"></div>
//                         <div class="separator-2"></div>

//                      `
//     contenedorEstadios.appendChild(array)

// })