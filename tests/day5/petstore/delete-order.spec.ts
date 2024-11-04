import { test, expect } from '@playwright/test';
import { cp } from 'fs';

test('Delete order', async({ request, baseURL }) => {
    const newOrder = await request.post(`${baseURL}store/order`, {
        data: {
            "id": Date.now(),
            "petId": 6199,
            "quantity": 10,
            "shipDate": "2023-05-07T12:48:50.940Z",
            "status": "placed",
            "complete": true
        }
    });

    expect(newOrder.ok()).toBeTruthy();
    expect(newOrder.status()).toBe(200);
    const orderId = (await newOrder.json()).id
    
    const deleteOrder = await request.delete(`${baseURL}store/order/`+orderId);

    expect(deleteOrder.ok()).toBeTruthy();
    expect(deleteOrder.status()).toBe(200);
    expect(Number((await deleteOrder.json()).message)).toBe(orderId);
});