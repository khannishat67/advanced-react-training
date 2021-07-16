export class Shape1D {
    length: number;
    constructor(length: number) {
        this.length = length;
    }
}

class Shape2D extends Shape1D {
    breadth: number;
    constructor(length: number, breadth: number) {
        super(length);
        this.breadth = breadth;
    }
}
class Shape3D extends Shape2D {
    height: number;
    constructor(length: number, breadth: number, height: number) {
        super(length, breadth);
        this.height = height;
    }
}
const shape3d: Shape3D = new Shape3D(30, 40, 50);
console.log(shape3d);