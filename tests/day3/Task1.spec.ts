import { test, expect } from '@playwright/test';

test.describe("Test Suite", ()=>{

test.skip('Test1', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');
});

test('Test2', async ({ page }) => {
  await page.goto('https://demoqa.com/');
});

});