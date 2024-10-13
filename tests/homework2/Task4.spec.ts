import { test, expect } from '@playwright/test';
import * as fs from 'fs';
const data = JSON.parse(fs.readFileSync('../Playwright-Training/tests/fixtures/data/single-user.json',"utf-8"));

test('test1', async ({ page }) => {
    await page.goto('/');
    await page.locator('[data-test="username"]').fill(data.username);
    await page.locator('[data-test="password"]').fill(data.password);
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="title"]')).toContainText(data.title);
  });