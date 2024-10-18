import { expect, type Locator, type Page } from '@playwright/test';
import * as fs from 'fs';
const radiobuttonlocators = JSON.parse(fs.readFileSync('../playwright-training/tests/fixtures/homework3/checkbox-locators.json', 'utf-8'));

export class RadioButtonPage{

    readonly radioButton: Locator;
    readonly clickYes: Locator;

    constructor(page : Page){
        this.radioButton = page.locator('li').filter({ hasText: 'Radio Button' });
        this.clickYes = page.getByText(radiobuttonlocators.yesbutton);
    }

    async clickRadioPage(){
        await this.radioButton.click();
    }

    async clickYesButton(){
        await this.clickYes.click();
    }
}