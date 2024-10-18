import { test, expect } from '@playwright/test';
import { ElementsQADemoPage } from '../day3/qademo-page';
import { CheckBoxQAPage } from '../day3/checkbox-page';
import { RadioButtonPage } from '../day3/radiobutton-page';
import { WebTabletPage } from '../day3/webelements-page';
import { ButtonsPage } from '../day3/buttons-page';
import { Forms } from '../day3/forms-page';
import * as fs from 'fs';
const data = JSON.parse(fs.readFileSync('../Playwright-Training/tests/fixtures/homework3/textbox.json',"utf-8"));

test.describe("Test Suite for Text box", ()=> {

    test('test1', async ({ page }) => {
        await page.goto('https://demoqa.com/');
        await page.locator('div').filter({ hasText: /^Elements$/ }).first().click();
        await page.locator('li').filter({ hasText: 'Text Box' }).click();
        await page.getByPlaceholder('Full Name').click();
        await page.getByPlaceholder('Full Name').fill('Gjorgi Panev');
        await page.getByPlaceholder('name@example.com').click();
        await page.getByPlaceholder('name@example.com').fill('gjorgipanev@example.com');
        await page.getByPlaceholder('Current Address').click();
        await page.getByPlaceholder('Current Address').fill('Current Address');
        await page.locator('#permanentAddress').click();
        await page.locator('#permanentAddress').fill('Permanent Adress');
        await page.getByRole('button', { name: 'Submit' }).click();
        await expect(page.getByText('Name:Gjorgi Panev')).toBeVisible();
        await expect(page.getByText('Email:gjorgipanev@example.com')).toBeVisible();
        await expect(page.getByText('Current Address :Current')).toBeVisible();
        await expect(page.getByText('Permananet Address :Permanent')).toBeVisible();
    });

    test('test2', async({page}) => {
        const elementsQADemoPage = new ElementsQADemoPage(page);
        await elementsQADemoPage.goto();
        await elementsQADemoPage.clickElements();
        await elementsQADemoPage.clickTextBox();
        await elementsQADemoPage.typeFullName(data.fullname);
        await elementsQADemoPage.typeEmail(data.email);
        await elementsQADemoPage.typeCurrentAdress(data.currentaddress);
        await elementsQADemoPage.typePermanentAddress(data.permanentaddress);
        await elementsQADemoPage.clickSubmit();
    });
});

test.describe("Test Suite for Check box", ()=> {

    test('test3', async ({ page }) => {
        await page.goto('https://demoqa.com/');
        await page.locator('div').filter({ hasText: /^Elements$/ }).first().click();
        await page.locator('li').filter({ hasText: 'Check Box' }).click();
        await page.locator('#tree-node').getByRole('img').nth(3).click();
        await page.getByLabel('Toggle').click();
        await page.locator('label').filter({ hasText: 'Desktop' }).locator('path').first().click();
        await page.locator('label').filter({ hasText: 'Documents' }).locator('path').first().click();
        await page.locator('label').filter({ hasText: 'Downloads' }).locator('path').first().click();
        await page.locator('label').filter({ hasText: 'Desktop' }).getByRole('img').first().click();
        await page.locator('label').filter({ hasText: 'Documents' }).getByRole('img').first().click();
    });

    test('test4', async ({ page }) => {
        const elementsQADemoPage = new ElementsQADemoPage(page);
        const checkBoxQaPage = new CheckBoxQAPage(page);
        await elementsQADemoPage.goto();
        await elementsQADemoPage.clickElements();
        await checkBoxQaPage.clickCheckBox();
        await checkBoxQaPage.clickArrow();
        await checkBoxQaPage.clickHome();
        await checkBoxQaPage.clickDesktop();
        await checkBoxQaPage.clickDocuments();
        await checkBoxQaPage.clickDownloads();
    });
});

test.describe("Test Suite for Radio button", ()=> {

    test('test5', async ({ page }) => {
        await page.goto('https://demoqa.com/');
        await page.locator('div').filter({ hasText: /^Elements$/ }).first().click();
        await page.locator('li').filter({ hasText: 'Radio Button' }).click();
        await page.getByText('Yes').click();
        await expect(page.getByText('You have selected Yes')).toBeVisible();
    });

    test('test6', async ({ page }) => {
        const elementsQADemoPage = new ElementsQADemoPage(page);
        const radiobuttonPage = new RadioButtonPage(page);
        await elementsQADemoPage.goto();
        await elementsQADemoPage.clickElements();
        await radiobuttonPage.clickRadioPage();
        await radiobuttonPage.clickYesButton();
        await expect(page.getByText('You have selected Yes')).toBeVisible();
    });
});

test.describe("Test Suite for Web Tables", ()=> {

    test('test7', async ({ page }) => {
        await page.goto('https://demoqa.com/');
        await page.locator('div').filter({ hasText: /^Elements$/ }).first().click();
        await page.locator('li').filter({ hasText: 'Web Tables' }).click();
        await page.getByRole('button', { name: 'Add' }).click();
        await page.getByPlaceholder('First Name').click();
        await page.getByPlaceholder('First Name').fill('Gjorgi');
        await page.getByPlaceholder('Last Name').click();
        await page.getByPlaceholder('Last Name').fill('Panev');
        await page.getByPlaceholder('name@example.com').click();
        await page.getByPlaceholder('name@example.com').fill('gjorgi@example.com');
        await page.getByPlaceholder('Age').click();
        await page.getByPlaceholder('Age').fill('25');
        await page.getByPlaceholder('Salary').click();
        await page.getByPlaceholder('Salary').fill('100');
        await page.getByPlaceholder('Department').click();
        await page.getByPlaceholder('Department').fill('QA');
        await page.getByRole('button', { name: 'Submit' }).click();
        await expect(page.getByRole('gridcell', { name: 'Gjorgi', exact: true })).toBeVisible();
        await expect(page.getByRole('gridcell', { name: 'QA' })).toBeVisible();
    });
    
    test('test8', async ({ page }) => {
        const elementsQADemoPage = new ElementsQADemoPage(page);
        const webtablespage = new WebTabletPage(page);
        await elementsQADemoPage.goto();
        await elementsQADemoPage.clickElements();
        await webtablespage.clickWebTables();
        await webtablespage.clickAdd();
        await webtablespage.writeFirstName(data.firstname);
        await webtablespage.writeLastName(data.lastname);
        await elementsQADemoPage.typeEmail(data.email);
        await webtablespage.writeAge(data.age);
        await webtablespage.writeSalary(data.salary);
        await webtablespage.writeDepartment(data.department);
        await elementsQADemoPage.clickSubmit();
        await expect(page.getByRole('gridcell', { name: data.firstname, exact: true })).toBeVisible();
        await expect(page.getByRole('gridcell', { name: data.department })).toBeVisible();
    });
});

test.describe("Test Suite for Buttons", ()=>{

    test('test9', async ({ page }) => {
        await page.goto('https://demoqa.com/');
        await page.locator('div').filter({ hasText: /^Elements$/ }).first().click();
        await page.locator('li').filter({ hasText: 'Buttons' }).click();
        await page.getByRole('button', { name: 'Double Click Me' }).dblclick();
        await page.getByRole('button', { name: 'Right Click Me' }).click({button: 'right'});
        await page.getByRole('button', { name: 'Click Me', exact: true }).click();
        await expect(page.getByText('You have done a double click')).toBeVisible();
        await expect(page.getByText('You have done a right click')).toBeVisible();
        await expect(page.getByText('You have done a dynamic click')).toBeVisible();
      });
    
    test('test10', async ({ page }) => {
        const elementsQADemoPage = new ElementsQADemoPage(page);
        const buttonspageDemo = new ButtonsPage(page);
        await elementsQADemoPage.goto();
        await elementsQADemoPage.clickElements();
        await buttonspageDemo.ClickOnButtonsPage();
        await buttonspageDemo.ClickOnDoubleClick();
        await buttonspageDemo.ClickOnRightClick();
        await buttonspageDemo.ClickOnClickMe();
        await expect(page.getByText('You have done a double click')).toBeVisible();
        await expect(page.getByText('You have done a right click')).toBeVisible();
        await expect(page.getByText('You have done a dynamic click')).toBeVisible();
    });
});

test.describe("Test Suite for Forms", ()=>{

    test('test11', async ({ page }) => {
        await page.goto('https://demoqa.com/');
        await page.locator('div').filter({ hasText: /^Forms$/ }).first().click();
        await page.getByRole('listitem').click();
        await page.getByPlaceholder('First Name').click();
        await page.getByPlaceholder('First Name').fill('Gjorgi');
        await page.getByPlaceholder('First Name').press('Tab');
        await page.getByPlaceholder('Last Name').fill('Panev');
        await page.getByPlaceholder('name@example.com').click();
        await page.getByPlaceholder('name@example.com').fill('gjorgi@gmail.com');
        await page.getByText('Male', { exact: true }).click();
        await page.getByPlaceholder('Mobile Number').click();
        await page.getByPlaceholder('Mobile Number').fill('078078078');
        await page.locator('#dateOfBirthInput').click();
        await page.getByRole('combobox').nth(1).selectOption('1999');
        await page.locator('div').filter({ hasText: /^JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember$/ }).getByRole('combobox').selectOption('3');
        await page.getByLabel('Choose Tuesday, April 6th,').click();
        await page.getByText('Sports').click();
        await page.getByText('Reading').click();
        await page.getByText('Music').click();
        //await page.getByLabel('Select picture').click();
        //await page.getByLabel('Select picture').setInputFiles('AI.png');
        await page.getByPlaceholder('Current Address').click();
        await page.getByPlaceholder('Current Address').fill('Current Address');
        await page.locator('div').filter({ hasText: /^Select State$/ }).nth(3).click();
        await page.getByText('NCR', { exact: true }).click();
        await page.locator('#city svg').click();
        await page.getByText('Delhi', { exact: true }).click();
        await page.getByRole('button', { name: 'Submit' }).click();
    });
    
    test('test12', async ({ page }) => {
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