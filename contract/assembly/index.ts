import { Cocktail, listedCocktails } from './model';
import { ContractPromiseBatch, context } from 'near-sdk-as';

export function setCocktail(cocktail: Cocktail): void {
    listedCocktails.set(cocktail.id, Cocktail.fromPayload(cocktail));
}

export function getCocktail(id: string): Cocktail | null {
    return listedCocktails.get(id);
}

export function getCocktails(): Cocktail[] {
    return listedCocktails.values();
}

export function buyCocktail(cocktailId: string): void {
    const cocktail = getCocktail(cocktailId);
    if (cocktail == null) {
        throw new Error("cocktail not found");
    }
    if (cocktail.price.toString() != context.attachedDeposit.toString()) {
        throw new Error("attached deposit should equal to the cocktail's price");
    }
    ContractPromiseBatch.create(cocktail.owner).transfer(context.attachedDeposit);
    cocktail.incrementSoldAmount();
    listedCocktails.set(cocktail.id, cocktail);
}

export function deleteCocktail(cocktailId: string): void {
    listedCocktails.delete(cocktailId);
}