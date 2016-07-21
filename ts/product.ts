import * as categories from "./productCategory";

export interface Product {
    name: string;
    price: number;
    category?: categories.ProductCategory;
}

export class Initial implements Product {
    name = "Please select a product";
    price = 0;
}

export class DrPeppers implements Product {
    name = "DrPepper";
    price = 2.30;
    category = new categories.DrPepperCategory();
}

export class CocaColas implements Product {
    name = "CocaCola";
    price = 2.30;
    category = new categories.CocaColaCategory();
}

export class RootBeers implements Product {
    name = "RootBeer";
    price = 2.30;
    category = new categories.RootBeerCategory();
}

export class SevenupCherrys implements Product {
    name = "SevenupCherry";
    price = 2.30;
    category = new categories.SevenupCherryCategory();
}

export class SevenupLimes implements Product {
    name = "SevenupLime";
    price = 2.30;
    category = new categories.SevenupLimeCategory();
}

export class Sprites implements Product {
    name = "Sprite";
    price = 2.30;
    category = new categories.SpriteCategory();
}