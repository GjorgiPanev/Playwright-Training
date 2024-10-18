import { test, expect } from '@playwright/test';
import { ElementsQADemoPage } from '../day3/qademo-page';
import { WebTabletPage } from '../day3/webelements-page';
import * as fs from 'fs';
const data = JSON.parse(fs.readFileSync('../Playwright-Training/tests/fixtures/homework3/textbox.json',"utf-8"));

test.describe("Test Suite for Web Tables", ()=> {
    
    test('Test the web tables functions', async ({ page }) => {
        const elementsQADemoPage = new ElementsQADemoPage(page);
        const webtablespage = new WebTabletPage(page);
        await elementsQADemoPage.goto();
        await elementsQADemoPage.clickElements();
        await webtablespage.clickWebTables();
        await webtablespage.clickAdd();
        await webtablespage.writeFirstName(data.firstname);
        await webtablespage.writeLastName(data.lastname);
        await elementsQADemoPage.typeEmail(data.email);
        await webtablespage.writeAge(data.age);
        await webtablespage.writeSalary(data.salary);
        await webtablespage.writeDepartment(data.department);
        await elementsQADemoPage.clickSubmit();
        await expect(page.getByRole('gridcell', { name: data.firstname, exact: true })).toBeVisible();
        await expect(page.getByRole('gridcell', { name: data.department })).toBeVisible();
    });
});