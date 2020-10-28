export class Circle {
    area: number;
    radius: number;
}

export class Square {
    area: number;
    width: number;
}

export class Shape {
    area: number;
}

export class Cookie {
    name:　string;
    shape: Shape;
}

export class CircleCookie {
    name: string;
    shape: Circle;
}

export class SquareCookie {
    name: string;
    shape: Square;
}

// let circle: Circle = new Square();
// let square: Square = new Circle();

// let circle: Shape = {area: 28.27, radius: 3};
// let square: Shape = {area: 9, width: 3};

let circle: Shape = {area: 28.27, radius: 3} as {area: number, radius: number};
let square: Shape = {area: 9, width: 3} as {area: number, width: number};

let circleCookie: Cookie = new CircleCookie();
let squareCookie: Cookie = new SquareCookie();