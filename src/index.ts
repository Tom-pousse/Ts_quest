let message: string = 'Hello World !';
console.log(message);



class Hero {
private name : string;
private power : number;
private life : number;
weapon : Weapon | undefined;


constructor (PERSO:string, PW: number, HP:number){
    this.life =HP;
    this.power= PW;
    this.name = PERSO;
}

public get HP() : number {
    return this.life
}


public set HP(HP : number) {
    this.life = HP;
}


public get PW() : number {
    return this.power
}


public set PW(PW : number) {
    this.power = PW;
}


public get PERSO() : string {
    return this.name;
}


public set PERSO(PERSO : string) {
    this.name = PERSO;
}




attack(opponent:Hero):void{
    opponent.life -=  this.power
    
}


isAlive() : boolean{
    if (this.life > 0 ) {
        // console.log("en vie");
        return true
    }
    // else console.log("Is dead");
    return false   
}
}

class Weapon{
name : string;


constructor (name:string){
    this.name = name;
}}






const hero1: Hero = new Hero("Glu", 10, 100);
// console.log(hero1);

const hero2: Hero = new Hero("Pou", 10, 100);
// console.log(hero2);

hero1.attack(hero2)
// console.log(hero2);

// hero2.isAlive()



// declare que la class heroaxe est un enfant de hero
class HeroAxe extends Hero{
       
constructor(PERSO:string, PW: number, HP:number, weapon:Weapon|undefined){
       super(PERSO,PW,HP);
    
       
       this.weapon = new Weapon("axe");  
       
    }

    attack(opponent:Hero):void{


        if (opponent instanceof HeroSword) {
            // let degats:number = this.PW
            opponent.HP -= this.PW;
        }
        else {
            super.attack(opponent)
        }    
}
}



class HeroSword extends Hero{
       
constructor(name:string, power: number, life:number, weapon:Weapon|undefined){
       super(name, power,life);
       this.weapon = new Weapon("Sword");       
    }

    attack(opponent:Hero):void{
        if (opponent instanceof HeroSpear) {
            opponent.HP -= this.PW*2;
        }
        else {
            super.attack(opponent)
        }    
}
}
class HeroSpear extends Hero{
       
constructor(name:string, power: number, life:number, weapon:Weapon|undefined){
       super(name, power,life);
       this.weapon = new Weapon("Spear");       
    }

    attack(opponent:Hero):void{
        if (opponent instanceof HeroAxe) {
            opponent.HP -= this.PW*2;
        }
        else {
            super.attack(opponent)
        }    
}
}

// const Axe:Weapon = new Axe(arguments);

const nain:HeroAxe = new HeroAxe("Nainbus", 12, 120, Weapon);
// console.log(nain);

const elf:HeroSword = new HeroSword("Elfried", 11, 135, Weapon);
// console.log(elf);

const human:HeroSpear = new HeroSpear("Aragorn", 10, 150, Weapon);
// console.log(human);

// human.attack(nain)
// console.log(nain);
// nain.isAlive
// human.attack(nain)
// nain.isAlive
// console.log(nain);

// function Baston(){
//  while life:Hero  {
    
//  }
    
// }

let gameOver = false
while (gameOver === false) {
    if (nain.HP >0 && human.HP >0) {
        nain.attack(human), human.attack(nain);
        console.log("vie du", nain);
    console.log("vie de l'", human);
    }
    else if (nain.HP > 0){
 console.log(`you win ${nain.PERSO}`);
 gameOver = true
    }
    else if(human.HP>0) {
    console.log(`you win ${human.PERSO}`);
    gameOver = true
    }
    else {
        console.log("draw");
        gameOver = true
    
    }
    
};




