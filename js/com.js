let Comida = [
    {
    nombre: "Cena en el desierto",
    descripcion: "Varios restaurantes ofrecen banquetes a la parrilla a la orilla del mar. Disfrute del contraste de los océanos turquesa y los extensos desiertos de suaves y cálidos tonos al atardecer. Si le gustan las aventuras, puede incluso nadar con la puesta de sol.",
    img_a: "https://hospitality.fifa.com/media/3013/desert_dining_1.jpg",
    img_b: "https://hospitality.fifa.com/media/3014/desert_dining_2.jpg",
    img_c: "https://hospitality.fifa.com/media/3015/desert_dining_3.jpg",
    
},
{
    nombre: "Alta Cocina",
    descripcion: "Disfrute de un auténtico festín para el paladar en uno de los numerosos restaurantes exquisitos de Catar. Admire el espectacular paisaje de Doha y sumérjase en la amplia oferta gastronómica, que incluye cocina árabe, asiática, mexicana, fusión francesa y un marisco verdaderamente espectacular, con un toque de la cultura local.",
    img_a: "https://hospitality.fifa.com/media/3078/restaurant_1.jpg",
    img_b: "https://hospitality.fifa.com/media/3521/restaurants_2_pic_370.jpg",
    img_c: "https://hospitality.fifa.com/media/3166/food_last_1.jpg",
    
},
{
    nombre: "Una cena rápida",
    descripcion: "Para degustar los sabores ancestrales del Medio Oriente, ¿por qué no probar uno de los restaurantes tradicionales en el famoso Souk Waqif? Disfrute de los sabores inspirados en el Levante del Líbano, Chipre, Siria, Jordania y Palestina.",
    img_a: "https://hospitality.fifa.com/media/3164/food_first_pic_1.jpg",
    img_b: "https://hospitality.fifa.com/media/3165/food_middle_1.jpg",
    img_c: "https://hospitality.fifa.com/media/3522/restaurants_3_pic_466.jpg",
    
},
{
    nombre: "Como a usted le guste",
    descripcion: "Con cerca de 3000 restaurantes y ofertas gastronómicas para elegir, el viaje a Doha sin duda será una experiencia culinaria sublime, además de un evento futbolístico cargado de adrenalina. Recuerde que el fin de semana comienza en viernes, así que asegúrese de reservar una mesa para un brunch glamouroso o una cena sublime.",
    img_a: "https://hospitality.fifa.com/media/3167/food_first_pic_2.jpg",
    img_b: "https://hospitality.fifa.com/media/3169/food_middle_2.jpg",
    img_c: "https://hospitality.fifa.com/media/3170/food_last_2.jpg",
    
},


]
const contenedorCom = document.getElementById("exp-banner-com")

function mostrarBannerExpCom(items){
    items.forEach(element => {
        contenedorCom.innerHTML+=`
        <div class="pat-banner-text">
            <h2>${element.nombre}</h2>
            <div class="separator-gold"></div>
            <p>${element.descripcion}</p>
        </div>
        <div class="pat-banner-img">
            <div><img src="${element.img_a}" alt=""></div>
            <div><img src="${element.img_b}" alt=""></div>
            <div><img src="${element.img_c}" alt="">
        </div>                             
        `
    });
}
mostrarBannerExpCom(Comida)