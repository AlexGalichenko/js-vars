const {fortyTwo} = require('../src/vars');

test('fortyTwo() should return 42', () => {
    expect(fortyTwo()).toEqual(42);
});

test('failed fortyTwo() should return 43', () => {
    expect(fortyTwo()).toEqual(43);
});
