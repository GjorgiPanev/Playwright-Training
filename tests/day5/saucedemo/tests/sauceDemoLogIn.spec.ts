import { expect } from '@playwright/test';
import { test } from '../basefixtures';
import * as fs from 'fs';
const data = JSON.parse(fs.readFileSync('../Playwright-Training/tests/day5/saucedemo/test-data/login.json',"utf-8"));

test.describe("Test Suite for verify log in the page Sauce Demo", ()=> {

    test.beforeEach(async ({page})=>{
        await page.goto('https://www.saucedemo.com');
    });

    test("Log in test", async({logIn})=>{
        await logIn.clickOnUserName(data.username);
        await logIn.clickOnPassword(data.password);
        await logIn.clickOnLogInButton();
        await expect(logIn.logoText).toHaveText('Swag Labs');
    });

    test.afterEach(async ({page})=>{
        await page.close();
    });
})