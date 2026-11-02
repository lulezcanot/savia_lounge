/**
 * Carta de octubre de Savia Lounge. Fuente: public/carta-savia-octubre.pdf
 * (precios y descripciones copiados tal cual de la carta impresa).
 */

export type Servicio = {
  nombre: string;
  precio: string;
  nota?: string;
  descripcion?: string;
};

export type Categoria = { nombre: string; nota?: string; servicios: Servicio[] };

export type Linea = {
  id: "nails" | "mirada";
  nombre: string;
  lema: string;
  desde: string;
  categorias: Categoria[];
};

export const carta: Linea[] = [
  {
    id: "nails",
    nombre: "Nails",
    lema: "Manos que reflejan tu esencia",
    desde: "Desde S/ 25",
    categorias: [
      {
        nombre: "Manicure",
        servicios: [
          { nombre: "Limpieza Tradicional", precio: "S/ 25" },
          { nombre: "Manicure Tradicional", precio: "S/ 30" },
          { nombre: "Manicure Tradicional OPI", precio: "S/ 35" },
          { nombre: "Manicure Gel", precio: "S/ 45", nota: "Color entero o francesa clásica" },
          { nombre: "Manicure Rusa", precio: "S/ 65" },
          { nombre: "Manicure Rubber", precio: "S/ 60", nota: "Hasta N.º 2, color entero o francesa clásica" },
          { nombre: "Builder", precio: "S/ 75" },
          { nombre: "Baño Acrílico", precio: "S/ 70" },
          { nombre: "Polygel", precio: "S/ 70" },
          { nombre: "Softgel", precio: "S/ 80" },
        ],
      },
      {
        nombre: "Sistemas de alargamiento",
        servicios: [
          { nombre: "Acrílico con Tip", precio: "S/ 80" },
          { nombre: "Acrílico Esculpida", precio: "S/ 110", nota: "Hasta N.º 2" },
          { nombre: "Polygel con Tip", precio: "S/ 85" },
          { nombre: "Polygel Esculpida", precio: "S/ 100", nota: "Hasta N.º 2" },
          { nombre: "Baby Color", precio: "S/ 90" },
          { nombre: "Baby Boomer", precio: "S/ 90" },
          { nombre: "Híbridas", precio: "S/ 100" },
        ],
      },
      {
        nombre: "Pedicure",
        servicios: [
          { nombre: "Limpieza Tradicional", precio: "S/ 35" },
          { nombre: "Pedicure Tradicional", precio: "S/ 40" },
          { nombre: "Pedicure Tradicional OPI", precio: "S/ 45" },
          { nombre: "Pedicure Gel", precio: "S/ 55" },
          { nombre: "Pedicure Rusa", precio: "S/ 70" },
        ],
      },
      {
        nombre: "Retoques",
        nota: "Servicio realizado hasta 21 días",
        servicios: [
          { nombre: "Rubber", precio: "S/ 60" },
          { nombre: "Builder", precio: "S/ 75" },
          { nombre: "Acrílicas", precio: "S/ 80" },
          { nombre: "Acrílicas Esculpidas", precio: "S/ 100" },
          { nombre: "Polygel con Tip", precio: "S/ 80" },
          { nombre: "Polygel Esculpidas", precio: "S/ 95" },
          { nombre: "Softgel", precio: "S/ 75" },
          { nombre: "Híbridas", precio: "S/ 90" },
        ],
      },
      {
        nombre: "Retiros sin limpieza",
        servicios: [
          { nombre: "Gel", precio: "S/ 10" },
          { nombre: "Rubber", precio: "S/ 15" },
          { nombre: "Builder", precio: "S/ 25" },
          { nombre: "Acrílicas", precio: "S/ 25" },
          { nombre: "Polygel", precio: "S/ 25" },
        ],
      },
      {
        nombre: "Retiros con limpieza e hidratación",
        servicios: [
          { nombre: "Gel", precio: "S/ 30" },
          { nombre: "Rubber", precio: "S/ 35" },
          { nombre: "Builder", precio: "S/ 40" },
          { nombre: "Acrílicas", precio: "S/ 40" },
          { nombre: "Polygel", precio: "S/ 40" },
        ],
      },
      {
        nombre: "Diseños",
        servicios: [
          { nombre: "Simple", precio: "S/ 10" },
          { nombre: "Complejo", precio: "S/ 20" },
          { nombre: "Sofisticado", precio: "S/ 30" },
        ],
      },
      {
        nombre: "Efectos",
        servicios: [
          { nombre: "Francesa sonrisa", precio: "S/ 10" },
          { nombre: "Ojo de Gato", precio: "S/ 15" },
          { nombre: "Relieve", precio: "S/ 20" },
          { nombre: "Flores en Relieve", precio: "S/ 10 a S/ 20", nota: "Según tamaño" },
          { nombre: "Aura", precio: "S/ 10" },
          { nombre: "Clase", precio: "S/ 10" },
          { nombre: "Espejo", precio: "S/ 10" },
          { nombre: "Pedrería", precio: "Desde S/ 10", nota: "Según cantidad y tamaño" },
        ],
      },
      {
        nombre: "Spa",
        servicios: [
          { nombre: "Burbujas efervescentes", precio: "S/ 5" },
          { nombre: "Jelly", precio: "S/ 15" },
          { nombre: "Mascarilla de manos", precio: "S/ 10" },
        ],
      },
    ],
  },
  {
    id: "mirada",
    nombre: "Mirada",
    lema: "Cejas y pestañas en equilibrio con tu belleza",
    desde: "Desde S/ 15",
    categorias: [
      {
        nombre: "Cejas",
        servicios: [
          { nombre: "Depilación de cejas", precio: "S/ 15", descripcion: "Definición y limpieza de la zona." },
          {
            nombre: "Visagismo de cejas",
            precio: "S/ 30",
            descripcion: "Diseño personalizado según la armonía de tu rostro.",
          },
          { nombre: "Tinturación de cejas con Henna", precio: "S/ 45", descripcion: "Incluye visagismo y depilación." },
          {
            nombre: "Laminado de cejas",
            precio: "S/ 55",
            descripcion: "Ordena y direcciona el vello para una mirada más definida.",
          },
          {
            nombre: "Laminado Savia",
            precio: "S/ 90",
            descripcion: "Laminado + tinturación para una mirada más intensa y definida.",
          },
        ],
      },
      {
        nombre: "Pestañas",
        servicios: [
          {
            nombre: "Lifting de pestañas",
            precio: "S/ 120",
            descripcion: "Realza la curvatura natural de tus pestañas.",
          },
          {
            nombre: "Lifting Savia",
            precio: "S/ 135",
            descripcion: "Lifting + tinturación para una mirada más definida.",
          },
        ],
      },
      {
        nombre: "Extensiones de pestañas",
        servicios: [
          { nombre: "Clásicas", precio: "S/ 120", descripcion: "Un acabado natural, elegante y delicadamente definido." },
          {
            nombre: "Efecto rimel",
            precio: "S/ 120",
            descripcion: "Mayor intensidad para una mirada naturalmente maquillada.",
          },
          {
            nombre: "Volumen Hawaiano",
            precio: "S/ 120",
            descripcion: "Volumen ligero y textura suave para una mirada fresca.",
          },
          {
            nombre: "Volumen griego",
            precio: "S/ 140",
            descripcion: "Mayor densidad y un efecto intenso con un acabado sofisticado.",
          },
          {
            nombre: "Volumen egipcio",
            precio: "S/ 160",
            descripcion: "Intensidad y volumen para una mirada más profunda.",
          },
          { nombre: "Volumen", precio: "S/ 160", descripcion: "Densidad a medida según el diseño y volumen que desees." },
        ],
      },
      {
        nombre: "Adicionales",
        servicios: [
          {
            nombre: "Tinturación de pestañas",
            precio: "S/ 25",
            descripcion: "Intensifica el tono para una mirada más definida.",
          },
          {
            nombre: "Remoción de tinte",
            precio: "S/ 15",
            descripcion: "Retiro delicado de pigmento en cejas o pestañas.",
          },
          {
            nombre: "Tratamiento nutritivo de pestañas",
            precio: "S/ 20",
            descripcion: "Un cuidado nutritivo para mantenerlas sanas y saludables.",
          },
        ],
      },
    ],
  },
];

/** Servicios destacados, en el orden del brief. */
export const destacados = [
  { linea: "Nails", nombre: "Manicure Rusa", precio: "S/ 65" },
  { linea: "Nails", nombre: "Polygel Esculpida", precio: "S/ 100", nota: "Hasta N.º 2" },
  {
    linea: "Mirada",
    nombre: "Laminado Savia",
    precio: "S/ 90",
    descripcion: "Laminado + tinturación para una mirada más intensa y definida.",
  },
  {
    linea: "Mirada",
    nombre: "Lifting Savia",
    precio: "S/ 135",
    descripcion: "Lifting + tinturación para una mirada más definida.",
  },
  {
    linea: "Mirada",
    nombre: "Visagismo de cejas",
    precio: "S/ 30",
    descripcion: "Diseño personalizado según la armonía de tu rostro.",
  },
];
