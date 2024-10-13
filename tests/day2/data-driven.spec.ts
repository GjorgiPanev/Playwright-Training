import { test, expect } from '@playwright/test';
import * as fs from 'fs';
const data = JSON.parse(fs.readFileSync('../Playwright-Training/tests/fixtures/data/user.json',"utf-8"));
const login = JSON.parse(fs.readFileSync('../Playwright-Training/tests/fixtures/locators/login.json',"utf-8"));



data.forEach((user)=> {

test(`test1 ${user.username} ${user.password}`, async ({ page }) => {
    await page.goto('/');
    await page.locator(login.username).fill(user.username);
    await page.locator(login.password).fill(user.password);
    await page.locator(login.loginBtn).click();
    await expect(page.locator('[data-test="title"]')).toContainText("Products");
  });
});

