const multiply = require('./multiply');

test("that we get the right multiple value", () => {
    expect(multiply(2 , 2)).toBe(4)
    expect(multiply(3 , 2)).toBe(8)
})