import { expect, type Locator, type Page } from '@playwright/test';
import * as fs from 'fs';
const bookstoreLocators = JSON.parse(fs.readFileSync('../playwright-training/tests/fixtures/homework3/bookstore-locators.json', 'utf-8'));

export class BookStore{

    readonly bookStorePage: Locator;
    readonly loginPage: Locator;
    readonly newUser: Locator;
    readonly userName: Locator;
    readonly passwordBS: Locator;
    readonly register: Locator;
    readonly loginButton: Locator;
    readonly logoutButton: Locator;
    readonly searchButton: Locator;
    readonly profilePage: Locator;
    readonly goToBookStore: Locator;

    constructor(page : Page){
        this.bookStorePage = page.locator('div').filter({ hasText: /^Book Store Application$/ }).first();
        this.loginPage = page.locator('li').filter({ hasText: 'Login' });
        this.newUser = page.getByRole('button', { name: 'New User' });
        this.userName = page.getByPlaceholder(bookstoreLocators.username);
        this.passwordBS = page.getByPlaceholder(bookstoreLocators.passwordSB);
        this.register = page.getByRole('button', { name: 'Register' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.logoutButton = page.getByRole('button', { name: 'Log out' });
        this.searchButton = page.getByPlaceholder('Type to search');
        this.profilePage = page.locator('li').filter({ hasText: 'Profile' });
        this.goToBookStore = page.getByRole('button', { name: 'Go To Book Store' });
    }

    async ClickOnBookStore(){
        await this.bookStorePage.click();
    }

    async ClickOnLoginPage(){
        this.loginPage.click();
    }

    async ClickOnNewUser(){
        await this.newUser.click();
    }

    async ClickOnUserName(username){
        await this.userName.fill(username);
    }

    async ClickOnPassword(password){
        await this.passwordBS.fill(password);
    }

    async ClickOnRegister(){
        await this.register.click();
    }

    async ClickOnLogInButton(){
        await this.loginButton.click({ force: true });
    }

    async ClickOnLogOutButton(){
        await this.logoutButton.click({ force: true });
    }

    async LogInToBookStore(username, password){
        await this.userName.fill(username);
        await this.passwordBS.fill(password);
    }

    async ClickOnSearchButton(searchBook){
        await this.searchButton.fill(searchBook);
    }

    async ClickOnProfilePage(){
        await this.profilePage.click();
    }

    async ClickOnGoToBookStoreButton(){
        await this.goToBookStore.click();
    }
}