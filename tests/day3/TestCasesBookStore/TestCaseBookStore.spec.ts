import { test, expect } from '@playwright/test';
import { ElementsQADemoPage } from '../qademo-page';
import { BookStore } from '../book-store-page';
import * as fs from 'fs';
const data = JSON.parse(fs.readFileSync('../Playwright-Training/tests/fixtures/homework3/bookstore.json',"utf-8"));

test.describe("Test Suite BookStore actions", ()=> {

    test('Test E2E example', async ({ page }) => {
        const elementsQADemoPage = new ElementsQADemoPage(page);
        const bookstoreQA = new BookStore(page);
        await elementsQADemoPage.goto();
        await bookstoreQA.ClickOnBookStore();
        await bookstoreQA.ClickOnLogInButton();
        await bookstoreQA.LogInToBookStore(data.userName, data.PasswordSB);
        //await bookstoreQA.ClickOnUserName('gjorgipanev');
        //await bookstoreQA.ClickOnPassword('Gjorgi@123');
        await bookstoreQA.ClickOnLogInButton();
        await bookstoreQA.ClickOnSearchButton(data.searchinput);
        await bookstoreQA.ClickOnProfilePage();
        await bookstoreQA.ClickOnGoToBookStoreButton();
        await bookstoreQA.ClickOnLogOutButton();
    });
});
