//Function Scope


function printNumbers() {
    console.log('Function Scope');
    var i;
    for (i = 0; i < 10; i++) {
        function scopeFunction(n) {
            setTimeout(() => {
                console.log(n + 'function Scope');
            }, 100)
        }
        scopeFunction(i);
    }
}

printNumbers();

//block Scope

function printNumbersBlock89() {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i + 'block Scope');
        }, 100);
    }
}

printNumbersBlock89();