import { test, expect } from '@playwright/test';

test('Delete Pet By Id', async({ request }) => {
    const deletePet = await request.delete(`https://petstore.swagger.io/v2/pet/6111`);
    expect(deletePet.ok()).toBeTruthy();
    expect(deletePet.status()).toBe(200);
});