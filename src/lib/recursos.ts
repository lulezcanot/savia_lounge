import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const publico = (ruta: string) => join(process.cwd(), "public", ruta.replace(/^\//, ""));

/** true si el archivo existe en public/. Se evalúa al compilar. */
export const existe = (ruta: string) => existsSync(publico(ruta));

/** Contenido del logo SVG (pintable con currentColor) o null si aún no está. */
export function logoSvg(): string | null {
  const ruta = publico("logo-savia.svg");
  if (!existsSync(ruta)) return null;
  return readFileSync(ruta, "utf8").replace(/<\?xml[^>]*>/, "").trim();
}

export const recursos = {
  carta: "/carta-savia-octubre.pdf",
  favicon: "/favicon-savia.svg",
};
