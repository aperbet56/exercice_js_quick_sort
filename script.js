// Créez un algorithme de tri rapide (quick sort)

const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array[0];
  let leftArray = [];
  let rightArray = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      leftArray.push(array[i]);
    } else {
      rightArray.push(array[i]);
    }
  }

  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
};

console.log(quickSort([3, 7, 2, 5, 1, 4, 6, 8])); // [1,2,3,4,5,6,7,8]
console.log(
  quickSort([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ])
); // [ 1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643]

// EXPLICATION DU CODE JAVASCRIPT

/**
 * Etape 1 : Création de la fonction quickSort ayant comme paramètre un tableau.
 * Etape 2 : Choisir un élément pivot dans le tableau.
 * Etape 3 : Diviser le tableau en deux sous-tableaux, l'un contenant des éléments plus petits que le pivot et l'autre contenant des éléments plus grands que le pivot.
 * Etape 4 : Appliquer de manière récursive l’algorithme de tri rapide aux deux sous-tableaux jusqu’à ce que le tableau entier soit trié.
 */
