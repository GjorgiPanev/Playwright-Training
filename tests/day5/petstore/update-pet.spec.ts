import { test, expect } from '@playwright/test';

test('Update pet', async({ request }) => {
    const updatePet = await request.put(`https://petstore.swagger.io/v2/pet`, {
        data: {
            "id": 6111,
            "category": {
              "id": 2020,
              "name": "dog"
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
    expect(((await updatePet.json()).category).name).toBe("dog");
    expect(((await updatePet.json()).tags[0]).name).toBe("black");
    const petDetail = await updatePet.json();
});