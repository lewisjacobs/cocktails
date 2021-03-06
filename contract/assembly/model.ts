import { PersistentUnorderedMap, u128, context } from "near-sdk-as";

@nearBindgen
export class Cocktail {
    id: string;
    name: string;
    ingredients: string;
    decoration: string;
    recipe: string;
    image: string;
    price: u128;
    owner: string;
    sold: u32;
    public static fromPayload(payload: Cocktail): Cocktail {
        const cocktail = new Cocktail();
        cocktail.id = payload.id;
        cocktail.name = payload.name;
        cocktail.ingredients = payload.ingredients;
        cocktail.decoration = payload.decoration;
        cocktail.recipe = payload.recipe;
        cocktail.image = payload.image;
        cocktail.price = payload.price;
        cocktail.owner = context.sender;
        return cocktail;
    }
    public incrementSoldAmount(): void {
        this.sold = this.sold + 1;
    }
}

@nearBindgen
export class PartialCocktail {
    id: string;
    name: string|null;
    ingredients: string|null;
    decoration: string|null;
    recipe: string|null;
    image: string|null;
}

export const listedCocktails = new PersistentUnorderedMap<string, Cocktail>("LISTED_COCKTAILS");