import { test, expect } from '@playwright/test';
import * as fs from 'fs';
const data = JSON.parse(fs.readFileSync('../Playwright-Training/tests/fixtures/data/single-user.json',"utf-8"));
import { SaucedemoPage } from '../day2/sauce-demo';

test.describe("Test Suite for Automation tests", ()=> {

  test('test1 with page object', async ({ page }) => {
    const sauceDemoPage = new SaucedemoPage(page);
    await sauceDemoPage.goto();
    await sauceDemoPage.typeUsername(data.username);
    await sauceDemoPage.typePassword(data.password);
    await sauceDemoPage.clickLogin();
    await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');
  });

  test('test2 with page object', async ({ page }) => {
    const sauceDemoPage = new SaucedemoPage(page);
    await sauceDemoPage.goto();
    await sauceDemoPage.typeUsername(data.username);
    await sauceDemoPage.typePassword(data.password);
    await sauceDemoPage.clickLogin();
    await sauceDemoPage.addBP();
    await sauceDemoPage.addBL();
  });
})