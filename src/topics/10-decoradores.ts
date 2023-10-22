function classDecorator<T extends {new (...args: any[]): {} }>(constructor: T){
   return class extends constructor{
    newProperty = 'New property';
    hello = 'overide';
   }
}
@classDecorator
export class SuperClase {
    public myProperties: string = '1GHJ3B23HJ42H';
    print(){
        console.log('Hello World');
    }
}

console.log(SuperClase);

const myClass = new SuperClase();
console.log(myClass);
