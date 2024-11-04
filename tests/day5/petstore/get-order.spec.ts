import { test, expect } from '@playwright/test';

test('Get order', async({ request }) => {
    const getPet = await request.get(`https://petstore.swagger.io/v2/store/inventory`);
    expect(getPet.ok()).toBeTruthy();
    expect(getPet.status()).toBe(200);
});