const fib = require("../fib");

//Sprawdzenie zwracanej wartości dla liczby dodatniej
//Czy zwróci tablice 1-elementową zawierającą 0
test('When num is 1, should return [ 0 ]', () => {
    expect(fib(1)).toEqual([0]);
});
//Czy zwróci odpowiednią tablicę
test('When num is 5, should return [ 0, 1, 1, 2, 3 ]', () => {
    expect(fib(5)).toEqual([ 0, 1, 1, 2, 3 ]);
});

//Sprawdzenie zwracanej wartości dla liczby ujemnej lub 0
//Czy zwróci undefined, jeśli liczba elementów jest ujemna
test('When num is negative, should return \'undefined\'', () => {
    expect(fib(-2)).toEqual(undefined);
});
//Czy zwróci undefined, jeśli liczba elementów jest równa 0
test('When num is 0, should return \'undefined\'', () => {
    expect(fib(0)).toEqual(undefined);
});
//Czy zwróci undefined, jeśli liczba elementów jest ułamkiem
test('When num is 0.5, should return \'undefined\'', () => {
    expect(fib(0.5)).toEqual(undefined);
});
test('When num is 0.001, should return \'undefined\'', () => {
    expect(fib(0.001)).toEqual(undefined);
});
test('When num is 1.2, should return \'undefined\'', () => {
    expect(fib(1.2)).toEqual(undefined);
});

//Sprawdzenie zwracanej wartości dla innego typu danych (string, array, boolean, undefined)
//Czy zwróci undefined jeśli num będzie innego typu niż number
test('When typeof num is string, should return \'undefined\'', () => {
    expect(fib("Hello World")).toEqual(undefined);
});
test('When typeof num is array, should return \'undefined\'', () => {
    expect(fib([20, "test", true])).toEqual(undefined);
});
test('When typeof num is boolean, should return \'undefined\'', () => {
    expect(fib(true)).toEqual(undefined);
});
test('When typeof num is undefined, should return \'undefined\'', () => {
    expect(fib(undefined)).toEqual(undefined);
});

//Sprawdzenie zwracanej wartości przy podaniu różnych wartości argumentu start
//Czy poprawnie się zachowa jeśli element start jest większy od liczby elementów
test('When num is 3 and start is 4, should return [ 2, 3, 5 ]', () => {
    expect(fib(3, 4)).toEqual([ 2, 3, 5 ]);
});
//Czy zwróci odpowiedni fragment tablicy
test('When num is 5 and start is 2, should return [ 1, 1, 2, 3, 5 ]', () => {
    expect(fib(5, 2)).toEqual([ 1, 1, 2, 3, 5 ]);
});
test('When num is 4 and start is negative, should return [ 0, 1, 1, 2 ]', () => {
    expect(fib(4, -1)).toEqual([ 0, 1, 1, 2 ]);
});

//Sprawdzenie działania argumentu inverse
test('When num is 5, start is 2 and inverse is true, should return [ 5, 3, 2, 1, 1 ]', () => {
    expect(fib(5, 2, true)).toEqual([ 5, 3, 2, 1, 1 ]);
});
test('When num is 2, start is 4 and inverse is true, should return [ 3, 2 ]', () => {
    expect(fib(2, 4, true)).toEqual([ 3, 2 ]);
});
test('When num is 3, start is 7 and inverse is false, should return [ 8, 13, 21 ]', () => {
    expect(fib(3, 7, false)).toEqual([ 8, 13, 21 ]);
});