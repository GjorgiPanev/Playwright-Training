import { test, expect } from '@playwright/test';

test.describe("Test Suite for Update User tests", ()=> {

test.beforeEach("Navigate to Login", async({page})=>{
        await page.goto('/');
     })

test.describe("Test Suite for Update Username tests", ()=> {

    test('Update username with valid username', async ({ page }) => {
 
    });

    test('Update username with invalid username', async ({ page }) => {
 
    });

    test('Update username with empty username', async ({ page }) => {
 
    });

})

test.describe("Test Suite for Update Username tests", ()=> {

    test('Update password with allowed', async ({ page }) => {
 
    });

})

test.afterEach("Tear down for out tests", async()=>{
    
})


})