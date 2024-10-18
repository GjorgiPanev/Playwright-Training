import { test, expect } from '@playwright/test';

test.describe("Test Suite", ()=>{

test('Test3', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
});

test.fixme('Test4', async ({ page }) => {
  await page.goto('https://demoqa.com/');
});

});