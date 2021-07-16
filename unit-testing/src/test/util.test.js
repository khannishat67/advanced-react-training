import axios from "axios";
import { sum,diff,rem,sq, createPerson, canThrowError, resolves, rejects, objMap, apiCall } from "../util";
var a = 30;
var b = 40;

beforeEach(() => {
    a = Math.random()*100;
    b = Math.random()*100;

});
afterEach(() => {
    a=0
    b=0
})
test('should return correct sum', () => {
    expect(sum(a,b)).toBe(a+b)
})

test('should return correct difference', () => {

    expect(diff(a,b)).toBe(a-b)
})

test('should return correct remainder', () => {
    expect(rem(10,3)).toBe(1);
})

test('should return person object', () => {
    expect(createPerson('Nishat', 24)).toEqual({name: 'Nishat', age: 24})
})

test('should not be equal to 4', () => {
    expect(sq(4)).not.toBe(15);
    
})
test('should not be equal to 4', () => {
    expect(diff(4,6)).toBeGreaterThan(-5);

})




test('should throw error', () => {
    expect(() => canThrowError(-1)).toThrow(Error)
})

test('should return correct value', (done) => {
    resolves().then((val) => {
        expect(val).toBe('Some value')
        done();
    })
})
test('should resolve', () => {
    expect(resolves()).resolves.toMatch('Some value')
})
test('should reject', () => {
    expect(rejects()).rejects.toMatch('Some error')
})
test('should resolve again async', async () => {
        const val = await resolves();
        expect(val).toBe('Some value')

})
// 3 As => Assign, Act, Assert
test('should run the callback n times', () => {
   const callback = jest.fn(x => x+10)
   const elems = [1,2,3,4,5]
   const newElems = objMap(elems, callback)
   expect(callback.mock.calls.length).toBe(5);
   expect(callback.mock.calls[1][0]).toBe(2);
   expect(callback.mock.results[0]['value']).toBe(11)
})
test('should run the callback n times again', () => {
   const callback = jest.fn()
   callback.mockReturnValueOnce(10).mockReturnValueOnce(20).mockReturnValue(40)
   const elems = [1,2,3,4,5]
   const newElems = objMap(elems, callback)
   expect(callback.mock.calls.length).toBe(5);
   expect(callback.mock.calls[1][0]).toBe(2);
   expect(callback.mock.results[0]['value']).toBe(10)
})
jest.mock('axios')
test('should make mock api call', async () => {
    axios.get.mockResolvedValue({data: {
        name: 'something'
    }});

    const users = await apiCall();
})