import _ from "underscore";

// Esta función crea un nuevo deck
/**
 * Esta función crear un nuevo deck
 * @param {Array<string>} tiposCarta Ejemplo: ["C", "D", "H", "S"]
 * @param {Array<string>} tiposEspeciales Ejemplo: ["A", "J", "Q", "K"]
 * @returns {Array<string>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposCarta, tiposEspeciales) => {
  if (!tiposCarta || tiposCarta.length === 0) {
    throw new Error("tiposCarta es obligatorio como un arreglo de string");
  }
  if (!tiposEspeciales || tiposEspeciales.length === 0) {
    throw new Error("tiposEspeciales es obligatorio como un arreglo de string");
  }

  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  // console.log( deck );
  deck = _.shuffle(deck);
  // console.log( deck );
  return deck;
};

// export default crearDeck;
