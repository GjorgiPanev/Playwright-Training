import { type Locator, type Page } from '@playwright/test';

export class HomePage{
    readonly addToCart: Locator;
    readonly cart: Locator;
    readonly search: Locator;

    constructor(page:Page){
        this.addToCart = page.locator('.pricebar button');
        this.cart = page.locator('#shopping_cart_container');
    }

    async addItemToCart(index: number){
        await this.addToCart.nth(index).click();
    }
    async clickOnCart(){
        await this.cart.click();
    }
}