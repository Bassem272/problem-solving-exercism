/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(remainingTime = 'You forgot to set the timer.') {
  
  return remainingTime === 0 ? "Lasagna is done.": typeof remainingTime === 'string'? remainingTime: 'Not done, please wait.'; 
}

export function preparationTime (layers, avgTime=2) {
  return layers.length * avgTime; 
}

export function quantities(layers) {
  let qunt = {
    noodles: 0,
    sauce: 0
  };

  for (let layer of layers) {
    if (layer === 'noodles') {
      qunt.noodles += 50;
    } else if (layer === 'sauce') {
      qunt.sauce += 0.2;
    }
  }

  return qunt;
}

export function addSecretIngredient (friendsList, myList) {
  const lastItem = [...friendsList].pop(); 
  const length = myList.push(lastItem); 
  
}

export function scaleRecipe (recipe, num) {
    const scaledRecipe = Object.fromEntries(Object.entries(recipe).map(([key, value]) => [key, (value/2) * num]))
  return scaledRecipe; 
}