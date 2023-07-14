let Patrimonio = [
    {
    nombre: "The Pearl",
    descripcion: "La Perla de Qatar es un archipiélago artificial que abarca casi cuatro millones de metros cuadrados. Es la primera en Qatar con tierra disponible para ser propiedad de extranjeros. El nombre de `La Perla` fue elegido porque la isla se construirá en un lugar de Qatar donde anteriormente se practicaba el buceo o búsqueda de perlas.",
    img_a: "https://www.visitaqatar.com/wp-content/uploads/2019/07/Pearl-Qatar.jpg",
    img_b: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/481000/481984-Doha-And-Vicinity.jpg",
    img_c: "https://st.depositphotos.com/1044737/1279/i/450/depositphotos_12793999-stock-photo-pearl-and-oyster-fountain-in.jpg",
},
{
    nombre: "Museo Nacional de Qatar",
    descripcion: "El Museo Nacional de Catar, inspirado en la rosa del desierto, es una impresionante hazaña arquitectónica con una superficie de 40 000 metros cuadrados. Los visitantes pueden viajar a través de la historia del país, desde la antigüedad hasta el día de hoy.",
    img_a: "https://thumbs.dreamstime.com/b/vista-interior-del-museo-nacional-de-qatar-en-doha-nov-el-noviembre-179156267.jpg",
    img_b: "https://conocedores.com/wp-content/uploads/2022/07/museo-nacional-de-catar-disen%CC%83o-vanguardia-rosa-del-desierto-cultura-21072022.webp",
    img_c: "https://www.empty.es/wp-content/uploads/2021/04/Natinal-Museum-of-Qatar-Empty-G3-01-%C2%A9-Mika-Cartier.jpg",
},
{
    nombre: "Al Zubarah",
    descripcion: "El impresionante Fuerte Al Zubarah se ha conservado extraordinariamente bien, con sus torrecillas cataríes, sus muros de un metro de espesor y el iwan de la planta baja (pequeños pórticos que dan al patio a través de arcadas cuadradas). En el interior del edificio se encuentra una exposición de artefactos como cerámica y otros objetos encontrados en excavaciones recientes en la zona.",
    img_a: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/51/88/44/al-zubara-fort.jpg?w=1200&h=-1&s=1",
    img_b: "https://previews.123rf.com/images/philipus/philipus1602/philipus160200204/53141840-camellos-en-frente-del-hist%C3%B3rico-fort-zubarah-al-zubara-en-el-noreste-de-qatar-oriente-medio-arabia.jpg",
    img_c: "https://i0.wp.com/viajealpatrimonio.com/wp-content/uploads/2021/10/0998-sitio-arqueologico-de-al-zubarah.jpg?ssl=1",
},
{
    nombre: "Museo del Jeque Faisal Bin Qassim Al Thani",
    descripcion: "Para conocer la historia íntima de Catar, es imprescindible visitar el museo privado del jeque Faisal en Al Samriya, que relata una visión personal del pasado del país a través de la experiencia de su familia. Las más de 15 000 piezas abarcan las artes, artefactos y equipos personales, así como artículos domésticos y tradicionales de la vida de los cataríes en la era anterior al auge del petróleo.",
    img_a: "https://hospitality.fifa.com/media/2977/sheik_museum_2.jpg",
    img_b: "https://hospitality.fifa.com/media/2976/sheik_museum_1.jpg",
    img_c: "https://hospitality.fifa.com/media/2978/sheik_museum_3.jpg",
},
{
    nombre: "Doha en Bote",
    descripcion: "Con uno de los horizontes más impresionantes del mundo, Doha, la ciudad capital de Qatar deja una primera impresión inolvidable. Todo lo que ves se construyó después de 1971, cuando esta antigua aldea pescadora de perlas se convirtió en la capital, por lo que parece un set de filmación de un futuro no muy lejano.",
    img_a: "https://thumbs.dreamstime.com/b/botes-viejos-en-doha-qatar-addawhah-206340466.jpg",
    img_b: "https://ecuco7.com/wp-content/uploads/2019/12/qatar-prohibiciones-turistas.jpg",
    img_c: "https://img.lagaceta.com.ar/fotos/notas/2022/08/19/mundial-2022-hacer-entre-partido-partido-957553-181058.jpg",
},
]
const contenedorPat = document.getElementById("exp-banner-pat")

function mostrarBannerExp(items){
    items.forEach(element => {
        contenedorPat.innerHTML+=`
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
mostrarBannerExp(Patrimonio)