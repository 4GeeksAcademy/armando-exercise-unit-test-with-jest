const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');

    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar should be 156.5 yen", function() {
    const { fromDollarToYen } = require('./app.js');

    const yens = fromDollarToYen(3.5);

    const expected2 = 3.5 * 156.5; 
    
     expect(fromDollarToYen(3.5)).toBe(547.75);
})

test("One yen should be 0.87 pound", function() {
    const { fromYenToPound } = require('./app.js');

    const pound = fromYenToPound(3.5);

    const expected3 = 3.5 * 0.87; 
    
     expect(fromYenToPound(3.5)).toBe(3.045);
})