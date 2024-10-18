import { test, expect } from '@playwright/test';
import { ElementsQADemoPage } from './qademo-page';
import { BrowserWindows } from '../day3/browser-windows';

test.describe("Test Suite for Browser Windows Tests", ()=> {

    test('test', async ({ page }) => {
        const elementsQADemoPage = new ElementsQADemoPage(page);
        const browserWindowsQAPage = new BrowserWindows(page);
        await elementsQADemoPage.goto();
        await browserWindowsQAPage.ClickOnAFWPage();
        await browserWindowsQAPage.ClickOnBrowserWindows();
        const page1Promise = page.waitForEvent('popup');
        await browserWindowsQAPage.ClickOnNewTab();
        const page1 = await page1Promise;
        await expect(page1.getByRole('heading', { name: 'This is a sample page' })).toBeVisible();
    });

});