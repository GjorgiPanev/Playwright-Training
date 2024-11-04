import{ test, expect } from '@playwright/test';

test("Create a new user", async ({ request, baseURL}) => {

  const response = await request.post(`${baseURL}user`, {
    data : {
      "id": 0,
      "username": "gjorgip",
      "firstName": "gjorgi",
      "lastName": "gjorgi",
      "email": "test@mail.com",
      "password": "Hello@123",
      "phone": "789789789",
      "userStatus": 0
    },
  });

  const results = await response.json();
  const userID = results.message;

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200); 

});