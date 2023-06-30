const {add} = require('./index');

// describe('test', () => {
//     it('jhjhj', () => {
//         expect(1).toBe(1);
//     });
    
// });

describe('index', () => {
    it('1 + 1 = 2', () => {
        expect(add(1,1)).toBe(2);
    });
});