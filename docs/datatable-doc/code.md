---
sidebar_position: 2
---

# Le code du composant `DataTable`

## Les propriétés.

Pour rappel, les trois propriétés du composant Datatable sont :

- `model` [obligatoire] le modèle comme décrit précédemment.
- `data` [facultatif- `[]` par défaut] : les données initiales à afficher sous forme d'un array d'objets représentant chaque entrée de la Datatable et dont chaque champ correspond au champ `field` des `headers` du modèle.
- `externalForm` [facultatif - `false` par défaut]. Si cette propriété est présente, alors la Datatable peut gérer l'édition d'une nouvelle entrée par un formulaire qui n'est pas généré automatiquement par la Datatable. (Ce qui est déconseillé.) Si cette propriété n'est pas présente, c'est donc la Datatable qui peut alors générer automatiquement le formulaire d'édition d'une nouvelle entrée.

## Le modèle

Voir la description de la propriété `model` représentant le modèle de la table dans la partie [Utilisation](./utilisation) :

```html
<DataTable model="{dataModel}" data="{[]}" />
```

Le champ `headers` du modèle sert à la fois à définir les entêtes de chaque colonne de la table et le type d'_inputs_ à utiliser dans
la modale d'édition/ajout d'une nouvelle entrée. Cependant plusieurs entêtes de colonne peuvent être regroupées dans un header de type `fieldset`. Or le modèle à utiliser dans le code doit être un tableau des entêtes contigües telles qu'elles apparaissent dans la table : il faut donc mettre le modèle passé en propriété 'à plat' de façon à ce que les entêtes d'un fieldset soit intégrées de façon contigüe dans un nouveau champ du modèle nommé `flatHeaders`. Pour obtenir un modèle mis à jour avec ce nouveau champ on utilisera la fonction `getModel()` définie dans le fichier `Utils.js`

Le rendu de la Datatable ayant besoin de connaître le champ `flatHeaders` et pour éviter le calcul de la valeur de ce champ à chaque rendu, on passera à la Datatable en propriété `model` le modèle déjà mis à jour par la fonction getModel()

## Le state

Toutes les valeurs considérées comme du state seront définies par le hook useState().

### Quelles données prendre en compte ?

On distinguera 3 types de données :

- Les données `data` passées par la propriété `data` (renommée `initial_data`) : elles représentent à chaque instant _la totalité_ des données connues et gérées par la table.<br/>En cas d'édition d'une nouvelle entrée, `data` sera mis à jour par le state `data` de la Datatable elle-même si celle-ci gère elle même le formulaire d'édition d'une nouvelle entrée. Sinon, c'est l'application qui gère le formulaire qui devra gérer (mettre à jour) le state passé en propriété à la table. (C'est le cas de l'application HRnet)
- Les données `dataToUse` qui sont les données utilisées par l'affichage. Selon la situation, elles peuvent correspondre
  à une copie de `data` ou être le résultat d'une recherche (sous-ensemble de `data`) ou encore les `data` triées.
- Les données `currentData`, sous-ensemble de `dataToUse` (`dataToUse` filtrées) qui correspondent aux seules entrées visibles sur la page courante.

Il est clair que la `DataTable` devra être mise à jour (subir un nouveau rendu) lorsque l'une des valeurs suivantes définies commet `state` subira une modification :

- Les données `dataToUse` reçues par le modèle ou mises à jour par une édition/ajout d'une nouvelle ligne.
- Le numéro (_index_ à partir de 0) `sortBy` de la colonne sur laquelle se fait un tri. (`null` si aucun tri)
- Le type de tri `descending` ayant pour valeur _false_ pour un tri croissant et _true_ pour un tri décroissant.
- Le nombre `itemsPerPage` d'entrées par page. Ce nombre pouvant éventuellement être modifié par le `Select` de la table.
- La page `page` actuellement affichée contenant un nombre `itemsPerPage` d'entrées.

### L'affichage

L'affichage a besoin de connaître les données `currentData` qui sont les entrées de la page à afficher. Ces données sont mises à jour dans un hook `useEffect()` ayant dans son tableau de dépendances les 5 states mentionnés ci-dessus.

### La recherche

Le state `searching` est une valeur _boolean_ qui indique si le champ de recherche est actif. (Une recherche est en cours, le champ de recherche n'est pas vide).

## Gestion du state dans `useEffect()`
