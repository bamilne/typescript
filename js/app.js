var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Coin = (function () {
    function Coin(value) {
        this.value = value;
        this.value = value;
    }
    return Coin;
})();
var Quarter = (function (_super) {
    __extends(Quarter, _super);
    function Quarter() {
        _super.call(this, .10);
    }
    Quarter.prototype.getImageUrl = function () {
        return "http://cointrackers.com/img/coins/1983-s-washington-quarter.png";
    };
    return Quarter;
})(Coin);
var Dime = (function (_super) {
    __extends(Dime, _super);
    function Dime() {
        _super.call(this, .10);
    }
    Dime.prototype.getImageUrl = function () {
        return "http://cointrackers.com/img/coins/1975-d-roosevelt-dime.png";
    };
    return Dime;
})(Coin);
var Half = (function (_super) {
    __extends(Half, _super);
    function Half() {
        _super.call(this, .5);
    }
    Half.prototype.getImageUrl = function () {
        return "http://cointrackers.com/img/coins/1873-liberty-seated-half-dollar.png";
    };
    return Half;
})(Coin);
var Dollar = (function (_super) {
    __extends(Dollar, _super);
    function Dollar() {
        _super.call(this, 1);
    }
    Dollar.prototype.getImageUrl = function () {
        return "http://cointrackers.com/img/coins/1891-liberty-head-double-eagle.png";
    };
    return Dollar;
})(Coin);
var coin = new Quarter();
var value = coin.value;
var ProductCategory = (function () {
    function ProductCategory() {
        this.imgPath = "http://www.tbotech.com/images/";
    }
    return ProductCategory;
})();
var DrPepper = (function (_super) {
    __extends(DrPepper, _super);
    function DrPepper() {
        _super.apply(this, arguments);
        this.name = "DrPepper";
    }
    DrPepper.prototype.getImageUrl = function () {
        return this.imgPath + "drpepper-popcansafe-sm.jpg";
    };
    return DrPepper;
})(ProductCategory);
var CocaCola = (function (_super) {
    __extends(CocaCola, _super);
    function CocaCola() {
        _super.apply(this, arguments);
        this.name = "CocaCola";
    }
    CocaCola.prototype.getImageUrl = function () {
        return this.imgPath + "coke-can-secret-safe-sm.jpg";
    };
    return CocaCola;
})(ProductCategory);
var RootBeer = (function (_super) {
    __extends(RootBeer, _super);
    function RootBeer() {
        _super.apply(this, arguments);
        this.name = "RootBeer";
    }
    RootBeer.prototype.getImageUrl = function () {
        return this.imgPath + "rootbeer-cansafe-sm.jpg";
    };
    return RootBeer;
})(ProductCategory);
var SevenupCherry = (function (_super) {
    __extends(SevenupCherry, _super);
    function SevenupCherry() {
        _super.apply(this, arguments);
        this.name = "SevenupCherry";
    }
    SevenupCherry.prototype.getImageUrl = function () {
        return this.imgPath + "cherry7up-sodacansafe-sm.jpg";
    };
    return SevenupCherry;
})(ProductCategory);
var SevenupLime = (function (_super) {
    __extends(SevenupLime, _super);
    function SevenupLime() {
        _super.apply(this, arguments);
        this.name = "SevenupLime";
    }
    SevenupLime.prototype.getImageUrl = function () {
        return this.imgPath + "7up-can-safe-sm.jpg";
    };
    return SevenupLime;
})(ProductCategory);
var Sprite = (function (_super) {
    __extends(Sprite, _super);
    function Sprite() {
        _super.apply(this, arguments);
        this.name = "Sprite";
    }
    Sprite.prototype.getImageUrl = function () {
        return this.imgPath + "spritecan-hidden-safe-sm.jpg";
    };
    return Sprite;
})(ProductCategory);
/// <reference path="productCategory.ts" />
var Initial = (function () {
    function Initial() {
        this.name = "Please select a product";
        this.price = 0;
    }
    return Initial;
})();
var DrPeppers = (function () {
    function DrPeppers() {
        this.name = "DrPepper";
        this.price = 2.30;
        this.category = new DrPepper();
    }
    return DrPeppers;
})();
var CocaColas = (function () {
    function CocaColas() {
        this.name = "CocaCola";
        this.price = 2.30;
        this.category = new CocaCola();
    }
    return CocaColas;
})();
var RootBeers = (function () {
    function RootBeers() {
        this.name = "RootBeer";
        this.price = 2.30;
        this.category = new RootBeer();
    }
    return RootBeers;
})();
var SevenupCherrys = (function () {
    function SevenupCherrys() {
        this.name = "SevenupCherry";
        this.price = 2.30;
        this.category = new SevenupCherry();
    }
    return SevenupCherrys;
})();
var SevenupLimes = (function () {
    function SevenupLimes() {
        this.name = "SevenupLime";
        this.price = 2.30;
        this.category = new SevenupLime();
    }
    return SevenupLimes;
})();
var Sprites = (function () {
    function Sprites() {
        this.name = "Sprite";
        this.price = 2.30;
        this.category = new Sprite();
    }
    return Sprites;
})();
/// <reference path="product.ts" />
var productFactory = (function () {
    function productFactory() {
    }
    productFactory.GetProduct = function () {
        var random = Math.floor(Math.random() * 6);
        switch (random) {
            case 0: return new CocaColas();
            case 1: return new RootBeers();
            case 2: return new Sprites();
            case 3: return new DrPeppers();
            case 4: return new SevenupCherrys();
            case 5: return new SevenupLimes();
        }
    };
    return productFactory;
})();
/// <reference path="./coin.ts" />
/// <reference path="./product.ts" />
/// <reference path="productFactory.ts" />
var VendingMachineSize;
(function (VendingMachineSize) {
    VendingMachineSize[VendingMachineSize["small"] = 6] = "small";
    VendingMachineSize[VendingMachineSize["medium"] = 9] = "medium";
    VendingMachineSize[VendingMachineSize["large"] = 12] = "large";
})(VendingMachineSize || (VendingMachineSize = {}));
var Cell = (function () {
    function Cell(product) {
        this.product = product;
        this.stock = ko.observable(3);
        this.sold = ko.observable(false);
    }
    return Cell;
})();
var VendingMachine = (function () {
    function VendingMachine() {
        var _this = this;
        this.paid = ko.observable(0);
        this.selectedCell = ko.observable(new Cell(new Initial()));
        this.cells = ko.observableArray([]);
        this.acceptedCoins = [new Dime(), new Quarter(), new Half(), new Dollar()];
        this.canPay = ko.pureComputed(function () { return _this.paid() -
            _this.selectedCell().product.price >= 0; });
        this.select = function (cell) {
            cell.sold(false);
            _this.selectedCell(cell);
        };
        this.acceptCoin = function (coin) {
            var oldTotal = _this.paid();
            _this.paid(oldTotal + coin.value);
        };
        this.pay = function () {
            if (_this.selectedCell().stock() < 1) {
                alert("i'm sorry, we are out of them!");
                return;
            }
            var currentPaid = _this.paid();
            _this.paid(Math.round(((currentPaid -
                _this.selectedCell().product.price) * 100)) / 100);
            var currentStock = _this.selectedCell().stock();
            _this.selectedCell().stock(currentStock - 1);
            _this.selectedCell().sold(true);
        };
    }
    Object.defineProperty(VendingMachine.prototype, "size", {
        set: function (givenSize) {
            this.cells([]);
            for (var index = 0; index < givenSize; index++) {
                var product = productFactory.GetProduct();
                this.cells.push(new Cell(product));
            }
        },
        enumerable: true,
        configurable: true
    });
    return VendingMachine;
})();
/// <reference path="vendingMachine.ts" />
var machine = new VendingMachine();
machine.size = VendingMachineSize.medium;
ko.applyBindings(machine);
//# sourceMappingURL=app.js.map