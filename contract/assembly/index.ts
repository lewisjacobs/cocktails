import { Cocktail, PartialCocktail, listedCocktails } from './model';
import { ContractPromiseBatch, context } from 'near-sdk-as';

export function createCocktail(cocktail: Cocktail): void {
    const storedCocktail = getCocktail(cocktail.id);

    if(storedCocktail !== null) {
        throw new Error("cocktail already exists, use updateCocktail instead");
    }

    if(context.sender != "lewisjacobs.testnet") {
        throw new Error("only the contract creator can create cocktails");
    }

    listedCocktails.set(cocktail.id, Cocktail.fromPayload(cocktail));
}

export function updateCocktail(cocktail: PartialCocktail): void {
    const storedCocktail = getCocktail(cocktail.id);

    if(storedCocktail == null)  {
        throw new Error("cocktail not found");
    }

    if(context.sender != storedCocktail.owner) {
        throw new Error("only the owner of a cocktail can update it");
    }

    if(cocktail.name != null) storedCocktail.name = cocktail.name!
    if(cocktail.ingredients != null) storedCocktail.ingredients = cocktail.ingredients!
    if(cocktail.decoration != null) storedCocktail.decoration = cocktail.decoration!
    if(cocktail.recipe != null) storedCocktail.recipe = cocktail.recipe!
    if(cocktail.image != null) storedCocktail.image = cocktail.image!

    listedCocktails.set(cocktail.id, storedCocktail);
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
    const storedCocktail = getCocktail(cocktailId);

    if(storedCocktail == null)  {
        throw new Error("cocktail not found");
    }

    if(context.sender != storedCocktail.owner) {
        throw new Error("only the owner of a cocktail can delete it");
    }

    listedCocktails.delete(cocktailId);
}