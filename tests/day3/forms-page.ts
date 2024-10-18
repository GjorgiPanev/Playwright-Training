import { expect, type Locator, type Page } from '@playwright/test';
import * as fs from 'fs';
const formlocators = JSON.parse(fs.readFileSync('../playwright-training/tests/fixtures/homework3/form-locators.json', 'utf-8'));

export class Forms{

    readonly formspage: Locator;
    readonly practiceformpage: Locator;
    readonly gender: Locator;
    readonly mobileNumber: Locator;
    readonly dateOfBirth: Locator;
    readonly year: Locator;
    readonly month: Locator;
    readonly day: Locator;
    readonly hobbiesS: Locator;
    readonly hobbiesR: Locator;
    readonly hobbiesM: Locator;
    readonly selectPic: Locator;
    readonly selectState1: Locator;
    readonly selectState2: Locator;
    readonly selectCity1: Locator;
    readonly selectCity2: Locator;

    constructor(page : Page){
        this.formspage = page.locator('div').filter({ hasText: /^Forms$/ }).first();
        this.practiceformpage = page.getByRole(formlocators.practiceform);
        this.gender = page.getByText(formlocators.gender, { exact: true });
        this.mobileNumber = page.getByPlaceholder(formlocators.mobilenumber);
        this.dateOfBirth = page.locator(formlocators.dateofbirth);
        this.year = page.getByRole('combobox').nth(1);
        this.month = page.locator('div').filter({ hasText: /^JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember$/ }).getByRole('combobox');
        this.day = page.getByLabel(formlocators.day);
        this.hobbiesS = page.getByText(formlocators.hobbiesS);
        this.hobbiesR = page.getByText(formlocators.hobbiesR);
        this.hobbiesM = page.getByText(formlocators.hobbiesM);
        this.selectPic = page.getByLabel(formlocators.pics);
        this.selectState1 = page.locator('div').filter({ hasText: /^Select State$/ }).nth(3);
        this.selectState2 = page.getByText(formlocators.state, { exact: true });
        this.selectCity1 = page.locator('#city svg');
        this.selectCity2 = page.getByText(formlocators.city, { exact: true });
    }

    async ClickOnFormsPage(){
        await this.formspage.click();
    }

    async ClickOnPracticeFormPage(){
        await this.practiceformpage.click();
    }

    async ClickOnGender(){
        await this.gender.click();
    }

    async EnterMobilePhone(mobilephone){
        await this.mobileNumber.fill(mobilephone);
    }

    async ClickOnDateOFBirth(){
        await this.dateOfBirth.click();
    }

    async SelectYear(year){
        await this.year.selectOption(year);
    }

    async SelectMonth(month){
        await this.month.selectOption(month);
    }

    async ClickOnDay(){
        await this.day.click();
    }

    async SelectSports(){
        await this.hobbiesS.click();
    }

    async SelectReading(){
        await this.hobbiesR.click();
    }

    async SelectMusic(){
        await this.hobbiesM.click();
    }
    
    async SelectPicture(pic){
        await this.selectPic.setInputFiles(pic);
    }

    async ClickOnState(){
        await this.selectState1.click();
    }

    async SelectState(){
        await this.selectState2.click();
    }
    
    async ClickOnCity(){
        await this.selectCity1.click();
    }

    async SelectCity(){
        await this.selectCity2.click();
    }
        
}