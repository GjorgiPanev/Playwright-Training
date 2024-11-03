import { test, expect } from '@playwright/test';

test('Get Pet By ID', async({ request }) => {
    const getPet = await request.get(`https://petstore.swagger.io/v2/pet/6111`);
    //expect(getPet.ok()).toBeTruthy();
    expect(getPet.status()).toBe(404);
});