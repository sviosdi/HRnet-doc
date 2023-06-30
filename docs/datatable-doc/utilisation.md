---
sidebar_position: 1
---

# Utilisation

## Utilisation du composant `Datatable`

`Datatable` est un composant `React` n'utilisant aucune bibliothèque tierce. Dans l'état actuel de développement, `Datatable` permet:

- D'afficher des données conformes à un certain modèle dans une table. Ce modèle étant passé en _prop_ `model`.
- Il y a la possibilité de naviguer entre les différentes pages d'affichage des entrées, une barre de recherche permet une recherche dans la table correspondant aux critères suivants :
  - Plusieurs _mots_ séparés par un ou plusieurs espaces peuvent être entrés dans la barre de recherche. Une entrée correspond à un résultat positif de recherche lorsque tous ces mots ont étés trouvés parmi (lorsqu'ils sont contenus dans) les champs de cette entrée formatés tels qu'ils apparaissent à l'affichage (et indépendamment de la casse).
- La propriété `model` permet de préparer la table de façon à ce que les données qui lui sont passées puissent être correctement affichées et permet aussi de paramètrer la table. Les paramètres étant :

  - Présence ou non d'un `select` pour choisir le nombre d'entrées affichées par page. Sinon une valeur indiquée dans le modèle sera prise comme valeur par défaut.
  - Présence ou non d'un `footer` reprenant en fin de page les libellés du `header` de la table.
  - Présence ou non d'un bouton permettant d'éditer une entrée qui sera ajoutée à la table après soumission d'un formulaire apparaissant en modale.

  Si on veut pouvoir éditer la table (ajouter une nouvelle entrée) il est clair que le formulaire d'édition correspondant à une nouvelle entrée :

  - peut être généré automatiquement en fonction du modèle.
  - peut être une modale entièrement géré par le composant Datatable et qu'il n'est donc pas nécessaire de le créer séparément _en dehors_ du composant comme ce qui est fait par l'application HRnet.

### Le modèle

Le modèle passé en propriété `model` à la Datatable, est un objet javascript défini ainsi :

```javascript
const DatatableModel = {
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
}
```

Les différents champs du modèle sont :

- `id`: _obligatoire_. Un identifiant unique sur la page pour identifier la table.
- `buttons` : _optionnel_. Un tableau indiquant la présence de boutons ayant chacun un certain rôle : création d'une nouvelle entrée, édition ou suppression d'une entrée sélectionnée. Ces deux dernières fonctionnalités n'étant pas encore implémentées. Seul un bouton de type `new` est actuellement accepté, avec un champ `label` pour label du bouton lui-même et un champ `title` comme titre de la `Modal` qui s'ouvre pour pouvoir éditer une nouvelle entrée. Ce champ est optionnel ou le tableau peut être vide.
- `entries` : _optionnel_. Un _Select_ permettant de choisir le nombre d'entrées à afficher par page.
- `nbEntries` : _obligatoire_ en cas d'absence du champ `entries`. Sinon ignoré. Le nombre d'entrées à afficher par page (par défaut).
- `footer` : _optionnel_. Si `true` : reprise du header de la table en bas de page en tant que footer. Si `false` ou absent le footer n'est pas affiché.
- `sortCol` : _optionnel_. Index de la colonne (0: 1ère colonne) devant être ordonnée au chargement de la page.
- `headers` : _obligatoire_. Array ordonné des entêtes des colonnes de la table. Voir sa description [plus bas](#headers-id)
- `data` : _obligatoire_. Les données JSON associées à la table.

**Remarque**: Les champs non obligatoires peuvent être absents (ou masqués comme commentaires) ou leur valeur peut-être passée à `undefined` ou `null`

#### Le champ `headers` {#headers-id}

Chaque `header` du tableau `headers` est un objet repésentant l'entête d'une colonne de la table. Pour chaque header on indiquera les champs suivants :

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
    Dans ce dernier cas, en plus des champs `title`, `field`, `input: 'Select'`, on passera les champs : `options`, et `selected`. Se reporter à la documentation du composant [`Select`](../../docs/sl-base/Select) pour la signification de ces champs. Le champ `type` est omis.
  - `fieldset` : qui générera la création d'un `<fieldset>`.<br/>Dans ce cas on fera apparaître les champs `title` et et `input:'fieldset'` ainsi qu'un champ `content` qui est un _array_ de _headers_ commet définis précédemments.
- width: la largeur souhaitée de la colonne à l'affichage de la table (par exemple `'100px'`)

### Utilisation du modèle.

Le modèle, comme décrit plus haut sera placé dans un fichier javascript qui lui sera dédié dans lequel on importera la fonction getModel(). Ce fichier devra se présenter ainsi :

```javascript
import { getModel } from sviosdi-datatable'

const model={
  // ... définition du model comme décrit précédement
}

export default getModel(model)
```

Le modèle sera ensuite importé avant d'être passé en propriété à la Datatable.

### Les propriétés de Datatable

Les trois propriétés de Datatable sont :

- `model` [obligatoire] le modèle comme décrit précédemment.
- `data` [facultatif- `[]` par défaut] : les données initiales à afficher sous forme d'un array d'objets représentant chaque entrée de la Datatable et dont chaque champ correspond au champ `field` des `headers` du modèle.
- `externalForm` [facultatif - `false` par défaut]. Si cette propriété est présente, alors la Datatable peut gérer l'édition d'une nouvelle entrée par un formulaire qui n'est pas généré automatiquement par la Datatable. (Ce qui est déconseillé.) Si cette propriété n'est pas présente, c'est donc la Datatable qui peut alors générer automatiquement le formulaire d'édition d'une nouvelle entrée.
