function* simpleGenerator() {
    console.log('PARTE UNO');
    yield;
    console.log('PARTE DOS');
}

document.getElementById('genSencillo').onclick = function() {
    const generatorSimple = simpleGenerator();
    console.log(generatorSimple);
    console.log(generatorSimple.next());
    console.log(generatorSimple.next());
}

function* infinityGenerator() {
    let id = 1;
    while (true) {
        yield id;
        id = id + 1;
    }
}

document.getElementById('genInfinity').onclick = function() {
    const generadorInfinito = infinityGenerator();

    console.log(generadorInfinito.next());
    console.log(generadorInfinito.next());
    console.log(generadorInfinito.next());
    console.log(generadorInfinito.next());
    console.log(generadorInfinito.next());

};

function* infinityGeneratorReset() {
    let id = 1;
    let reset;
    while (true) {
        reset = yield id;
        if (reset) {
            id = 1;
        } else {
            id = id + 1;
        }
    }
}

document.getElementById('genReset').onclick = function() {
    const generadorReset = infinityGeneratorReset();

    console.log(generadorReset.next());
    console.log(generadorReset.next());
    console.log(generadorReset.next(true));
    console.log(generadorReset.next());
    console.log(generadorReset.next());

};

function* generadorFibonacci() {
    a = 1;
    b = 1;

    while (true) {
        const nexNumber = a + b;
        a = b;
        b = nexNumber;
        yield nexNumber;
    }
}

document.getElementById('genFibonacci').onclick = function() {
    const fibonacci = generadorFibonacci();

    console.log(fibonacci.next());
    console.log(fibonacci.next());
    console.log(fibonacci.next());
    console.log(fibonacci.next());
    console.log(fibonacci.next());
    console.log(fibonacci.next());
    console.log(fibonacci.next());
    console.log(fibonacci.next());
    console.log(fibonacci.next());

};