---
sidebar_position: 1
---

# Popup

## Le code du composant `Popup`

### Utilisation de `forwardRef`

Le composant Popup utilise la fonction `forwardRef` de React qui permet de faire passer une référence d'un composant parent à un composant enfant. Ceci est particulièrement utile pour accéder directement à l'élément DOM sous-jacent ou à l'instance du composant enfant. Dans React, l'objet `ref` est utilisé pour accéder directement à l'élément DOM sous-jacent ou à l'instance du composant, mais normalement uniquement dans le même composant où elles sont définies, ce qui signifie qu'on ne peut passer directement une référence d'un composant parent à un composant enfant. C'est là que `forwardRef` entre en jeu.

La fonction `forwardRef` est utilisée pour créer un composant d'ordre supérieur (HOC) qui encapsule le composant enfant et transmet la référence du parent au composant enfant encapsulé. Voici un exemple d'utilisation de `forwardRef `:

```javascript
import { useRef, useEffect, forwardRef } from "react";

const ChildComponent = forwardRef((props, ref) => {
  useEffect(() => {
    console.log(ref.current); // <div>modifié par accès direct...</div>
  }, [ref]);

  // La référence à l'instance DOM de l'élément input est affectée à la variable ref (paramètre de forwardRef)
  // et donc récupérable dans le composant parent par `useRef`
  return <div ref={ref}>Testing...</div>;
});

const ParentComponent = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log(inputRef.current); // accès direct dans le ParentComponent à l'instance DOM du div du ChildComponent
    inputRef.current.innerText = "Contenu du div modifié par accès direct..."; // Testing... => Contenu du div modifié par accès direct...
  }, []);

  // La variable inputRef est passée au composant enfant par la 'propriété-paramètre' ref et prendra la valeur de l'instance DOM de l'élément
  // input du ChildComponent
  return <ChildComponent ref={inputRef} />;
};

export { ChildComponent, ParentComponent };
```

### Utilisation de `useImperativeHandle`

```javascript
import { useRef, useEffect, forwardRef, useImperativeHandle } from "react";

const ChildComponent = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    // l'objet retourné contient les méthodes qui doivent être accessibles dans le ParentComponent
    childMethode,
  }));

  useEffect(() => {
    console.log(ref.current); // {childMethode:  () => { console.log("child methode running...");} }
  }, [ref]);

  const childMethode = () => {
    console.log("child methode running...");
  };

  return <div>Testing... Je suis le composant Child</div>;
});

const ParentComponent = () => {
  const childRef = useRef(null);

  useEffect(() => {
    childRef.current.childMethode(); // child methode running...
  }, []);

  return <ChildComponent ref={childRef} />;
};

export { ChildComponent, ParentComponent };
```

### Le composant `Popup`

Ce composant sert de composant de base pour tout composant dérivé (composant parent de `Popup`) devant faire apparaître une fenêtre popup : pour les menus, les popups contextuels, les selects...

Un seul `Popup` ne peut être ouvert à la fois : l'ouverture d'un `Popup` entraîne la fermeture automatique d'un autre `Popup` ouvert.

#### Utilisation obligatoire de `useRef`

Le `Popup` doit explicitement avoir une référence objet `ref` obtenue par `useRef`.

```javascript
const popupRef = useRef(null)
...
<Popup ref={popupRef}> ... </Popup>
```

Le Popup expose les trois méthodes suivantes accessible par `popupRef.current.methode`:

- `toggle(ev)` : appelée généralement en réponse à un clic sur un menu. Ouvre le popup courant s'il est fermé après avoir fermé le popup déjà ouvert s'il existe. Ferme le popup courant s'il est ouvert.
- `isOpen()`: retourne `true` si le popup courant est ouvert, sinon retourne `false`.
- `close()` : ferme le popup courant.

#### Les propriétés `className` et `stateChanged`

Tous les childs d'un `Popup` seront englobés dans un `div` ayant pour classe _sl-popup-00_. La propriété `className` permet cependant d'ajouter une classe personnalisée si nécessaire.
La propriété `stateChanged` (facultative) référence une fonction qui sera appelée à chaque changement d'état (ouvert ou fermé) du `Popup` avec pour paramètre la valeur `true` si le `Popup` vient d'être ouvert et `false` s'il vient d'être fermé'.
