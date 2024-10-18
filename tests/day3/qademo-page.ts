import { expect, type Locator, type Page } from '@playwright/test';
import * as fs from 'fs';
const textboxLocators = JSON.parse(fs.readFileSync('../playwright-training/tests/fixtures/homework3/textbox-locators.json', 'utf-8'));

export class ElementsQADemoPage{
    readonly page : Page;
    readonly elements: Locator;
    readonly textBox: Locator;
    readonly fullName: Locator;
    readonly email: Locator;
    readonly currentAddress: Locator;
    readonly permanentAdress: Locator;
    readonly submitButton: Locator;

    constructor(page : Page){
        this.page = page;
        this.elements = page.locator('div').filter({ hasText: /^Elements$/ }).first();
        this.textBox = page.locator('li').filter({ hasText: 'Text Box' });
        this.fullName = page.getByPlaceholder(textboxLocators.fullnamelocator);
        this.email = page.getByPlaceholder(textboxLocators.emaillocator);
        this.currentAddress = page.getByPlaceholder(textboxLocators.currentaddresslocator);
        this.permanentAdress = page.locator(textboxLocators.permanentaddresslocator);
        this.submitButton = page.getByRole('button', { name: 'Submit' });
    }

    async goto() {
        await this.page.goto('https://demoqa.com/');
    }

    async clickElements(){
        await this.elements.click();
    }

    async clickTextBox(){
        await this.textBox.click();
    }

    async typeFullName(user){
        await this.fullName.fill(user);
    }

    async typeEmail(email){
        await this.email.fill(email)
    }

    async typeCurrentAdress(address1){
        await this.currentAddress.fill(address1)
    }

    async typePermanentAddress(address2){
        await this.permanentAdress.fill(address2)
    }

    async clickSubmit(){
        await this.submitButton.click();
    }


}