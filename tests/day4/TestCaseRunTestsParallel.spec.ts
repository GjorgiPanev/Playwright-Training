import { test, expect } from '@playwright/test';
import { ElementsQADemoPage } from '../day3/qademo-page';
import { BookStore } from '../day3/book-store-page';
import * as fs from 'fs';
const data = JSON.parse(fs.readFileSync('../Playwright-Training/tests/fixtures/homework3/bookstore.json',"utf-8"));

test.describe.configure({mode:'parallel'});

    test('runs in parallel 1', async ({ page }) => {
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

    test('runs in parallel 2', async ({ page }) => {
        const elementsQADemoPage = new ElementsQADemoPage(page);
        const bookstoreQA = new BookStore(page);
        await elementsQADemoPage.goto();
        await bookstoreQA.ClickOnBookStore();
        await bookstoreQA.ClickOnLoginPage();
        await bookstoreQA.ClickOnUserName(data.userName);
        await bookstoreQA.ClickOnPassword(data.PasswordSB);
        await bookstoreQA.ClickOnLogInButton();
        await expect(page.getByText(data.userName)).toBeVisible();
        await bookstoreQA.ClickOnLogOutButton();
        await expect(page.getByRole('heading', { name: 'Login in Book Store' })).toBeVisible();
    });