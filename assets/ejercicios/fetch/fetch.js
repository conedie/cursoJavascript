const url = 'https://images.pexels.com/photos/974470/nature-stars-milky-way-galaxy-974470.jpeg?q=100';
const img = document.getElementById('img');
const loadButton = document.getElementById('load');
const stopButton = document.getElementById('stop');
let controller;

//método que nos da visual de carga de elemento
function startLoadImg() {
    loadButton.disabled = true;
    loadButton.innerText = 'loading...'
    stopButton.disabled = false;
}

// realizamos la carga de la imagen
loadButton.onclick = async function() {
    startLoadImg();
    //instanciamos el controller
    controller = new AbortController();
    try {
        // hacemos el fetch y pasamos el objeto de configuración que en este caso nos ayudara a cancelar el fect si la imagen es muy lenta de cargar
        const response = await fetch(url, { signal: controller.signal });
        const blob = await response.blob();
        const imgUrl = URL.createObjectURL(blob);
        img.src = imgUrl;
        stopLoadImg();
    } catch (error) {
        console.log(error.message);
    }
};

function stopLoadImg() {
    loadButton.disabled = false;
    loadButton.innerText = 'Load Image';
    stopButton.disabled = true;
}

stopButton.onclick = function() {
    controller.abort();
    stopLoadImg();
}