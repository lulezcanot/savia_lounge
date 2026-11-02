import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Gesto de scroll (rueda o dedo) tal como lo recibe Lenis. */
export type Gesto = { deltaX: number; deltaY: number; event: WheelEvent | TouchEvent };

// Una sección puede quedarse con los gestos (el paseo por pasos). Si devuelve false,
// Lenis no desplaza la página con ese gesto.
let interceptor: ((gesto: Gesto) => boolean) | null = null;

export function interceptarGestos(fn: (gesto: Gesto) => boolean) {
  interceptor = fn;
}

/** Scroll suave con Lenis, sincronizado con ScrollTrigger. Desactivado si se pide menos movimiento. */
export const lenis = reducido
  ? null
  : new Lenis({
      anchors: true,
      lerp: 0.2,
      virtualScroll: (gesto) => (interceptor && !lenis?.isStopped ? interceptor(gesto as Gesto) : true),
    });

if (lenis) {
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((tiempo) => lenis.raf(tiempo * 1000));
  gsap.ticker.lagSmoothing(0);
}

// Varias partes pueden bloquear el scroll de la página (por ahora, el menú móvil).
// Solo se libera cuando ninguna lo necesita.
const motivos = new Set<string>();

export function bloquearScroll(motivo: string, bloquear: boolean) {
  if (bloquear) motivos.add(motivo);
  else motivos.delete(motivo);
  if (motivos.size > 0) lenis?.stop();
  else lenis?.start();
}
