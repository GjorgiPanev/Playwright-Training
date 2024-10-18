import { test, expect } from '@playwright/test';
import { ElementsQADemoPage } from '../day3/qademo-page';
import { RadioButtonPage } from '../day3/radiobutton-page';

test.describe("Test Suite for Radio button", ()=> {

    test('Test the Radio button functions', async ({ page }) => {
        const elementsQADemoPage = new ElementsQADemoPage(page);
        const radiobuttonPage = new RadioButtonPage(page);
        await elementsQADemoPage.goto();
        await elementsQADemoPage.clickElements();
        await radiobuttonPage.clickRadioPage();
        await radiobuttonPage.clickYesButton();
        await expect(page.getByText('You have selected Yes')).toBeVisible();
    });
});