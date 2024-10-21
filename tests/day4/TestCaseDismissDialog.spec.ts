import { test, expect } from '@playwright/test';

test('Test Case dismiss alert', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await page.locator('div').filter({ hasText: /^Alerts, Frame & Windows$/ }).first().click();
    await page.locator('li').filter({ hasText: 'Alerts' }).click();
    page.on('dialog', dialog => { dialog.dismiss()});
    await page.locator('#alertButton').click();
  });