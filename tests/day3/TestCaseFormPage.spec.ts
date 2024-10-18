import { test, expect } from '@playwright/test';
import { ElementsQADemoPage } from '../day3/qademo-page';
import { WebTabletPage } from '../day3/webelements-page';
import { Forms } from '../day3/forms-page';
import * as fs from 'fs';
const data = JSON.parse(fs.readFileSync('../Playwright-Training/tests/fixtures/homework3/textbox.json',"utf-8"));

test.describe("Test Suite for Forms", ()=>{
    
    test('Test case for the form page', async ({ page }) => {
        const elementsQADemoPage = new ElementsQADemoPage(page);
        const webtablespage = new WebTabletPage(page);
        const formspageDemo= new Forms(page);
        await elementsQADemoPage.goto();
        await formspageDemo.ClickOnFormsPage();
        await formspageDemo.ClickOnPracticeFormPage();
        await webtablespage.writeFirstName(data.firstname);
        await webtablespage.writeLastName(data.lastname);
        await elementsQADemoPage.typeEmail(data.email);
        await formspageDemo.ClickOnGender();
        await formspageDemo.EnterMobilePhone('078078078');
        await formspageDemo.ClickOnDateOFBirth();
        await formspageDemo.SelectYear('1999');
        await formspageDemo.SelectMonth('3');
        await formspageDemo.ClickOnDay();
        await formspageDemo.SelectSports();
        await formspageDemo.SelectReading();
        await formspageDemo.SelectMusic();
        //await formspageDemo.SelectPicture('AI.png');
        await elementsQADemoPage.typeCurrentAdress(data.currentaddress);
        await formspageDemo.ClickOnState();
        await formspageDemo.SelectState();
        await formspageDemo.ClickOnCity();
        await formspageDemo.SelectCity();
        await elementsQADemoPage.clickSubmit();
    });
})