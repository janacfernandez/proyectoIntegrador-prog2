-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-06-2022 a las 00:23:54
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `top_wheels_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comments`
--

CREATE TABLE `comments` (
  `id` int(10) UNSIGNED NOT NULL,
  `comentarios` varchar(500) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `deletedAt` date DEFAULT NULL,
  `userId` int(10) UNSIGNED DEFAULT NULL,
  `productId` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comments`
--

INSERT INTO `comments` (`id`, `comentarios`, `createdAt`, `updatedAt`, `deletedAt`, `userId`, `productId`) VALUES
(1, 'Recomiendo esta camioneta SUV por su alto nivel de confort ', '2022-06-22', '2022-06-22', NULL, 5, 4),
(2, 'excelente deportivo ', '2022-06-22', '2022-06-22', NULL, 5, 7),
(3, 'Auto no tan conocido, pero ha superado ampliamente mis expectativas. Lo recomiendo!', '2022-06-22', '2022-06-22', NULL, 2, 6),
(4, 'Por el precio deja mucho que desear', '2022-06-22', '2022-06-22', NULL, 2, 3),
(5, 'auto económico y funcional ', '2022-06-22', '2022-06-22', NULL, 4, 5),
(6, 'recomiendo ampliamente este sportback', '2022-06-22', '2022-06-22', NULL, 4, 2),
(7, 'concuerdo! ', '2022-06-22', '2022-06-22', NULL, 4, 7),
(8, '10/10 la comodidad ', '2022-06-22', '2022-06-22', NULL, 3, 8),
(9, 'no estoy de acuerdo, es un excelente vehículo', '2022-06-22', '2022-06-22', NULL, 3, 3),
(10, 'totalmente! súper cómodo para mamás como yo, que tienen que ir de un lugar a otro con sus hijo', '2022-06-22', '2022-06-22', NULL, 3, 2),
(11, 'muy buena relación precio-calidad. Es uno de los autos más económicos del mercado y no se queda atrás en cuanto a comodidades', '2022-06-22', '2022-06-22', NULL, 1, 1),
(12, 'hay mejores opciones en cuanto a autos de la misma categoría, no se dejen engañar!', '2022-06-22', '2022-06-22', NULL, 1, 4),
(13, 'muy buen auto', '2022-06-22', '2022-06-22', NULL, 1, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `followers`
--

CREATE TABLE `followers` (
  `id` int(10) UNSIGNED NOT NULL,
  `seguidor` int(10) UNSIGNED DEFAULT NULL,
  `seguido` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `followers`
--

INSERT INTO `followers` (`id`, `seguidor`, `seguido`) VALUES
(1, 1, 2),
(2, 1, 3),
(3, 2, 4),
(4, 3, 5),
(5, 3, 2),
(6, 4, 1),
(7, 4, 2),
(8, 4, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `img` varchar(500) DEFAULT 'defaultImage.jpg',
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(1000) DEFAULT NULL,
  `anio` int(11) DEFAULT NULL,
  `comentarios` varchar(500) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `deletedAt` date DEFAULT NULL,
  `userId` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `img`, `nombre`, `descripcion`, `anio`, `comentarios`, `createdAt`, `updatedAt`, `deletedAt`, `userId`) VALUES
(1, 'imgProductAdd-1655934711902.jpg', 'Toyota Yaris', 'El Toyota Yaris Cross es el nuevo B-SUV de Toyota, un modelo basado en la misma plataforma del Yaris que llega para competir en uno de los segmentos de mayor crecimiento de los últimos años, el de los crossover urbanos.', 2021, NULL, '2022-06-22', '2022-06-22', NULL, 2),
(2, 'imgProductAdd-1655934762520.jpg', 'Audi A3 ', 'El Audi A3 Sportback 2020, que también se vende con carrocería Sedán, es la cuarta generación del compacto premium. El mismo es un híbrido enchufable que permite disfrutar de la conducción como nunca. Con toda la autonomía que necesitamos y la potencia que buscamos, combina las ventajas de un motor de combustión y un motor eléctrico. ¿Lo mejor? Que une lo más gratificante de uno para escenificar todo lo bueno del otro', 2015, NULL, '2022-06-22', '2022-06-22', NULL, 1),
(3, 'imgProductAdd-1655934813053.jpg', 'BMW Serie 2', 'El primer BMW Serie 2 Gran Coupé introduce una nueva forma de dominio en la clase compacta. Sobre todo la estética orientada al rendimiento deja claras sus ambiciones. En consonancia con las tecnologías de gama alta y funciones de dinamismo de conducción, el BMW Serie 2 Gran Coupé se distingue fácilmente de los demás vehículos y sigue su propio camino.', 2019, NULL, '2022-06-22', '2022-06-22', NULL, 1),
(4, 'imgProductAdd-1655934868547.jpg', 'Kia Sorento', 'Se trata de un SUV que nació con todo lo aprendido de sus homólogos. De hecho, será bastante usual dar con él un automóvil con varias similitudes técnicas con su primo 100% eléctrico, el e-Niro. Con numerosas funcionalidades, un interior muy equipado y dimensiones bien pronunciadas, este entrega una potencia combinada de 230 CV. Sus rivales más próximos son el Lexus RX 450h L, el Skoda Kodiaq 2.0 TSI 4×4 y el BMW X3 xDrive30i.', 2015, NULL, '2022-06-22', '2022-06-22', NULL, 3),
(5, 'imgProductAdd-1655934897953.jpg', 'Ford Ka', 'El Ford Ka es un automóvil de turismo del segmento A comercializado por el fabricante estadounidense Ford Motor Company para el mercado europeo desde 1996, y al año siguiente para el latinoamericano. El Ka es el modelo más pequeño de la línea europea de Ford, orientado al público más joven que precisa un vehículo para transportarse por la ciudad. Es un cinco plazas con motor delantero transversal y tracción delantera', 2020, NULL, '2022-06-22', '2022-06-22', NULL, 3),
(6, 'imgProductEdit-1655935101192.jpg', 'Lexus RZ', 'El Lexus RZ 2022 es el primer paso de Lexus en su conversión a marca 100% eléctrica como parte del gran plan de Toyota. Se trata de un SUV medio de angulosas formas que tiene las mismas entrañas que el Toyota bZ4x y el Subaru Solterra', 2022, NULL, '2022-06-22', '2022-06-22', NULL, 4),
(7, 'imgProductAdd-1655935170049.jpg', 'Maserati Quattroporte', 'El Maserati Quattroporte2​ es un automóvil sedán de lujo (segmento F), fabricado por Maserati en Italia. El nombre, traducido directamente del italiano significa «cuatro puertas». Han existido seis generaciones del coche, cada una separada por un periodo de aproximadamente cinco años', 2013, NULL, '2022-06-22', '2022-06-22', NULL, 5),
(8, 'imgProductAdd-1655935292245.jpg', 'Jaguar XJ', 'El Jaguar XJ es un automóvil de turismo del segmento F que se vende bajo la marca de lujo británica Jaguar. El XJ se puso a la venta en 1968 y ha sido el buque insignia de Jaguar durante la mayor parte de su vida comercial, que continúa hasta el día de hoy.', 2021, NULL, '2022-06-22', '2022-06-22', NULL, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `usuario` varchar(100) NOT NULL,
  `contrasenia` varchar(100) NOT NULL,
  `fDeNac` date DEFAULT NULL,
  `dni` int(11) DEFAULT NULL,
  `foto` varchar(500) DEFAULT 'defaultImage.jpg',
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `deletedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `nombre`, `apellido`, `email`, `usuario`, `contrasenia`, `fDeNac`, `dni`, `foto`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Alejandro', 'Gutierrez', 'agutierrez@gmail.com', 'agutierrez', '$2a$10$7seOYsaZNrx/Ryq90OV6tu5Tfmig3qL3Y2TTSrZC9TcAcUtgFFJWy', '1998-10-22', 18227465, 'imgRegister-1655934420611.jpeg', '2022-06-22', '2022-06-22', NULL),
(2, 'Pedro', 'Lanus', 'planus@gmail.com', 'planus', '$2a$10$yHOFq2ZYzH6N/nKTxC0che3.yT4PnpJX3lu/0HUrnLm0DgamqP3Ei', '1990-12-18', 44553999, 'imgRegister-1655934466361.jpeg', '2022-06-22', '2022-06-22', NULL),
(3, 'Juana', 'Rodriguez', 'jrodriguez@gmail.com', 'jrodriguez', '$2a$10$iPabOMXFZKtLB1NNGHk/6.aBoSHlnbmDGtc/PHyF.bAsh./qdZ.hC', '0000-00-00', 4719756, 'imgRegister-1655934499247.png', '2022-06-22', '2022-06-22', NULL),
(4, 'Manuela', 'Lezcano', 'mlezcano@hotmail.com', 'mlezcano', '$2a$10$2vwBcthz6KGvph.sLJLxpeFbcGEzIOyc6O.Nr1tRqlftZWuxBkL4m', '1999-02-06', 54609876, 'imgRegister-1655934543831.jpg', '2022-06-22', '2022-06-22', NULL),
(5, 'Martin', 'Perez', 'mperez@yahoo.com', 'mperez', '$2a$10$e/5/KLQyLYpIqT.9wRcxk.SCaPMbqg88rEkb6B9T9/z2PMSbjDde2', '1980-05-08', 567890, 'imgRegister-1655934635957.jpg', '2022-06-22', '2022-06-22', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `productId` (`productId`);

--
-- Indices de la tabla `followers`
--
ALTER TABLE `followers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `seguidor` (`seguidor`),
  ADD KEY `seguido` (`seguido`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `followers`
--
ALTER TABLE `followers`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`);

--
-- Filtros para la tabla `followers`
--
ALTER TABLE `followers`
  ADD CONSTRAINT `followers_ibfk_1` FOREIGN KEY (`seguidor`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `followers_ibfk_2` FOREIGN KEY (`seguido`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
