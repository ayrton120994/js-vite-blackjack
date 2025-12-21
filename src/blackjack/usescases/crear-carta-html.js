/**
 *
 * @param {String} carta valor carta para añadir al HTML
 * @returns {HTMLImageElement} retorna una imagen HTML
 */
export const crearCartaHtml = (carta) => {
  if (!carta) {
    throw new Error("La carta es un argumento obligatorio");
  }

  // <img class="carta" src="assets/cartas/2C.png">
  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
  imgCarta.classList.add("carta");

  return imgCarta;
};
