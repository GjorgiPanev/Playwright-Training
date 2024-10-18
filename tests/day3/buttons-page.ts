import { Expect, expect, type Locator, type Page } from '@playwright/test';


export class ButtonsPage{

    readonly buttonsPage: Locator;
    readonly doubleClick: Locator;
    readonly rightClick: Locator;
    readonly clickMe: Locator;

    constructor(page : Page){

        this.buttonsPage = page.locator('li').filter({ hasText: 'Buttons' });
        this.doubleClick = page.getByRole('button', { name: 'Double Click Me' });
        this.rightClick = page.getByRole('button', { name: 'Right Click Me' });
        this.clickMe = page.getByRole('button', { name: 'Click Me', exact: true });
    }

    async ClickOnButtonsPage(){
        await this.buttonsPage.click();
    }

    async ClickOnDoubleClick(){
        await this.doubleClick.dblclick();
    }

    async ClickOnRightClick(){
        await this.rightClick.click({button: 'right'});
    }

    async ClickOnClickMe(){
        await this.clickMe.click();
    }
}