import { pedirCarta, valorCarta, crearCartaHtml } from "./";

/**
 * Funcion para realizar el turno de la computadora
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento Html para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento Html para mostrar las cartas
 * @param {Array<String>} deck arreglo de carta por defecto
 */
export const turnoComputadora = (
  puntosMinimos,
  puntosHTML,
  divCartasComputadora,
  deck = []
) => {
  if (!puntosMinimos) {
    throw new Error("puntosMinimos son necesarios");
  }

  if (!puntosHTML) {
    throw new Error("puntosHTML es necesario");
  }

  if (!deck) {
    throw new Error("deck es necesario");
  }

  let puntosComputadora = 0;

  do {
    const carta = pedirCarta(deck);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML.innerText = puntosComputadora;

    const imgCarta = crearCartaHtml(carta);
    divCartasComputadora.append(imgCarta);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("Computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador Gana");
    } else {
      alert("Computadora Gana");
    }
  }, 100);
};
