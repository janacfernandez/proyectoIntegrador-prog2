const data = {
    usuario:  {
        foto: "", 
        nombre: "Martín",
        apellido: "Perez",
        email: "mperez@gmail.com",
        usuario: "MartínPerez_",
        constrasenia: "m1980",
        fDeNac : "22-09-1980",
        nroDeDoc: "28740858", 
    },

    productos: [{
        imagen: "",
        nombre: "Toyota Yaris",
        descripcion: "El Toyota Yaris Cross es el nuevo B-SUV de Toyota, un modelo basado en la misma plataforma del Yaris que llega para competir en uno de los segmentos de mayor crecimiento de los últimos años, el de los crossover urbanos.",
        anio: 2021,
    },
    {
        imagen: "",
        nombre: "Audi A3 Sportback",
        descripcion: "El Audi A3 Sportback 2020, que también se vende con carrocería Sedán, es la cuarta generación del compacto premium. El mismo es un híbrido enchufable que permite disfrutar de la conducción como nunca. Con toda la autonomía que necesitamos y la potencia que buscamos, combina las ventajas de un motor de combustión y un motor eléctrico. ¿Lo mejor? Que une lo más gratificante de uno para escenificar todo lo bueno del otro",
        anio: 2015,
    },
    {
        imagen: "",
        nombre: "BMW Serie 2 Gran Coupé",
        descripcion: "El primer BMW Serie 2 Gran Coupé introduce una nueva forma de dominio en la clase compacta. Sobre todo la estética orientada al rendimiento deja claras sus ambiciones. En consonancia con las tecnologías de gama alta y funciones de dinamismo de conducción, el BMW Serie 2 Gran Coupé se distingue fácilmente de los demás vehículos y sigue su propio camino.",
        anio: 2019,
    },
    {
        imagen: "",
        nombre: "Kia Sorento",
        descripcion: "Se trata de un SUV que nació con todo lo aprendido de sus homólogos. De hecho, será bastante usual dar con él un automóvil con varias similitudes técnicas con su primo 100% eléctrico, el e-Niro. Con numerosas funcionalidades, un interior muy equipado y dimensiones bien pronunciadas, este entrega una potencia combinada de 230 CV. Sus rivales más próximos son el Lexus RX 450h L, el Skoda Kodiaq 2.0 TSI 4×4 y el BMW X3 xDrive30i.",
        anio: 2020,
    },
    {
        imagen: "",
        nombre: "Ford Ka",
        descripcion: "El Ford Ka es un automóvil de turismo del segmento A comercializado por el fabricante estadounidense Ford Motor Company para el mercado europeo desde 1996, y al año siguiente para el latinoamericano. El Ka es el modelo más pequeño de la línea europea de Ford, orientado al público más joven que precisa un vehículo para transportarse por la ciudad. Es un cinco plazas con motor delantero transversal y tracción delantera.",
        anio: 2015,
    },
    {
        imagen: "",
        nombre: "Jaguar XJ",
        descripcion: "El Lexus RZ 2023 es el primer paso de Lexus en su conversión a marca 100% eléctrica como parte del gran plan de Toyota. Se trata de un SUV medio de angulosas formas que tiene las mismas entrañas que el Toyota bZ4x y el Subaru Solterra",
        anio: 2022 ,
    },
    {
        imagen: "",
        nombre: "Maserati Quattroporte",
        descripcion: "El Maserati Quattroporte2​ es un automóvil sedán de lujo (segmento F), fabricado por Maserati en Italia. El nombre, traducido directamente del italiano significa «cuatro puertas». Han existido seis generaciones del coche, cada una separada por un periodo de aproximadamente cinco años.",
        anio: 2013,
    },
    {
        imagen: "",
        nombre: "Toyota Yaris",
        descripcion: "El Toyota Yaris Cross es el nuevo B-SUV de Toyota, un modelo basado en la misma plataforma del Yaris que llega para competir en uno de los segmentos de mayor crecimiento de los últimos años, el de los crossover urbanos.",
        anio: 2021,
    },
    {
        imagen: "",
        nombre: "Audi A3 Sportback",
        descripcion: "El Audi A3 Sportback 2020, que también se vende con carrocería Sedán, es la cuarta generación del compacto premium. El mismo es un híbrido enchufable que permite disfrutar de la conducción como nunca. Con toda la autonomía que necesitamos y la potencia que buscamos, combina las ventajas de un motor de combustión y un motor eléctrico. ¿Lo mejor? Que une lo más gratificante de uno para escenificar todo lo bueno del otro",
        anio: 2015,
    },
    {
        imagen: "",
        nombre: "BMW Serie 2 Gran Coupé",
        descripcion: "El primer BMW Serie 2 Gran Coupé introduce una nueva forma de dominio en la clase compacta. Sobre todo la estética orientada al rendimiento deja claras sus ambiciones. En consonancia con las tecnologías de gama alta y funciones de dinamismo de conducción, el BMW Serie 2 Gran Coupé se distingue fácilmente de los demás vehículos y sigue su propio camino.",
        anio: 2019,
    },
    {
        imagen: "",
        nombre: "Kia Sorento",
        descripcion: "Se trata de un SUV que nació con todo lo aprendido de sus homólogos. De hecho, será bastante usual dar con él un automóvil con varias similitudes técnicas con su primo 100% eléctrico, el e-Niro. Con numerosas funcionalidades, un interior muy equipado y dimensiones bien pronunciadas, este entrega una potencia combinada de 230 CV. Sus rivales más próximos son el Lexus RX 450h L, el Skoda Kodiaq 2.0 TSI 4×4 y el BMW X3 xDrive30i.",
        anio: 2020,
    },
    {
        imagen: "",
        nombre: "Ford Ka",
        descripcion: "El Ford Ka es un automóvil de turismo del segmento A comercializado por el fabricante estadounidense Ford Motor Company para el mercado europeo desde 1996, y al año siguiente para el latinoamericano. El Ka es el modelo más pequeño de la línea europea de Ford, orientado al público más joven que precisa un vehículo para transportarse por la ciudad. Es un cinco plazas con motor delantero transversal y tracción delantera.",
        anio: 2015,
    },
    {
        imagen: "",
        nombre: "Jaguar XJ",
        descripcion: "El Lexus RZ 2023 es el primer paso de Lexus en su conversión a marca 100% eléctrica como parte del gran plan de Toyota. Se trata de un SUV medio de angulosas formas que tiene las mismas entrañas que el Toyota bZ4x y el Subaru Solterra",
        anio: 2022 ,
    },
    {
        imagen: "",
        nombre: "Maserati Quattroporte",
        descripcion: "El Maserati Quattroporte2​ es un automóvil sedán de lujo (segmento F), fabricado por Maserati en Italia. El nombre, traducido directamente del italiano significa «cuatro puertas». Han existido seis generaciones del coche, cada una separada por un periodo de aproximadamente cinco años.",
        anio: 2013,
    },
    {
        imagen: "",
        nombre: "Toyota Yaris",
        descripcion: "El Toyota Yaris Cross es el nuevo B-SUV de Toyota, un modelo basado en la misma plataforma del Yaris que llega para competir en uno de los segmentos de mayor crecimiento de los últimos años, el de los crossover urbanos.",
        anio: 2021,
    },
    {
        imagen: "",
        nombre: "Audi A3 Sportback",
        descripcion: "El Audi A3 Sportback 2020, que también se vende con carrocería Sedán, es la cuarta generación del compacto premium. El mismo es un híbrido enchufable que permite disfrutar de la conducción como nunca. Con toda la autonomía que necesitamos y la potencia que buscamos, combina las ventajas de un motor de combustión y un motor eléctrico. ¿Lo mejor? Que une lo más gratificante de uno para escenificar todo lo bueno del otro",
        anio: 2015,
    },
    {
        imagen: "",
        nombre: "BMW Serie 2 Gran Coupé",
        descripcion: "El primer BMW Serie 2 Gran Coupé introduce una nueva forma de dominio en la clase compacta. Sobre todo la estética orientada al rendimiento deja claras sus ambiciones. En consonancia con las tecnologías de gama alta y funciones de dinamismo de conducción, el BMW Serie 2 Gran Coupé se distingue fácilmente de los demás vehículos y sigue su propio camino.",
        anio: 2019,
    },
    {
        imagen: "",
        nombre: "Kia Sorento",
        descripcion: "Se trata de un SUV que nació con todo lo aprendido de sus homólogos. De hecho, será bastante usual dar con él un automóvil con varias similitudes técnicas con su primo 100% eléctrico, el e-Niro. Con numerosas funcionalidades, un interior muy equipado y dimensiones bien pronunciadas, este entrega una potencia combinada de 230 CV. Sus rivales más próximos son el Lexus RX 450h L, el Skoda Kodiaq 2.0 TSI 4×4 y el BMW X3 xDrive30i.",
        anio: 2020,
    },
    {
        imagen: "",
        nombre: "Ford Ka",
        descripcion: "El Ford Ka es un automóvil de turismo del segmento A comercializado por el fabricante estadounidense Ford Motor Company para el mercado europeo desde 1996, y al año siguiente para el latinoamericano. El Ka es el modelo más pequeño de la línea europea de Ford, orientado al público más joven que precisa un vehículo para transportarse por la ciudad. Es un cinco plazas con motor delantero transversal y tracción delantera.",
        anio: 2015,
    },
    {
        imagen: "",
        nombre: "Jaguar XJ",
        descripcion: "El Lexus RZ 2023 es el primer paso de Lexus en su conversión a marca 100% eléctrica como parte del gran plan de Toyota. Se trata de un SUV medio de angulosas formas que tiene las mismas entrañas que el Toyota bZ4x y el Subaru Solterra",
        anio: 2022 ,
    },
    {
        imagen: "",
        nombre: "Maserati Quattroporte",
        descripcion: "El Maserati Quattroporte2​ es un automóvil sedán de lujo (segmento F), fabricado por Maserati en Italia. El nombre, traducido directamente del italiano significa «cuatro puertas». Han existido seis generaciones del coche, cada una separada por un periodo de aproximadamente cinco años.",
        anio: 2013,
    },
],

    comentarios: [
        {
            nombre: "Martín",
            text: "Es un auto con un motor muy potente ideal para los viajes largos",
            image: "",
        },
        {
            nombre: "Juan",
            text: "Este auto tiene un andar muy cómodo y una estabilidad destacable",
            image: "",
        },
        {
            nombre: "María",
            text: "Tuve problemas con su batería pero más allá de eso no tuve mayores inconvenientes",
            image: "",
        },
        {
            nombre: "Sebastián",
            text: "Fue mi primer 0km y lo amo",
            image: "",
        },
        {
            nombre: "Camila",
            text: "Super económico tanto en repuestos como en gasolina",
            image: "",
        },
        {
            nombre: "Laura",
            text: "Tuve muchos problemas con este auto no lo volvería a elegir",
            image: "",
        },
        {
            nombre: "Gonzalo",
            text: "Es un auto espectacular, super amplio para toda la familia",
            image: "",
        },
        {
            nombre: "Hernán",
            text: "Aunque he leído unas críticas poco favorable que me parecen interesadas y hechas por la competencia, yo llevo quince meses con uno, he hecho 15.000 kilómetros y estoy encantado.",
            image: "",
        },
        {
            nombre: "Pedro",
            text: "Me gusta mucho a nivel estético aunque el consumo es levemente alto",
            image: "",
        },
        {
            nombre: "Laura",
            text: "Tuve muchos problemas con este auto no lo volvería a elegir",
            image: "",
        },
        {
            nombre: "Gonzalo",
            text: "Es un auto espectacular, super amplio para toda la familia",
            image: "",
        },
        {
            nombre: "Hernán",
            text: "Aunque he leído unas críticas poco favorable que me parecen interesadas y hechas por la competencia, yo llevo quince meses con uno, he hecho 15.000 kilómetros y estoy encantado.",
            image: "",
        },
        {
            nombre: "Pedro",
            text: "Me gusta mucho a nivel estético aunque el consumo es levemente alto",
            image: "",
        },
        {
            nombre: "Martín",
            text: "Es un auto con un motor muy potente ideal para los viajes largos",
            image: "",
        },
        {
            nombre: "Juan",
            text: "Este auto tiene un andar muy cómodo y una estabilidad destacable",
            image: "",
        },
        {
            nombre: "María",
            text: "Tuve problemas con su batería pero más allá de eso no tuve mayores inconvenientes",
            image: "",
        },
        {
            nombre: "Sebastián",
            text: "Fue mi primer 0km y lo amo",
            image: "",
        },
    ],
}

module.exports = data;