---
sidebar_position: 2
---

# Select

## Le composant `Select`

### Les props.

- `options`_obligatoire_ :
  - un tableau de chaînes servant à la fois de label et de valeur ["labelAsValue", "....", ....]
  - un tableau de tableaux de la forme : [ [_"label"_, _"valeur"_, [_svg_]], [...], ....] - icône _svg_ facultative.
- `selected` _optionnel_ (0 par défaut) :<br/> id. de la valeur sélectionnée à l'initialisation. Si "2" (ou {2}) : la troisième option est sélectionnée à l'initialisation [0 est la première] -
- `onSelect` _optionnel_ : <br/>une fonction de paramètres (_"valeur"_, _id_) appelée lors de la sélection d'une option
- `name`, `id` _optionnels_ : <br/>ajoutés au `div` englobant (wrappper) de classe _.sl-select-00_. `name` devient `data-name` pour le `div`<br/>
  `name` : utile si le `Select` est ajouté à un formulaire, car il permet alors d'ajouter aux données récupérées par le formulaire
  la valeur sélectionnée. (dans l'objet `formData` passé en paramètre à `onSubmit()` du formulaire)
- `className` _optionnel_ : <br/> ajouté à la classe _.sl-select-00_ si présent
- `height` _optionnel_:<br/> la hauteur de l'entête du `Select`. '26px' par défaut.
