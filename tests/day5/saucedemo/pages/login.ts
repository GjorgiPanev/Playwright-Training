import { type Locator, type Page } from '@playwright/test';

export class LogIn{

    readonly userName: Locator;
    readonly password: Locator;
    readonly logIn: Locator;
    readonly logoText: Locator;

    constructor(page:Page){
        this.userName = page.locator('#user-name');
        this.password = page.locator('#password');
        this.logIn = page.locator('#login-button');
        this.logoText = page.locator("[class='app_logo']");
    }

    async clickOnUserName(username: string){
        await this.userName.fill(username);
    }

    async clickOnPassword(password: string){
        await this.password.fill(password);
    }

    async clickOnLogInButton(){
        await this.logIn.click();
    }
}