function thisGobal() {
    console.log(`this: ${this}`);
}

const scopeGlobal = document.getElementById('scopeGlobal');

scopeGlobal.onclick = () => thisGobal();


function whoIsThis() {
    return this;
}
const scopeFunction = document.getElementById('scopeFunction');

scopeFunction.onclick = () => console.log(`whoIsThis(): ${whoIsThis()}`);

function whoIsThisUseStrict() {
    'use strict'
    return this;
}
const scopeFunctionUseStrict = document.getElementById('scopeFunctionUseStrict');
scopeFunctionUseStrict.onclick = () => console.log(`whoIsThisUseStrict(): ${whoIsThisUseStrict()}`);


const gato = {
    name: 'Mila',
    saludar: function() {
        console.log(`Hola soy ${this.name}`);
    }
}

const thisObject = document.getElementById('thisObject');
thisObject.onclick = () => gato.saludar();

const outObject = gato.saludar;

const thisOutObject = document.getElementById('thisOutObject');
thisOutObject.onclick = () => outObject();


function Person(name) {
    this.name = name;
}

Person.prototype.saludar = function() {
    console.log(`Hola soy ${this.name}`);
}

const diego = new Person('Diego');

const thisClass = document.getElementById('thisClass');
thisClass.onclick = () => diego.saludar();