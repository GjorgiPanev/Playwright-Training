import { expect } from '@playwright/test';
import { test } from '../basefixtures';
import * as fs from 'fs';
const data = JSON.parse(fs.readFileSync('../Playwright-Training/tests/day5/saucedemo/test-data/login.json',"utf-8"));

test.describe("Test Suite for add items to the Cart", ()=> {

    test.beforeEach(async ({page})=>{
        await page.goto('https://www.saucedemo.com');
    });

    test("Log in and add two items to the cart", async({logIn, homePage})=>{
        await logIn.clickOnUserName(data.username);
        await logIn.clickOnPassword(data.password);
        await logIn.clickOnLogInButton();
        await expect(logIn.logoText).toHaveText('Swag Labs');
        await homePage.addItemToCart(0);
        await homePage.addItemToCart(1);
    });

    test.afterEach(async ({page})=>{
        await page.close();
    });
})