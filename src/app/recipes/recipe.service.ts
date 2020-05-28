import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    private recipes : Recipe[] = [
        new Recipe( 'Cheese Cake', 
                    'A super-tasty - just awesome!', 
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR51PSS9iXfqVRfmRS2G1YzjWUsXNU9yZi3Dzh2rwwa4_m2dtG5&usqp=CAU',
                    [
                        new Ingredient('Strawberry', 5),
                        new Ingredient('Sweat Creme', 10)
                    ]),
        new Recipe( 'Chicken Mashroom Burger', 
                    'What else you need to say?', 
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTepIQOeZyFatM0KtvdCxWulsD_ETtu1947Yyq9V2Q8m-t6dA1v&usqp=CAU',
                    [
                        new Ingredient('Chicken', 12),
                        new Ingredient('Mashroom', 6)
                    ])
    ];

    constructor(private slService:ShoppingListService) {
    }

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index:number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
    
    addRecipe(recipe:Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice())
    }

    updateRecipe(index: number, newRecipe:Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice())
    }

    deleteRecipe(index:number) {
        this.recipes.splice(index, 1)
        this.recipesChanged.next(this.recipes.slice())
    }

    setRecipes(recipes:Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
}