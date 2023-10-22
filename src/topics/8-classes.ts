
export class Person {
/*     public name: string;
    public address: string; */

    constructor( public name: string, public address: string = 'No Adress' ) {
        this.name = name;
        this.address = address;
    }
}

export class Hero{
    //public person:Person;
    constructor( 
        public alterEgo: string, 
        public age: number, 
        public realName: string,
        public person: Person
        ){
        //super(realName, 'El Roble, Sucre');
    }
}
const tony = new Person('Tony','Sincelejo');
const iroman = new Hero('Iroman',45,'Tony', tony);

console.log(iroman);

export {};