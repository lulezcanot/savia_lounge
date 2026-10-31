/** Muestra en la web los avisos de datos pendientes. Ponlo en false antes de publicar. */
export const MOSTRAR_PENDIENTES = true;

export const negocio = {
  nombre: "Savia Lounge",
  whatsappUrl:
    "https://wa.me/51936480684?text=Hola%20Savia%2C%20quiero%20reservar%20una%20cita",
  whatsappVisible: "+51 936 480 684",
  telefono: "+51936480684",
  instagramUrl: "https://www.instagram.com/savia_lounge/",
  instagramUsuario: "@savia_lounge",
  mapsUrl: "https://share.google/TrZiidBFm4ZIMAhHY",
  direccion: "Jirón Zepita 527A",
  direccionCorta: "Jr. Zepita 527A",
  zona: "Centro Cívico",
  ciudad: "Trujillo",
  horario: "Lunes a sábado, de 9:00 a. m. a 8:00 p. m.",
  horarioCorto: "Lun a sáb · 9:00 a. m. a 8:00 p. m.",
  titular: "Pequeños rituales que nutren tu belleza",
  subtitulo:
    "Uñas, cejas y pestañas en un lounge pensado para que te tomes tu tiempo, con una bebida en la mano.",
};

/**
 * Paseo (scroll world): los clips de public/photos/clips, en su orden.
 * Cada clip es el fondo de una parada; el scroll lo hace avanzar o retroceder.
 * Son renders 3D del interiorismo: la web muestra el aviso "Recreación 3D del espacio".
 *
 * Se usan las versiones de public/photos/clips/scroll: los mismos cortes, pero
 * con un fotograma clave cada 10 cuadros y sin cuadros B, para que retroceder
 * con el scroll no dé tirones (cada salto tarda ~9 ms en vez de ~85 ms).
 * Si cambias los clips, vuelve a codificarlos así:
 *
 *   ffmpeg -i clip.mp4 -an -c:v libx264 -preset slow -tune film -crf 22 \
 *     -g 10 -keyint_min 10 -bf 0 -pix_fmt yuv420p -movflags +faststart \
 *     public/photos/clips/scroll/clip-N.mp4
 *
 * y actualiza aquí su duración en segundos (ffprobe la da), que se usa para
 * calcular cuánto scroll ocupa cada parada.
 */
export const recorrido = {
  /** Pantallas de scroll por cada segundo de clip. Más alto = paseo más lento. */
  pantallasPorSegundo: 0.6,
  aviso: "Recreación 3D del espacio",
};

export type Parada = {
  id: string;
  /** Ruta del clip para scroll, sin extensión (se sirve el .mp4). */
  clip: string;
  duracion: number;
  lugar: string;
  titulo: string;
  texto: string;
  detalle?: string;
  pendiente?: string;
  /** Muestra el botón de reservar en la parada. */
  reservar?: boolean;
};

/**
 * Las cinco paradas, una por clip. La primera es el hero.
 * Los textos hablan solo de servicios de la carta: los clips 2 y 4 muestran
 * espacios del render (cabina y espejos) sin nombrar servicios que Savia no ofrece.
 */
export const paradas: Parada[] = [
  {
    id: "entrada",
    clip: "/photos/clips/scroll/clip-1",
    duracion: 6,
    lugar: "La entrada",
    titulo: negocio.titular,
    texto: negocio.subtitulo,
  },
  {
    id: "cabina",
    clip: "/photos/clips/scroll/clip-2",
    duracion: 2.966,
    lugar: "La cabina",
    titulo: "Una mirada natural y duradera",
    texto:
      "El laminado de cejas y el lifting de pestañas se hacen con productos italianos de alta gama, con resultados naturales, seguros y duraderos.",
    detalle: "Laminado Savia S/ 90 · Lifting Savia S/ 135",
  },
  {
    id: "pasillo",
    clip: "/photos/clips/scroll/clip-3",
    duracion: 5.033,
    lugar: "El pasillo",
    titulo: "Nails para cada estilo",
    texto:
      "Manicure Gel en color entero o francesa clásica, Rubber, Builder, Polygel, Manicure Rusa o Híbridas. Y si te hiciste un sistema, el retoque se realiza hasta 21 días después del servicio.",
    detalle: "Nails desde S/ 25 · Retoques hasta 21 días",
    pendiente: "Explicación breve de Savia sobre qué técnica conviene a cada clienta.",
  },
  {
    id: "sala",
    clip: "/photos/clips/scroll/clip-4",
    duracion: 3.833,
    lugar: "La sala",
    titulo: "Tómate tu tiempo",
    texto:
      "Mientras te atienden te servimos té, café o bebidas frías. Y con la tarjeta de lealtad, cada visita suma.",
    pendiente: "Confirmar si las bebidas van incluidas y cómo funciona la tarjeta de lealtad.",
  },
  {
    id: "savia",
    clip: "/photos/clips/scroll/clip-5",
    duracion: 3.5,
    lugar: "Savia Lounge",
    titulo: "Reserva tu ritual",
    texto: "Escríbenos por WhatsApp y elige tu día: de lunes a sábado, de 9:00 a. m. a 8:00 p. m.",
    detalle: `${negocio.direccionCorta}, ${negocio.zona}, ${negocio.ciudad}`,
    reservar: true,
  },
];

export const pasos = [
  {
    titulo: "Escríbenos por WhatsApp",
    texto: `Al ${negocio.whatsappVisible}. El mensaje ya va escrito: solo cuéntanos qué servicio quieres.`,
  },
  {
    titulo: "Elige tu día y tu hora",
    texto: "Atendemos de lunes a sábado, de 9:00 a. m. a 8:00 p. m.",
    pendiente: "Cómo se confirma la cita y si piden adelanto.",
  },
  {
    titulo: "Ven a Savia",
    texto: `${negocio.direccionCorta}, ${negocio.zona}, ${negocio.ciudad}. Ponte cómoda y pide tu bebida.`,
  },
];

export type Pregunta = { pregunta: string; respuesta?: string; pendiente?: string };

export const preguntas: Pregunta[] = [
  {
    pregunta: "¿Qué técnica de uñas me conviene: gel, rubber, builder, polygel o acrílico?",
    pendiente: "Explicación corta de Savia sobre cada técnica.",
  },
  {
    pregunta: "¿Cuánto dura el resultado?",
    respuesta: "Los retoques de Rubber, Builder, Acrílicas, Polygel, Softgel e Híbridas se realizan hasta 21 días después del servicio.",
    pendiente: "Cuánto dura cada técnica.",
  },
  {
    pregunta: "¿Son seguros los productos que se usan cerca de los ojos?",
    respuesta:
      "El laminado de cejas y el lifting de pestañas se hacen con productos italianos de alta gama, con resultados naturales, seguros y duraderos.",
  },
  {
    pregunta: "¿Qué incluyen el Laminado Savia y el Lifting Savia?",
    respuesta:
      "El Laminado Savia (S/ 90) combina laminado y tinturación para una mirada más intensa y definida. El Lifting Savia (S/ 135) combina lifting y tinturación para una mirada más definida.",
  },
  {
    pregunta: "¿Cuánto cuesta?",
    respuesta: "Nails desde S/ 25 y Mirada desde S/ 15. Tienes la carta completa con todos los precios en esta página.",
  },
  {
    pregunta: "¿Qué diferencia hay entre el retiro con limpieza y sin limpieza?",
    respuesta:
      "El retiro con limpieza incluye hidratación. Por ejemplo, el retiro de Gel cuesta S/ 10 sin limpieza y S/ 30 con limpieza e hidratación.",
  },
  {
    pregunta: "¿Las bebidas están incluidas?",
    pendiente: "Confirmar con Savia.",
  },
  {
    pregunta: "¿Cómo funciona la tarjeta de lealtad?",
    pendiente: "Confirmar con Savia.",
  },
  {
    pregunta: "¿Puedo ir sin cita?",
    pendiente: "Confirmar con Savia.",
  },
];
