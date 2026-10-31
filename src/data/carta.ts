/**
 * Carta de octubre de Savia Lounge. Fuente: brief de Savia.
 * Cuando llegue public/carta-savia-octubre.pdf, completa las descripciones de
 * Mirada marcadas como pendientes copiándolas tal cual de la carta.
 */

export type Servicio = {
  nombre: string;
  precio: string;
  nota?: string;
  descripcion?: string;
  /** Solo en Mirada: true si falta copiar la descripción de la carta. */
  descripcionPendiente?: boolean;
};

export type Categoria = { nombre: string; nota?: string; servicios: Servicio[] };

export type Linea = {
  id: "nails" | "mirada";
  nombre: string;
  lema: string;
  desde: string;
  categorias: Categoria[];
};

const pendienteMirada = (nombre: string, precio: string, extra: Partial<Servicio> = {}): Servicio => ({
  nombre,
  precio,
  descripcionPendiente: !extra.descripcion,
  ...extra,
});

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
          pendienteMirada("Depilación de cejas", "S/ 15"),
          pendienteMirada("Visagismo de cejas", "S/ 30", {
            descripcion: "Diseño personalizado según la armonía de tu rostro.",
          }),
          pendienteMirada("Tinturación de cejas con Henna", "S/ 45", {
            nota: "Incluye visagismo y depilación",
            descripcionPendiente: true,
          }),
          pendienteMirada("Laminado de cejas", "S/ 55"),
          pendienteMirada("Laminado Savia", "S/ 90", {
            descripcion: "Laminado + tinturación para una mirada más intensa y definida.",
          }),
        ],
      },
      {
        nombre: "Pestañas",
        servicios: [
          pendienteMirada("Lifting de pestañas", "S/ 120"),
          pendienteMirada("Lifting Savia", "S/ 135", {
            descripcion: "Lifting + tinturación para una mirada más definida.",
          }),
        ],
      },
      {
        nombre: "Extensiones de pestañas",
        servicios: [
          pendienteMirada("Clásicas", "S/ 120"),
          pendienteMirada("Efecto rimel", "S/ 120"),
          pendienteMirada("Volumen Hawaiano", "S/ 120"),
          pendienteMirada("Volumen griego", "S/ 140"),
          pendienteMirada("Volumen egipcio", "S/ 160"),
          pendienteMirada("Volumen", "S/ 160"),
        ],
      },
      {
        nombre: "Adicionales",
        servicios: [
          pendienteMirada("Tinturación de pestañas", "S/ 25"),
          pendienteMirada("Remoción de tinte", "S/ 15"),
          pendienteMirada("Tratamiento nutritivo de pestañas", "S/ 20"),
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
