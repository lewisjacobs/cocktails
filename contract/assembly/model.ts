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
    made: u32;
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
    public incrementMadeAmount(): void {
        this.made = this.made + 1;
    }
}

export const listedCocktails = new PersistentUnorderedMap<string, Cocktail>("LISTED_COCKTAILS");