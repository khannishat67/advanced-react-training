import axios from 'axios';
export const sum = (a,b) => a+b
export const diff = (a,b) => a-b
export const sq = (a) => a*a
export const rem = (a,b) => a%b
export const createPerson = (name,age) => ({name,age})

export const canThrowError = (num) => {
    if(num < 0) {
        throw new Error('Number less than 0');
    }
    return num
}
export const resolves = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('Some value'), 2000)
    ;
})
export const rejects = () => new Promise((resolve, reject) => {
    setTimeout(() => reject('Some error'), 2000)
    ;
})

export const objMap = (elems,callback) => {
    const arr = [];
    for(let i=0;i<elems.length;i++) {
        arr.push(callback(elems[i]))
    }
    return arr;
}
export const apiCall = () => {
    return axios.get('./users.json')
}