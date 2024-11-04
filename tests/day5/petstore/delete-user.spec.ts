import { test, expect } from '@playwright/test';

test('Delete user', async({ request }) => {
    const deletePet = await request.delete(`https://petstore.swagger.io/v2/user/gjorgip`);
    expect(deletePet.ok()).toBeTruthy();
    expect(deletePet.status()).toBe(200);
});