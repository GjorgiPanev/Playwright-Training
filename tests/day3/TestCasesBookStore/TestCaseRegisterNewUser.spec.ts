import { test, expect } from '@playwright/test';
import { ElementsQADemoPage } from '../qademo-page';
import { BookStore } from '../book-store-page';
import { WebTabletPage } from '../webelements-page';
import * as fs from 'fs';
const data = JSON.parse(fs.readFileSync('../Playwright-Training/tests/fixtures/homework3/bookstore.json',"utf-8"));

test.describe("Test Suite for Book Store Application - Register new user", ()=>{

    test('Test case for register new user', async ({ page }) =>{
        const elementsQADemoPage = new ElementsQADemoPage(page);
        const bookstoreQA = new BookStore(page);
        const webelementsQA = new WebTabletPage(page);
        await elementsQADemoPage.goto();
        await bookstoreQA.ClickOnBookStore();
        await bookstoreQA.ClickOnLoginPage();
        await bookstoreQA.ClickOnNewUser();
        await webelementsQA.writeFirstName(data.firstName);
        await webelementsQA.writeLastName(data.lastName);
        await bookstoreQA.ClickOnUserName(data.userName);
        await bookstoreQA.ClickOnPassword(data.PasswordSB);
        page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => {});
        });
        await bookstoreQA.ClickOnRegister();
    });

});