import { test, expect } from '@playwright/test';
import { ElementsQADemoPage } from '../day3/qademo-page';
import { CheckBoxQAPage } from '../day3/checkbox-page';

test.describe("Test Suite for Check box", ()=> {

    test('Test the Check box functions', async ({ page }) => {
        const elementsQADemoPage = new ElementsQADemoPage(page);
        const checkBoxQaPage = new CheckBoxQAPage(page);
        await elementsQADemoPage.goto();
        await elementsQADemoPage.clickElements();
        await checkBoxQaPage.clickCheckBox();
        await checkBoxQaPage.clickArrow();
        await checkBoxQaPage.clickHome();
        await checkBoxQaPage.clickDesktop();
        await checkBoxQaPage.clickDocuments();
        await checkBoxQaPage.clickDownloads();
    });
});