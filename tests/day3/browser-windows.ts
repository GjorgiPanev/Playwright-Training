import { expect, type Locator, type Page } from '@playwright/test';

export class BrowserWindows{

    readonly AFWPage: Locator;
    readonly browserWindows: Locator;
    readonly newTabButton: Locator;

    constructor(page : Page){
        this.AFWPage = page.locator('div').filter({ hasText: /^Alerts, Frame & Windows$/ }).first();
        this.browserWindows = page.locator('li').filter({ hasText: 'Browser Windows' });
        this.newTabButton = page.getByRole('button', { name: 'New Tab' });
    }

    async ClickOnAFWPage(){
        await this.AFWPage.click();
    }

    async ClickOnBrowserWindows(){
        await this.browserWindows.click();
    }

    async ClickOnNewTab(){
        await this.newTabButton.click();
    }
}