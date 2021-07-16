"use strict";
exports.__esModule = true;
var coords2 = {
    x: 10,
    y: 30
};
var coords = {
    x: 10,
    y: 20,
    z: 30
};
console.log(coords);
var colorfulCirlce = {
    color: 'red',
    radius: 2.5
};
var colorfulCirlce2 = {
    color: 'red',
    radius: 2.5,
    name: 'Nisaht'
};
console.log(colorfulCirlce, colorfulCirlce2);
var engg = {
    age: 23,
    name: 'Nishat',
    profession: {
        stream: 'CSE',
        build: function () {
            console.log('Building');
        }
    },
    species: 'Homo sapiens'
};
var doc = {
    age: 23,
    name: 'Nishat',
    profession: {
        speciality: 'CTVS',
        treat: function () {
            console.log('Treating');
            return {
                val: 'something'
            };
        }
    },
    species: 'Homo Habillus'
};
var law = {
    age: 23,
    name: 'Nishat',
    profession: {
        type: 'Civil',
        argue: function () {
            return true;
        }
    },
    species: 'Homo erectus'
};
console.log(engg, doc, law);
var shape = {
    circle: [{
            color: 'red'
        }]
};
var shape2 = {
    square: [{
            color: 'green'
        }]
};
var shape3 = {
    rect: [{
            color: 'green'
        }]
};
console.log(shape, shape2, shape3);
