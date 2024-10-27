import { test, expect } from '@playwright/test';

test('Get Pet By Status', async({ request }) => {
    const getPet = await request.get(`https://petstore.swagger.io/v2/pet/findByStatus?status=available`);
    expect(getPet.ok()).toBeTruthy();
    expect(getPet.status()).toBe(200);
});