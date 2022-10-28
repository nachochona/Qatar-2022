let Cultura = [
    {
    nombre: "El zoco Gold Souq",
    descripcion: "En el centro de Doha, encontrará tesoros escondidos en el Gold Souq, el zoco especializado en oro. Las piezas van desde pulseras y cadenas económicas, hasta conjuntos de joyas para novias hechos localmente y valorados en cientos de miles de dólares. Aunque la mayor parte del oro es de 22 quilates, también hay disponibles piezas de oro blanco y platino. Todo el oro y las gemas preciosas están estrictamente regulados, y se pesan delante del comprador.",
    img_a: "https://hospitality.fifa.com/media/3003/gold_souq_3.jpg",
    img_b: "https://motordeviajes.com/wp-content/uploads/Gold-Souq-Qatar-El-Mercado-Ideal-para-Comprar-Joyas-de-Oro-1024x683.jpg",
    img_c: "https://live.staticflickr.com/4124/5224433131_f807356300_c.jpg",
    
},
{
    nombre: "Diseñe sus propias joyas",
    descripcion: "Si las complejas e históricas joyas islámicas le han servido de inspiración, aproveche la oportunidad de diseñar y encargar sus propias joyas a algunos de los mejores joyeros del mundo en Alfardan Jewellers. También hay una gran variedad de artículos listos para lucirse.",
    img_a: "https://hospitality.fifa.com/media/3004/jewellery_design_1.jpg",
    img_b: "https://hospitality.fifa.com/media/3005/jewellery_design_2.jpg",
    img_c: "https://hospitality.fifa.com/media/3006/ring-engraving.jpg",
    
},
{
    nombre: "Código de vestimenta en las Mujeres",
    descripcion: "-Las mujeres originarias de Qatar cubren su cabello con una tela conocida como shayla o nijab, mientras portan un vestido largo negro llamado abaya. Algunas también acostumbran cubrir su rostro con un nicab, que solo deja al descubierto sus ojos.",
    img_a: "https://images.ecestaticos.com/Lhtsn_JDDMsECXW6MHwfpXaE7o0=/126x0:2166x1530/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F5b9%2F478%2F48a%2F5b947848a33958b28ac14ff3f3066ee4.jpg",
    img_b: "https://www.researchgate.net/publication/349580888/figure/fig1/AS:994982404059137@1614233699546/Widely-practiced-forms-of-the-Muslim-veil-the-hijab-shayla-khimar-abaya-niqab.png",
    img_c: "https://www.losandes.com.ar/resizer/LR3ae9TqVMLAHGjx-ouhqvzUrbc=/1200x793/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/4XSD6ROEAVEVTPL3DI477OILKE.jpg",
},
{
    nombre: "Código de vestimenta en los Hombres",
    descripcion: "-Los hombres visten con el thawb, thobe o thaub, una prenda blanca suelta hasta los tobillos y de manga larga sin transparencias, parecida a una túnica, arriba de sus pantalones. También usan una tela en la cabeza llamada gutra, que puede ser de tela blanca o roja y blanca, sujeto con una cuerda negra llamada agal.",
    img_a: "https://www.cronista.com/files/image/446/446293/61faf99332f3e.jpg",
    img_b: "https://img.freepik.com/vector-premium/conjunto-hombre-arabe-ropa-tradicional-ilustracion-estilo-dibujos-animados-plana_246613-102.jpg",
    img_c: "https://cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/XAS3C75PZVFR3KUWKBIV5NDKHY.jpg",
},

]
const contenedorCul = document.getElementById("exp-banner-cul")

function mostrarBannerExpCul(items){
    items.forEach(element => {
        contenedorCul.innerHTML+=`
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
mostrarBannerExpCul(Cultura)
