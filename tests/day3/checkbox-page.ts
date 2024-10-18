import { expect, type Locator, type Page } from '@playwright/test';
import * as fs from 'fs';
const checkboxLocators = JSON.parse(fs.readFileSync('../playwright-training/tests/fixtures/homework3/checkbox-locators.json', 'utf-8'));

export class CheckBoxQAPage{

    readonly checkBox: Locator;
    readonly arrow: Locator;
    readonly homeCheckBox: Locator;
    readonly desktopCheckBox: Locator;
    readonly documentsCheckBox: Locator;
    readonly downloadsCheckBox: Locator;

    constructor(page : Page){
        this.checkBox = page.locator('li').filter({ hasText: 'Check Box' });
        this.arrow = page.getByLabel(checkboxLocators.arrow);
        this.homeCheckBox = page.locator('label').filter({ hasText: 'Home' }).getByRole('img').first();
        this.desktopCheckBox = page.locator('label').filter({ hasText: 'Desktop' }).getByRole('img').first();
        this.documentsCheckBox = page.locator('label').filter({ hasText: 'Documents' }).getByRole('img').first();
        this.downloadsCheckBox = page.locator('label').filter({ hasText: 'Downloads' }).getByRole('img').first();
    }

    async clickCheckBox(){
        await this.checkBox.click();
    }

    async clickArrow(){
        await this.arrow.click();
    }

    async clickHome(){
        await this.homeCheckBox.click();
    }

    async clickDesktop(){
        await this.desktopCheckBox.click();
    }

    async clickDocuments(){
        await this.documentsCheckBox.click();
    }

    async clickDownloads(){
        await this.downloadsCheckBox.click();
    }

}