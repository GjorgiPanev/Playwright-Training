import { test, expect } from '@playwright/test';

test.describe("Test Suite", ()=> {

test.describe("Tests1", ()=> {

    test('Test1 @smoke', async ({ page }) => {
 
    });

    test('Test2', {tag: ['@smoke', '@sprint1']}, async ({ page }) => {
 
    });

    test('Test3', async ({ page }) => {
 
    });

})

test.describe("Test Suite1", ()=> {

    test('Test4', async ({ page }) => {
 
    });

})


})