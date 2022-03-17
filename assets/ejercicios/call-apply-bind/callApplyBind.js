function saludar() {
    console.log(`Hola Soy ${this.name} - ${this.apellido}`);
}

const diego = {
    name: 'Diego',
    apellido: 'Beltran'
}

// usamos call para pasar el contexo

console.log('function call ejercicio 1');
saludar.call(diego);

function caminar(metros, faltan) {
    console.log(`El desarrollador ${this.name} ${this.apellido} ha caminado ${metros} metros de ${faltan} que le hacen falta`);
}

console.log('function call ejercicio 2');
caminar.call(diego, 50, 100);

console.log('function apply ejercicio');
caminar.apply(diego, [500, 1000]);


const dori = {
    name: 'Doriana',
    apellido: 'Beltrán'
}

const doriSaluda = saludar.bind(dori);

console.log('function bind ejercicio');
doriSaluda();

//forma objeto
const doriCamina = caminar.bind(dori);
console.log('function bind ejercicio forma 1');
doriCamina(1, 2);
// forma total
const doriCamina2 = caminar.bind(dori, 2, 3);
console.log('function bind ejercicio forma 2');
doriCamina2();
// forma parcial
const doriCamina3 = caminar.bind(dori, 4);
console.log('function bind ejercicio forma 3');
doriCamina3(2);




const botones = document.getElementsByClassName('testCall');

Array.prototype.forEach.call(botones, button => {
    button.onclick = () => alert('continua aprendiendo');
})