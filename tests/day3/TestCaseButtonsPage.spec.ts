import { test, expect } from '@playwright/test';
import { ElementsQADemoPage } from '../day3/qademo-page';
import { ButtonsPage } from '../day3/buttons-page';

test.describe("Test Suite for Buttons", ()=>{
    
    test('Test the buttons', async ({ page }) => {
        const elementsQADemoPage = new ElementsQADemoPage(page);
        const buttonspageDemo = new ButtonsPage(page);
        await elementsQADemoPage.goto();
        await elementsQADemoPage.clickElements();
        await buttonspageDemo.ClickOnButtonsPage();
        await buttonspageDemo.ClickOnDoubleClick();
        await buttonspageDemo.ClickOnRightClick();
        await buttonspageDemo.ClickOnClickMe();
        await expect(page.getByText('You have done a double click')).toBeVisible();
        await expect(page.getByText('You have done a right click')).toBeVisible();
        await expect(page.getByText('You have done a dynamic click')).toBeVisible();
    });
});