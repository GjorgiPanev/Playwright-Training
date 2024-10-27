import { test as base, expect } from '@playwright/test';
import { log } from 'console';

// Extend the test with a custom login fixture
const test = base.extend({
    // Define a fixture named 'login'
    login: async ({ page }, use) => {
        await page.goto('https://www.saucedemo.com');

        // Log in using standard credentials
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');

        // Verify successful login by checking for an element on the inventory page
        await expect(page.locator('.inventory_list')).toBeVisible();

        // Use the page object for further tests
        await use(page);
    },
});


test.describe("Test Suite for Authentication tests", () => {
    // Use the extended test with the login fixture
    test('check inventory page', async ({ login }) => {
        // Check that the inventory page is shown
        const itemCount = await login.locator('.inventory_item').count();
        expect(itemCount).toBeGreaterThan(0);
    });


    // Test case to add an item to the cart
    test('add an item to the cart', async ({ login }) => {
        // Add the first item to the cart
        await login.click('.inventory_item:first-child button');

        // Verify the cart shows 1 item
        const cartBadge = login.locator('.shopping_cart_badge');
        await expect(cartBadge).toHaveText('1');
    });

    test('get the name of the item', async({ login }) => {
        await login.click('.inventory_item:first-child button');
        //const nameItem = login.locator('.inventory_item:first-child div div a div');
        //const nameItem = login.textContent('.inventory_item:first-child div div a div');
        //console.log(nameItem);
        //await expect(nameItem).toHaveText('Sauce Labs Backpack');
        //await login.click('.shopping_cart_container');
        //const itemInTheCart = login.locator('.cart_item_label a div');
        //await expect(itemInTheCart).toMatch(itemInTheCart);
    });

    test('remove the item', async({ login }) => {
        await login.click('.inventory_item:first-child button');
        await login.click('.shopping_cart_container');
        await login.click('#remove-sauce-labs-backpack');
        const removedItems = await login.locator('.removed_cart_item').count();
        await expect(removedItems).toEqual(1);
    });

    test('continue shopping', async({ login }) => {
        await login.click('.inventory_item:first-child button');
        await login.click('.shopping_cart_container');
        await login.click('#remove-sauce-labs-backpack');
        await login.click('#continue-shopping');
    });

    test('go to checkout', async({ login }) => {
        await login.click('.inventory_item:first-child button');
        await login.click('.shopping_cart_container');
        await login.click('#checkout');
        await login.fill('#first-name', 'Gjorgi');
        await login.fill('#last-name', 'P');
        await login.fill('#postal-code', '1111');
        await login.click('#continue');
        await expect(login.locator('.summary_total_label')).toHaveText('Total: $32.39');
        await login.click('#finish');
        await expect(login.locator('#checkout_complete_container h2')).toHaveText('Thank you for your order!');
        await login.click('#back-to-products');
    });
});