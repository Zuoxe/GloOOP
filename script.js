class First {
    hello() {
        console.log("Я родительский метод");
    }
}

class Second extends First {
    constructor() {
        super()
        super.hello()
        this.hello()
    }
    hello() {
        console.log("А я наследуемый метод");
    }

}

const first = new Second;
console.log(first);
