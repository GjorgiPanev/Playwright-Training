import { test, expect } from '@playwright/test';
import * as fs from 'fs';
const data = JSON.parse(fs.readFileSync('../Playwright-Training/tests/fixtures/data/single-user.json',"utf-8"));
const homework = JSON.parse(fs.readFileSync('../Playwright-Training/tests/fixtures/homework/homework.json',"utf-8"));




test('test1', async ({ page }) => {
    await page.goto('/');
    await page.locator(homework.username).fill(data.username);
    await page.locator(homework.password).fill(data.password);
    await page.locator(homework.loginBtn).click();
    await expect(page.locator(homework.title)).toContainText(data.title);
    await page.locator(homework.add1).click();
    await page.locator(homework.add2).click();
});

