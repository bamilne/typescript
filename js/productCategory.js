var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    var ProductCategory = (function () {
        function ProductCategory() {
            this.imgPath = "http://www.tbotech.com/images/";
        }
        return ProductCategory;
    })();
    exports.ProductCategory = ProductCategory;
    var DrPepperCategory = (function (_super) {
        __extends(DrPepperCategory, _super);
        function DrPepperCategory() {
            _super.apply(this, arguments);
            this.name = "DrPepper";
        }
        DrPepperCategory.prototype.getImageUrl = function () {
            return this.imgPath + "drpepper-popcansafe-sm.jpg";
        };
        return DrPepperCategory;
    })(ProductCategory);
    exports.DrPepperCategory = DrPepperCategory;
    var CocaColaCategory = (function (_super) {
        __extends(CocaColaCategory, _super);
        function CocaColaCategory() {
            _super.apply(this, arguments);
            this.name = "CocaCola";
        }
        CocaColaCategory.prototype.getImageUrl = function () {
            return this.imgPath + "coke-can-secret-safe-sm.jpg";
        };
        return CocaColaCategory;
    })(ProductCategory);
    exports.CocaColaCategory = CocaColaCategory;
    var RootBeerCategory = (function (_super) {
        __extends(RootBeerCategory, _super);
        function RootBeerCategory() {
            _super.apply(this, arguments);
            this.name = "RootBeer";
        }
        RootBeerCategory.prototype.getImageUrl = function () {
            return this.imgPath + "rootbeer-cansafe-sm.jpg";
        };
        return RootBeerCategory;
    })(ProductCategory);
    exports.RootBeerCategory = RootBeerCategory;
    var SevenupCherryCategory = (function (_super) {
        __extends(SevenupCherryCategory, _super);
        function SevenupCherryCategory() {
            _super.apply(this, arguments);
            this.name = "SevenupCherry";
        }
        SevenupCherryCategory.prototype.getImageUrl = function () {
            return this.imgPath + "cherry7up-sodacansafe-sm.jpg";
        };
        return SevenupCherryCategory;
    })(ProductCategory);
    exports.SevenupCherryCategory = SevenupCherryCategory;
    var SevenupLimeCategory = (function (_super) {
        __extends(SevenupLimeCategory, _super);
        function SevenupLimeCategory() {
            _super.apply(this, arguments);
            this.name = "SevenupLime";
        }
        SevenupLimeCategory.prototype.getImageUrl = function () {
            return this.imgPath + "7up-can-safe-sm.jpg";
        };
        return SevenupLimeCategory;
    })(ProductCategory);
    exports.SevenupLimeCategory = SevenupLimeCategory;
    var SpriteCategory = (function (_super) {
        __extends(SpriteCategory, _super);
        function SpriteCategory() {
            _super.apply(this, arguments);
            this.name = "Sprite";
        }
        SpriteCategory.prototype.getImageUrl = function () {
            return this.imgPath + "spritecan-hidden-safe-sm.jpg";
        };
        return SpriteCategory;
    })(ProductCategory);
    exports.SpriteCategory = SpriteCategory;
});
//# sourceMappingURL=productCategory.js.map