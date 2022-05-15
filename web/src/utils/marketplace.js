import { v4 as uuid4 } from "uuid";
import { parseNearAmount } from "near-api-js/lib/utils/format";

const GAS = 100000000000000;

export function createCocktail(cocktail) {
  cocktail.id = uuid4();
  cocktail.price = parseNearAmount(cocktail.price + "");
  return window.contract.createCocktail({ cocktail });
}

export function getCocktails() {
  return window.contract.getCocktails();
}

export async function buyCocktail({ id, price }) {
  await window.contract.buyCocktail({ cocktailId: id }, GAS, price);
}

export function deleteCocktail({ id }) {
  return window.contract.deleteCocktail({ cocktailId: id });
}