import { expect, type Locator, type Page } from '@playwright/test';
import * as fs from 'fs';
const login = JSON.parse(fs.readFileSync('../playwright-training/tests/fixtures/locators/login.json', 'utf-8'));


export class SaucedemoPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly login: Locator;
    readonly add1: Locator;
    readonly add2: Locator;


    constructor(page: Page) {
        this.page = page;
        this.username = page.locator(login.username);
        this.password= page.locator(login.password);
        this.login = page.locator(login.loginBtn);
        this.add1 = page.locator(login.addBackpack);
        this.add2 = page.locator(login.addBikeLight);

      }

      async goto() {
        await this.page.goto('/');
      }
    
      async typeUsername(user) {
        await this.username.fill(user);
      }

      async typePassword(pass){
        await this.password.fill(pass);
      }

      async clickLogin(){
        await this.login.click();
      }

      async addBP(){
        await this.add1.click();
      }
      
      async addBL(){
        await this.add2.click();
      }


}