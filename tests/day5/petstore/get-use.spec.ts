import { test, expect } from '@playwright/test';

test('Get user', async({ request }) => {
    const getPet = await request.get(`https://petstore.swagger.io/v2/user/gjorgip`);
    expect(getPet.ok()).toBeTruthy();
    expect(getPet.status()).toBe(200);
});