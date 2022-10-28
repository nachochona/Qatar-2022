let teams = [
    {
        id: 1,
        nombre: "Qatar",
        img: "https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-03/Qatar.jpg?itok=6Xp5TKVJ",
        descripcion:"Al ser el país anfitrión, no necesitó jugar las eliminatorias. Tras ganar la Copa de Asia 2019, ganandole la final al seleccionado japonés por 3 a 1, se presentará a jugar su primer mundial en un grupo complicado.",
        f_1:"../../img/ecuador.png",
        f_1_p:"Ecuador 21/11 - 13:00 hs",
        f_2:"../../img/senegal.png",
        f_2_p:"Senegal 25/11 - 10:00 hs",
        f_3:"../../img/paises-bajos.png",
        f_3_p:"Países Bajos 29/11 - 12:00 hs",
        a_1:"50° (octubre 2022).",
        a_2:"Como organizador del evento.",
        a_3:"(G-E-P): 13-4-7 (40 GF, 36 GC, +4).",
        a_4:"(G-E-P) 1-4-2 (4 GF, 8 GC, -4).",
        e_1:"Félix Sanchez",
        e_2:"ESPAÑOL",
        e_3:"46 años <br> (puede cumplir 47 durante el Mundial, ya que cumple el 13/12).",
        e_4:"3 de julio de 2017.",
        e_5:" (G-E-P): 41-17-25.",
        e_6:"Copa Asiática 2019.",
        e_7:"Copa Asiática 2019.",
        s_1:"11,571 km²",
        s_2:"2,881,000",
        s_3:"Doha",
        s_4:"Catarí",
        s_5:"dirhams",
        partic:"-",
        pos_his:"-",
        mejor_result:"-",
        campeon:"-",
    },
    {
        id: 2,
        nombre: "Ecuador",
        img: "../img/ecuador.png",
    },
    {
        id: 3,
        nombre: "Senegal",
        img: "../img/senegal.png",
    },
    {
        id: 4,
        nombre: "Países Bajos",
        img: "../img/paises-bajos.png",
    },
    {
        id: 5,
        nombre: "Inglaterra",
        img: "../img/inglaterra.png",
    },
    {
        id: 6,
        nombre: "Irán",
        img: "../img/iran.png",
    },
    {
        id: 7,
        nombre: "Estados Unidos",
        img: "../img/estados-unidos.png",
    },
    {
        id: 8,
        nombre: "Gales",
        img: "../img/gales.png",
    },
    {
        id: 9,
        nombre: "Argentina",
        img: "../img/argentina.png",
    },
    {
        id: 10,
        nombre: "Arabia Saudita",
        img: "../img/arabia-saudita.png",
    },
    {
        id: 11,
        nombre: "México",
        img: "../img/mexico.png",
    },
    {
        id: 12,
        nombre: "Polonia",
        img: "../img/polonia.png",
    },
    {
        id: 13,
        nombre: "Francia",
        img: "../img/francia.png",
    },
    {
        id: 14,
        nombre: "Australia",
        img: "../img/australia.png",
    },
    {
        id: 15,
        nombre: "Dinamarca",
        img: "../img/dinamarca.png",
    },
    {
        id: 16,
        nombre: "Túnez",
        img: "../img/tunez.png",
    },
    {
        id: 17,
        nombre: "España",
        img: "../img/españa.png",
    },
    {
        id: 18,
        nombre: "Costa Rica",
        img: "../img/costa-rica.png",
    },
    {
        id: 19,
        nombre: "Alemania",
        img: "../img/alemania.png",
    },
    {
        id: 20,
        nombre: "Japón",
        img: "../img/japon.png",
    },
    {
        id: 21,
        nombre: "Bélgica",
        img: "../img/belgica.png",
    },
    {
        id: 22,
        nombre: "Canadá",
        img: "../img/canada.png",
    },
    {
        id: 23,
        nombre: "Marruecos",
        img: "../img/marruecos.png",
    },
    {
        id: 24,
        nombre: "Croacia",
        img: "../img/croacia.png",
    },
    {
        id: 25,
        nombre: "Brasil",
        img: "../img/brasil.png",
    },
    {
        id: 26,
        nombre: "Serbia",
        img: "../img/serbia.png",
    },
    {
        id: 27,
        nombre: "Suiza",
        img: "../img/suiza.png",
    },
    {
        id: 28,
        nombre: "Camerún",
        img: "../img/cameroon.png",
    },
    {
        id: 29,
        nombre: "Portugal",
        img: "../img/portugal.png",
    },
    {
        id: 30,
        nombre: "Ghana",
        img: "../img/ghana.png",
    },
    {
        id: 31,
        nombre: "Uruguay",
        img: "../img/uruguay.png",
    },
    {
        id: 32,
        nombre: "Corea del Sur",
        img: "../img/corea.png",
    },
]



console.log(teams)

const contenedorGrupos = document.getElementById("divGrupoPaises");



function mostrarPaises(items) {
    items.forEach(element => {
        contenedorGrupos.innerHTML+= `
        <div class="div-grupo-1" id="divGrupoPaises">
            <div class="div-grupo-main">
            <h2>${element.nombre}</h2>
            <div class="separator-diamond">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          
          <div class="first">
            <p>${element.descripcion}</p>
            <img src="${element.img}" alt="">
          </div>
          <div class="historial-team">
            <h3>Historial en mundiales</h3>
            <div class="historial-team-div">
              <div>
                <p>Participaciones</p>
                ${element.partic}
              </div>
              <div>
                <p>Posición Historica</p>
                ${element.pos_his}
              </div>
              <div>
                <p>Mejor actuación</p>
                ${element.mejor_result}
              </div>
              <div>
                <p>Campeón</p>
                ${element.campeon}
              </div>
            </div>
          </div>
          
        </div>
        <div class="info-team">
            
            <div class="accordion accordion-flush accordion-team" id="accordionFlushExample">




              <div class="accordion-item fixture">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button class="accordion-button collapsed  fixture-title" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <p>Fixture</p> 
                  </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" >
                  <div class="accordion-body">
                    <div class="fixture-info">
                      <div><img src="../../img/ecuador.png" alt=""> <p>Ecuador 21/11 - 13:00 hs</p> </div> 
                      <div class="separator"></div>
                      <div><img src="../../img/senegal.png" alt=""> <p>Senegal 25/11 - 10:00 hs</p> </div>
                      <div class="separator"></div>
                      <div><img src="../../img/paises-bajos.png" alt=""> <p>Países Bajos 29/11 - 12:00 hs</p> </div>
                    </div>
                  </div>
                </div>
              </div>



             <div class="accordion-item">
                <h2 class="accordion-header preset" id="flush-headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    <p>Actualidad</p>
                  </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" >
                  <div class="accordion-body preset">
                    <div>
                      <p>RANKING FIFA: <br> ${element.a_1}</p>
                      <div class="separator"></div>
                      <p>¿CÓMO SE CLASIFICÓ AL MUNDIAL? <br>${element.a_2}</p>
                      <div class="separator"></div>
                      <p>RENDIMIENTO EN 2021:  <br> ${element.a_3}</p>
                      <div class="separator"></div>
                      <p>RENDIMIENTO EN 2022: <br>${element.a_4}</p>
                    </div>
                  </div>
                </div>
              </div>



              <div class="accordion-item">
                <h2 class="accordion-header preset" id="flush-headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    <p>Entrenador</p>
                  </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" >
                  <div class="accordion-body preset">
                    <div>
                      <p>ENTRENADOR: <br> ${element.e_1} </p>
                      <div class="separator"></div>
                      <p>NACIONALIDAD: <br> ${element.e_2} </p>
                      <div class="separator"></div>
                      <p>EDAD:  ${element.e_3}</p>
                      <div class="separator"></div>
                      <p> CONTRATADO: ${element.e_4} </p>
                      <div class="separator"></div>
                      <p>RÉCORD EN EL CARGO:  ${element.e_5}</p>
                      <div class="separator"></div>
                      <p>TÍTULOS EN EL CARGO: <br>  ${element.e_6}</p>
                      <div class="separator"></div>
                      <p>VICTORIA MAS NOTABLE: <br>  ${element.e_7}</p>
                    </div>
                  </div>
                </div>
              </div>



              <div class="accordion-item">
                <h2 class="accordion-header preset" id="flush-headingFour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    <p>Conoce más</p>
                  </button>
                </h2>
                <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headiFour" >
                  <div class="accordion-body preset">
                    <div>
                      <p>SUPERICIE: <br> ${element.s_1}</p>
                      <div class="separator"></div>
                      <p>POBLACIÓN: <br> ${element.s_2} </p>
                      <div class="separator"></div>
                      <p>CAPITAL: <br> ${element.s_3}</p>
                      <div class="separator"></div>
                      <p>IDIOMA: <br> ${element.s_4}</p>
                      <div class="separator"></div>
                      <p>MONEDA: <br> ${element.s_5}</p>
                    </div>
                  </div>
                </div>
              </div>



              <div class="accordion-item">
                <h2 class="accordion-header preset" id="flush-headingFive">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                    <p>Mundial por mundial</p>
                  </button>
                </h2>
                <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headiFive" >
                  <div class="accordion-body preset more-info">
                  <div>1930</div>    <div>-</div>    <div>No clasificó</div>
                  <div>1934</div>    <div>-</div>    <div>Fase de Grupos</div>
                  <div>1938</div>    <div>-</div>    <div>Octavos de Final</div>
                  <div>1950</div>    <div>-</div>    <div>Cuartos de final</div>
                  <div>1954</div>    <div>-</div>    <div>Semifinal</div>
                  <div>1958</div>    <div>-</div>    <div>Tercer Lugar</div>
                  <div>1962</div>    <div>-</div>    <div>Final</div>
                  <div>1966</div>    <div>-</div>    <div>Cuarto Lugar</div>
                  <div>1970</div>    <div>-</div>    <div>9</div>
                  <div>1974</div>    <div>-</div>    <div>3</div>
                  <div>1978</div>    <div>-</div>    <div>6</div>
                  <div>1982</div>    <div>-</div>    <div>9</div>
                  <div>1986</div>    <div>-</div>    <div>3</div>
                  <div>1990</div>    <div>-</div>    <div>6</div>
                  <div>1994</div>    <div>-</div>    <div>9</div>
                  <div>1998</div>    <div>-</div>    <div>3</div>
                  <div>2002</div>    <div>-</div>    <div>6</div>
                  <div>2006</div>    <div>-</div>    <div>9</div>
                  <div>2010</div>    <div>-</div>    <div>3</div>
                  <div>2014</div>    <div>-</div>    <div>6</div>
                  <div>2018</div>    <div>-</div>    <div>9</div>
                  <div>2022</div>    <div>-</div>    <div>3</div>
                </div>
                  </div>
                </div>
              </div>
            </div>
            
      </div>    
        `
    });
}
mostrarPaises(teams)



