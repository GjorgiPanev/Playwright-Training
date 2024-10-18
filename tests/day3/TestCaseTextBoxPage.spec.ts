import { test, expect } from '@playwright/test';
import { ElementsQADemoPage } from './qademo-page';
import * as fs from 'fs';
const data = JSON.parse(fs.readFileSync('../Playwright-Training/tests/fixtures/homework3/textbox.json',"utf-8"));

test.describe("Test Suite for Text box", ()=> {

    test('Test the text box functions', async({page}) => {
        const elementsQADemoPage = new ElementsQADemoPage(page);
        await elementsQADemoPage.goto();
        await elementsQADemoPage.clickElements();
        await elementsQADemoPage.clickTextBox();
        await elementsQADemoPage.typeFullName(data.fullname);
        await elementsQADemoPage.typeEmail(data.email);
        await elementsQADemoPage.typeCurrentAdress(data.currentaddress);
        await elementsQADemoPage.typePermanentAddress(data.permanentaddress);
        await elementsQADemoPage.clickSubmit();
        await elementsQADemoPage.ExpectFullName(data.fullName);
        await expect(page.getByText(data.expectemail)).toBeVisible();
        await expect(page.getByText(data.expectcaddress)).toBeVisible();
        await expect(page.getByText(data.expectpaddress)).toBeVisible();
    });
});