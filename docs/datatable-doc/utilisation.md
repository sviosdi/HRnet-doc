---
sidebar_position: 1
---

# Utilisation

## Utilisation du composant `DataTable`

`DataTable` est un composant `React` n'utilisant aucune bibliothèque tierce. Dans l'état actuel de développement, `DataTable` permet:

- D'afficher des données JSON conformes à un certain modèle dans une table. Ce modèle étant la seule _prop_ `model` passée au composant.
- Il y a la possibilité de naviguer entre les différentes pages d'affichage des entrées, une barre de recherche permet une recherche dans la table correspondant aux critères suivants :
  - Plusieurs _mots_ séparés par un ou plusieurs espaces peuvent être entrés dans la barre de recherche. Une entrée correspond à un résultat positif de recherche lorsque tous ces mots ont étés trouvés parmi (lorsqu'ils sont contenus dans) les champs de cette entrée formatés tels qu'ils apparaissent à l'affichage (et indépendamment de la casse).
- La propriété `model` permet de passer les données JSON tout en paramètrant la table. Les paramètres étant :
  - Présence ou non d'un `select` pour choisir le nombre d'entrées affichées par page. Sinon une valeur indiquée dans le modèle sera prise comme valeur par défaut.
  - Présence ou non d'un `footer` reprenant en fin de page les libellés du `header` de la table.
  - Présence ou non d'un bouton permettant d'éditer une entrée qui sera ajoutée à la table.

## Le modèle

Le modèle est l'unique propriété passée à la DataTable. C'est un objet javascript défini ainsi :

```javascript
const dataTableModel = {
    id: 'datable-form-create', // obligatoire
    buttons: { type: 'new', label: 'New', title: 'Create new employee' }], // optionnel
    entries: [5, 10, 20, 25, 30], // optionnel
    nbEntries: 20, // obligatoire en cas d'absence de entries, sinon ignoré
    bottomHeaders: true, // optionnel, false par défaut
    sortCol: 0, // optionnel
    headers: [ // obligatoire
        {
            title: 'First name',

         ....
        },
        {



        }
         ...
    ],
    data: data  // obligatoire
}
```

Les différents champs du modèle sont :

- `id`: _obligatoire_. Un identifiant unique sur la page pour identifier la table.
- `buttons` : _optionnel_. Un tableau indiquant la présence de boutons ayant chacun un certain rôle : création d'une nouvelle entrée, édition ou suppression d'une entrée sélectionnée. Ces deux dernières fonctionnalités n'étant pas encore implémentées. Seul un bouton de type `new` est actuellement accepté, avec un champ `label` pour label du bouton lui-même et un champ `title` comme titre de la `Modal` qui s'ouvre pour pouvoir éditer une nouvelle entrée. Ce champ est optionnel ou le tableau peut être vide.
- `entries` : _optionnel_. Un _Select_ permettant de choisir le nombre d'entrées à afficher par page.
- `nbEntries` : _obligatoire_ en cas d'absence du champ `entries`. Sinon ignoré. Le nombre d'entrées à afficher par page (par défaut).
- `footer` : _optionnel_. Si `true` : reprise du header de la table en bas de page en tant que footer. Si `false` ou absent le footer n'est pas affiché.
- `sortCol` : _optionnel_. Index de la colonne (0: 1ère colonne) devant être ordonnée au chargement de la page.
- `headers` : _obligatoire_. Array ordonné des entêtes des colonnes de la table.
- `data` : _obligatoire_. Les données JSON associées à la table.

**Remarque**: Les champs non obligatoires peuvent être absents (ou masqués comme commentaires) ou leur valeur peut-être passée à `undefined` ou `null`

### Le champ `headers`

Chaque `header` du tableau `headers` est un objet contenant les champs suivants :

- `title`: _obligatoire_. Le label du header.
- `field` : _obligatoire_. Le nom du champ(clé) dans les datas JSON associées à la table correspondant à la colonne concernée.
- `type` : _obligatoire_. (Peut être omis lorsque `input: 'Select'`) Le type de la valeur dans les datas JSON associées à la table correspondant à la colonne concernée.<br/>Les types pris en charge sont actuellement :
  - `'string'` : Une chaîne de caractères.
  - `'date'` : Une chaîne de caractères valide représentant une date au format _jj/mm/aaaa_.
  - `'number'` : Tout nombre javascript valide.
- `input` : ce champ indique le type de composant à utiliser dans la modale de création (ou édition) d'une ligne de la table.<br/>Les
  valeurs de `input` peuvent être :
  - `text` : qui générera la création d'un `<input type='text'>`
  - `date` : qui générera la création d'un `<input type='date'>`
  - `number` : qui générera la création d'un `<input type='number'>`
  - `Select` : qui générera la création d'un `<Select/>`<br/>
    Dans ce dernier cas, en plus des champs `title`, `field`, `input: 'Select'`, on passera les champs : `options`, et `selected`. Se reporter à la documentation du composant `Select` pour la signification de ces champs. Le champ `type` est omis.
  - `fieldset` : qui générera la création d'un `<fieldset>`

### Le champ `data`

C'est un `Array` dont chaque élément est un objet correspondant aux données d'une ligne de la table. Chacun de ses éléments a une propriété qui correspond au champ `field` des objets éléments du tableau `headers`.
