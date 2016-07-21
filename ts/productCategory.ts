abstract class ProductCategory {
    protected imgPath = "http://www.tbotech.com/images/";

    name: string;
    abstract getImageUrl(): string;
}

class DrPepperCategory extends ProductCategory {
    name = "DrPepper";
    getImageUrl() {
        return this.imgPath + "drpepper-popcansafe-sm.jpg";
    }
}

class CocaColaCategory extends ProductCategory {
    name = "CocaCola";
    getImageUrl() {
        return this.imgPath + "coke-can-secret-safe-sm.jpg";
    }
}

class RootBeerCategory extends ProductCategory {
    name = "RootBeer";
    getImageUrl() {
        return this.imgPath + "rootbeer-cansafe-sm.jpg";
    }
}

class SevenupCherryCategory extends ProductCategory {
    name = "SevenupCherry";
    getImageUrl() {
        return this.imgPath + "cherry7up-sodacansafe-sm.jpg";
    }
}

class SevenupLimeCategory extends ProductCategory {
    name = "SevenupLime";
    getImageUrl() {
        return this.imgPath + "7up-can-safe-sm.jpg";
    }
}

class SpriteCategory extends ProductCategory {
    name = "Sprite";
    getImageUrl() {
        return this.imgPath + "spritecan-hidden-safe-sm.jpg";
    }
}

export { ProductCategory, DrPepperCategory, CocaColaCategory, RootBeerCategory, SevenupCherryCategory, SevenupLimeCategory, SpriteCategory  }