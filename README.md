# Consignes

Tu vas devoir trouver les informations suivantes et les tester au fur et à mesure dans ton programme pour expérimenter et comprendre comment TypeScript pourra t'aider à écrire ton meilleur code !

## Level 1

- Quels sont les différents type primitives de données en TypeScript ?

```
-string
-number
-boolean
-undefined
-null
-void
```

- Comment typer un tableau ?

```
let tab:number[]
let = declarer
tab = nom du tableau
:
type = chiffre, lettre etc...
[] le tableau
console.log("la variable tab est de type : ", typeof tab)
typeof => donne le type de variable. ex object
console.log("la variable tab contient des types : ", typeof tab[0]), Number
console.log("extraire les info du tab", tab) , 1, 2, 3
```

ou

```
let tab2: Array<boolean>
tab2= [true, flase];
console.log("variable est de type", topeof tab2) nous donnera le type boolean
```

- Quel est le type `any` ?

```
let maVariable;

console.log(typeof maVariable)
return undefined

let maVariable2:any;

console.log("variable sans typage : ", typeof maVariable2);

let valeursAny: Array<any> = [1, "test", 4];

*A n'utiliser qu'en dernier recours*
```

- Comment typer le retour d'une fonction ainsi que le type de ses paramètres ?

```
function addition(a:number; b:number):number{
return a+b;
}
console.log("resultat de la fonction", addition(5,9))

function addition (a:number, b: number) : void{
console.log(a+b)
}
console.log(typeof addition(5+7))

calcul la valeur loguer à l'interieur mais sort undefined
```

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

## Level 2

- Qu'est ce qu'une classe ?

```
structure qui défini les caracteristique et le comportement d'un objet.
Class X {
    =>  propriété

    =>  Constructor

    =>  Methode (c'est une fonction à l'interieur d'un classe)
}
```

- Qu'est ce qu'un constructeur de classe ?

```
c'est une "méthode spécial" qui permet donc d'initialiser les valeurs des propriétés d'une

constructorexemple(
//     paramForme: string,
//     paramNombreDePart: number,
//     paramGout: string
//   ) {
//     this.forme = paramForme;
//     this.nombreDePart = paramNombreDePart;
//     this.Gout = paramGout;
//   }
```

- Qu'est ce qu'une instance de classe ?

```
un objet crée à partir d'une classe
Un objet créé à partir d'une classe

// class Gateau {
//   forme: string;
//   private nombreDePart: number;
//   Gout: string;

//   constructor(
//     paramForme: string,
//     paramNombreDePart: number,
//     paramGout: string
//   ) {
//     this.forme = paramForme;
//     this.nombreDePart = paramNombreDePart;
//     this.Gout = paramGout;
//   }

//   reduitUnePart() {
//     this.nombreDePart -= 1;
//     // this.Gout = "fraise";
//   }

//   donneMoiLeNombreDePartSTP(): void {
//     console.log("test", this.nombreDePart);
//   }
// }

// const fraisier: Gateau = new Gateau("rond", 36, "fraise");
// fraisier.Gout = "mangue";
// fraisier.reduitUnePart();

// console.log("part du gateau : ", fraisier);
// // fraisier.nombreDePart = 15;

// console.log(
//   "fraisier est elle ue instance de gateau : ",
//   fraisier instanceof Gateau
// );
```

- Comment vérifier qu'une instance est d'une certaine classe ?

```
console.log("fraisier est elle une instance de gateau : "faisier instanceof Gateau);
```

- Qu'est ce que `this` dans une classe ?

```
//  mot clé
// Faire reférence à l'instance de l'objet actuel sur lequel on se situe
```

- Qu'est ce qu'une méthode de classe ?

```
// fonction attaché à l'instance d'une classe
// Comment l'executer ?
// nomDeMonInstance.nomDeMaMethode()
```

- Qu'est ce que la visibilité des propriétés ?

```
// public
// private
// protected
```

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

## Level 3

- Comment faire pour diviser notre programme en différents fichiers ? (ex: une classe dans un fichier que j'importe dans un autre)

```
Avec les mots clefs Import et Export
```

- Qu'est ce que l'héritage ?

```
Une class qui herite est une class qui aura acces au même propriété et methode que sa classe mère.
```

- Comment appeler le constructeur d'une classe mère ?

```
Avec le mot clef Super()  tous les champ de la classe mère doivent y etre renseigné
```

- Comment appeler une méthode d'une classe mère ?

```
il suffit d'appeler la classe fille.lenom de la methode.
```

- Qu'est ce que le polymorphism ?

```
Une "transformation" de la methode de la classe mere dans la classe enfant pour répondre au nouveau besoin.
```

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

## Boss level

Met en pratique le fruit de tes recherches à travers cet exercice en binôme !

### Partie 1 : Héros

La classe `Hero` permet de créer des objets possédant les propriétés suivantes :

    name : string
    power : number
    life : number

​Et les méthodes

    attack(opponent: Hero)
    isAlive()

​La méthode `attack` a un paramètre `opponent` (de type `Hero`). Il faut réduire le nombre (`life`) de `opponent` d'autant de dégats (`power`) de l'attaquant.

​
_Exemple : Si Joan attaque Leon, cela sera représenté par :_

    joan.attack(leon)

​La méthode `isAlive` devrait retourner `true` si le nombre de points de vie du héros est supérieur à zéro et `false` sinon.

Crée deux instances de `Hero` et vérifie que les méthodes `attack` et `isAlive` fonctionnent.

**Contrainte à ajouter** : il faut maintenant faire en sorte que les propriétés `name`, `power`, `life` soient privées. Tu vas devoir créer des méthodes permettant d'accéder à leur valeur et de modifier leur valeur.

### Partie 2 : Armes

​
Crée une classe `Weapon` avec la propriété suivante :

    name : string

Ajoute l'attribut `weapon` (de type `Weapon`) à la classe `Hero` sans modifier le constructeur (ainsi `weapon` n'est pas initialisé).

Crée trois classes `HeroAxe`, `HeroSword` et `HeroSpear` qui héritent de `Hero`.

Ces trois classes appellent le constructeur de leur parent et initialisent `weapon` avec des instances de la classe `Weapon` dont les noms seront `axe`, `sword` ou `spear` selon le cas.

Dans les classes `HeroAxe`, `HeroSword` et `HeroSpear`, redéfinisse la méthode `attack` pour prendre en compte les cas suivants :

- `HeroAxe` : si le type de `opponent` est `HeroSword`, multiplier `power` par deux
- `HeroSword` : si le type de `opponent` est `HeroSpear`, multiplier `power` par deux
- `HeroSpear` : si le type de `opponent` est `HeroAxe`, multiplier `power` par deux

​
Astuce : utilise le mot-clé `super` pour appeler la méthode `attack` de la classe parente.

Crée des instances des trois classes `HeroAxe`, `HeroSword` et `HeroSpear` et vérifie que leurs méthodes `attack` fonctionnent correctement.
​

### Partie 3 : Bataille

Crée une boucle qui fait que deux instances de sous-classes `Hero` s'affrontent (elles attaquent en même temps).

Quand au moins l'une d'entre elles est morte, afficher `{heroName} wins`. Si les deux sont morts, afficher `It's a draw`.

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

---

**_Bonus 1 : Les dégâts de l'arme_**

_Ajoute une propriété `damage` à la classe `Weapon` et fait en sorte qu'elle soit initialisée par le constructeur._

_Modifie la méthode `attack` de `Hero` afin que les dégâts soient calculés de la façon suivante : la puissance du héro `power` + les dégâts de l'arme `power`_

**_Bonus 2 : Interface graphique_**

_Réalise une interface graphique pour l'application (par exemple, avec un choix de héros et d'armes, et un visuel sur les dégâts infligés)_

```

```
