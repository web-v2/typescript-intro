 
 function addNumbers(a:number, b:number):number {
    return a + b;
 }

const addNumberArrow = (a:number, b:number):string => {
   return `${a + b}`;
}

function multiply(a:number, b?:number, base:number=2):number {
    return base * a;
}
/* const resp:number = addNumbers(5,8);
const resp2:string = addNumberArrow(34,57);
const respmult:number = multiply(6);
console.log({resp, resp2, respmult}); */

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character:Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider II',
    hp: 45,
    showHp(){
        console.log(`Puntos de vida: ${this.hp}`);
    }
}
healCharacter(strider,15);
healCharacter(strider,25);
strider.showHp();
export {}