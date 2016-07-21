define(["require", "exports", "./productCategory"], function (require, exports, categories) {
    var Initial = (function () {
        function Initial() {
            this.name = "Please select a product";
            this.price = 0;
        }
        return Initial;
    })();
    exports.Initial = Initial;
    var DrPeppers = (function () {
        function DrPeppers() {
            this.name = "DrPepper";
            this.price = 2.30;
            this.category = new categories.DrPepperCategory();
        }
        return DrPeppers;
    })();
    exports.DrPeppers = DrPeppers;
    var CocaColas = (function () {
        function CocaColas() {
            this.name = "CocaCola";
            this.price = 2.30;
            this.category = new categories.CocaColaCategory();
        }
        return CocaColas;
    })();
    exports.CocaColas = CocaColas;
    var RootBeers = (function () {
        function RootBeers() {
            this.name = "RootBeer";
            this.price = 2.30;
            this.category = new categories.RootBeerCategory();
        }
        return RootBeers;
    })();
    exports.RootBeers = RootBeers;
    var SevenupCherrys = (function () {
        function SevenupCherrys() {
            this.name = "SevenupCherry";
            this.price = 2.30;
            this.category = new categories.SevenupCherryCategory();
        }
        return SevenupCherrys;
    })();
    exports.SevenupCherrys = SevenupCherrys;
    var SevenupLimes = (function () {
        function SevenupLimes() {
            this.name = "SevenupLime";
            this.price = 2.30;
            this.category = new categories.SevenupLimeCategory();
        }
        return SevenupLimes;
    })();
    exports.SevenupLimes = SevenupLimes;
    var Sprites = (function () {
        function Sprites() {
            this.name = "Sprite";
            this.price = 2.30;
            this.category = new categories.SpriteCategory();
        }
        return Sprites;
    })();
    exports.Sprites = Sprites;
});
//# sourceMappingURL=product.js.map