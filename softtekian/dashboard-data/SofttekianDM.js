class SofttekianDM {
    constructor(n, is, e, h = "dormir") {
        console.log("Esta naciendo un softtekian");
        this.nombre = n;
        this.is = is;
        this.email = e;
        this.hobbie = h;
    }
    printInfo() {
        console.log(`${this.is}: ${this.nombre}, ${this.email}, hobbie: ${this.hobbie}`);
    }

    toJsonString() {
        return JSON.stringify(this);
    }

    //conencion para nombrar metodos privador
    _noQuieroQueLlamesaEstaFuncion
}
