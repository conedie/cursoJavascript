class AutoPause {

    constructor() {
        this.threshold = 0.25;
        // se asigna el scope, para que se pueda llamar con this los contextos dentro del su mismo socpe.
        this.handleIntersection = this.handleIntersection.bind(this);
    }

    run(player) {
        this.player = player;
        // instaciamos el intercepttor observer, en el parametro 1 recible en handler o método que se quiere ejecutar
        // en el segundo parametro recibe un objeto de configuración que para este caso es un límite
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold
        })

        //se pone a correr el interceptor
        observer.observe(this.player.media);
    }

    //aqui se define el metodo que ejecuta el primer parametro de interceptor
    handleIntersection(entries) {
        // El paremtro entries es emitido por la misma instancia del interceptorObserver
        const entry = entries[0];
        //se valida que valor tiene el intersection radio.
        const isVisible = entry.intersectionRatio >= this.threshold;
        //según su valor se toma una decision.
        if (isVisible) {
            this.player.play();
        } else {
            this.player.pause();
        }
    }
}

export default AutoPause;