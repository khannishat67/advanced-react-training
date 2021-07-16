
interface Coord1D {
    x: number
}
interface Coord2D extends Coord1D {
    y: number
}
interface Coord3D extends Coord2D {
    z: number
}
var coords2: Coord2D = {
    x: 10,
    y: 30
}
var coords: Coord3D = {
    x: 10,
    y: 20,
    z: 30
}
console.log(coords);

interface Colorful {
    color: string;
}
interface Circle {
    name?: string;
    radius: number;
}

type ColorfulCircle = Colorful & Circle;
var colorfulCirlce: ColorfulCircle = {
    color: 'red',
    radius: 2.5,
}
var colorfulCirlce2: ColorfulCircle = {
    color: 'red',
    radius: 2.5,
    name: 'Nisaht'
}
console.log(colorfulCirlce, colorfulCirlce2);

type Engineer = {
    stream: string,
    build: () => void
}
type Doctor = {
    speciality: string,
    treat: () => {}
}
type Lawyer = {
    type: string,
    argue: () => boolean
}

interface Person<X> {
    profession: X,
    name: string,
    age: number,
    readonly species: string;
}
type AgelessPerson<X> = Omit<Person<X>, 'age'>
var ageless: AgelessPerson<Engineer> = {
    name: 'Nishat',
    profession: null,
    species: 'Homo sapiens',
}
var engg: Person<Engineer> = {
    age: 23,
    name: 'Nishat',
    profession: {
        stream: 'CSE',
        build: () => {
            console.log('Building');
        }
    },
    species: 'Homo sapiens'
}
var doc: Person<Doctor> = {
    age: 23,
    name: 'Nishat',
    profession: {
        speciality: 'CTVS',
        treat: () => {
            console.log('Treating');
            return {
                val: 'something'
            }
        }
    },
    species: 'Homo Habillus'

}
var law: Person<Lawyer> = {
    age: 23,
    name: 'Nishat',
    profession: {
        type: 'Civil',
        argue: () => {
            return true
        }
    },
    species: 'Homo erectus'

}
console.log(engg, doc, law);


export interface IShape {
    [shapeName: string]: Array<Colorful>;
}

var shape: IShape = {
    circle: [{
        color: 'red'
    }]
}
var shape2: IShape = {
    square: [{
        color: 'green'
    }]
}
var shape3: IShape = {
    rect: [{
        color: 'green'
    }],
}

console.log(shape, shape2, shape3);
