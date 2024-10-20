import { test, expect } from '@playwright/test';
import { ElementsQADemoPage } from '../qademo-page';
import { BookStore } from '../book-store-page';
import * as fs from 'fs';
const data = JSON.parse(fs.readFileSync('../Playwright-Training/tests/fixtures/homework3/bookstore.json',"utf-8"));

test.describe("Test Suite for Log in Book Store", ()=> {

    test('Test for Log in and Log out', {tag: ['@bookstore']},async ({ page }) => {
        const elementsQADemoPage = new ElementsQADemoPage(page);
        const bookstoreQA = new BookStore(page);
        await elementsQADemoPage.goto();
        await bookstoreQA.ClickOnBookStore();
        await bookstoreQA.ClickOnLoginPage();
        await bookstoreQA.LogInToBookStore(data.userName, data.PasswordSB);
        await bookstoreQA.ClickOnLogInButton();
        await expect(page.getByText(data.userName)).toBeVisible();
        await bookstoreQA.ClickOnLogOutButton();
        await expect(page.getByRole('heading', { name: 'Login in Book Store' })).toBeVisible();
    });

    test('Test2 for Log in and Log out', {tag: ['@bookstore']},async ({ page }) => {
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

});