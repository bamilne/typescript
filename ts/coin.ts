let imagePath = "http://cointrackers.com/img/coins/";

export abstract class Coin {
    constructor(public value: number) {
        this.value = value;
    }
    abstract getImageUrl(): string
}

export class Quarter extends Coin {
    constructor() {
        super(.10)
    }

    getImageUrl () {
        return imagePath + "1983-s-washington-quarter.png";
    }
}

export class Dime extends Coin {
    constructor() {
        super(.10)
    }

    getImageUrl () {
        return imagePath + "1975-d-roosevelt-dime.png";
    }
}

export class Half extends Coin {
    constructor() {
        super(.5)
    }

    getImageUrl () {
        return imagePath + "1873-liberty-seated-half-dollar.png";
    }
}

export class Dollar extends Coin {
    constructor() {
        super(1)
    }

    getImageUrl () {
        return imagePath + "1891-liberty-head-double-eagle.png";
    }
}

var coin = new Quarter();
var value = coin.value;
