import * as products from "./product";

export default function GetProduct(): products.Product {
        let random = Math.floor(Math.random() * 6);
        switch(random) {
            case 0: return new products.CocaColas();
            case 1: return new products.RootBeers();
            case 2: return new products.Sprites();
            case 3: return new products.DrPeppers();
            case 4: return new products.SevenupCherrys();
            case 5: return new products.SevenupLimes();
        }
    }