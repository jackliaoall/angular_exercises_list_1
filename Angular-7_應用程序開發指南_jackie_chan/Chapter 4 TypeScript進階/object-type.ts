export class People {
    name: string;
}

export class Animal {
    name: string;
}

export class Bacteria {
    name: string;
    private _age: number;

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    gorw(): void {
        this._age++;
    }
}

// let person: People = new Animal();
// let animal: Animal = new People();

let person: { name: string } = new Animal();
let animal: { name: string } = new People();
// let plants: { name: string, gorw: () => void } = {
//     name: 'tree',
//     grow: (): void => {
//         console.log('...');
//     }
// };

let bacteria: Bacteria = new Bacteria();
//let bacteria_2: { name: string, age: number, grow(): void } = new Bacteria();