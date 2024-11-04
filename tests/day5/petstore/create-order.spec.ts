import { test, expect } from '@playwright/test';

test('Create a new order', async({ request }) => {
    const response = await request.post(`https://petstore.swagger.io/v2/store/order`, {
        data: {
            "id": 9223372036854776001,
            "petId": 11,
            "quantity": 1,
            "shipDate": "2024-11-04T23:08:40.429+0000",
            "status": "placed",
            "complete": true
          }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const orderDetail = await response.json();
});