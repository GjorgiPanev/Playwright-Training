import { test, expect } from '@playwright/test';

test('Create a new pet', async({ request }) => {
    const response = await request.post(`https://petstore.swagger.io/v2/pet`, {
        data: {
            "id": 6111,
            "category": {
              "id": 2020,
              "name": "playwright dog"
            },
            "name": "playwright doggie",
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 1708,
                "name": "black"
              }
            ],
            "status": "available"
        }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const petDetail = await response.json();
});