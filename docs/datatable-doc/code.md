---
sidebar_position: 2
---

# Le Code

## Le code du composant `DataTable`

### Le modèle

La seule propriété à passer au composant est le modèle `model` (voir sa description dans la partie [Utilisation](./utilisation)):

```html
<DataTable model="{dataModel}" />
```

Le champ `headers` du modèle sert à la fois à définir les entêtes de chaque colonne de la table et le type d'_inputs_ à utiliser dans
la modale d'édition/ajout d'une nouvelle entrée. Cependant plusieurs entêtes de colonne peuvent être regroupées dans un header de type `fieldset`. Or le modèle à utiliser dans le code doit être un tableau des entêtes contigües telles qu'elles apparaissent dans la table : il faut donc mettre le modèle passé en propriété 'à plat' de façon à ce que les entêtes d'un fieldset soit intégrées de façon contigüe. Cette opération sera prise en charge dans le hook `useEffect()` exécuté uniquement lorsque le composant est monté. Ce modèle `flatModel` mis à plat sera passé en `state` de manière à ce que sa valeur persiste lors des nouveaux rendus du composant.

### Le state

Toutes les valeurs considérées comme du state seront définies par le hook useState().

### Quelles données prendre en compte ?

On distinguera 3 types de données :

- Les données `data` reçues par le modèle ou mises à jour par une édition/ajout d'une nouvelle ligne.
- Les données `dataToUse` qui sont les données utilisées par l'affichage. Selon la situation, elles peuvent correspondre
  à une copie de `data` ou être le résultat d'une recherche (sous-ensemble de `data`) ou encore les `data` triées.
- Les données `currentData`, sous-ensemble de `dataToUse` ( `dataToUse` filtrées) qui correspondent aux seules entrées visibles sur la page.

### Les autres variables `state` ?

Il est clair que la `DataTable` devra être mise à jour lorsque l'une valeurs suivantes subira une modification :

- Les données `dataToUse` reçues par le modèle ou mises à jour par une édition/ajout d'une nouvelle ligne.
- Le numéro (_index_ à partir de 0) `sortBy` de la colonne sur laquelle se fait un tri. (`null` si aucun tri)
- Le type de tri `descending` ayant pour valeur _false_ pour un tri croissant et _true_ pour un tri décroissant.
- Le nombre `itemsPerPage` d'entrées par page. Ce nombre pouvant éventuellement être modifié par le `Select` de la table.
- La page `page` actuellement affichée contenant un nombre `itemsPerPage` d'entrées.

### L'affichage

L'affichage a besoin de connaître les données `currentData` qui sont les entrées de la page à afficher. Ces données sont mises à jour dans un hook `useEffect()` ayant dans son tableau de dépendances les 5 states mentionnés ci-dessus.
