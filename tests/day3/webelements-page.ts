import { expect, type Locator, type Page } from '@playwright/test';
import * as fs from 'fs';
const webtableslocators = JSON.parse(fs.readFileSync('../playwright-training/tests/fixtures/homework3/webelements-locators.json', 'utf-8'));


export class WebTabletPage{

    readonly webTables: Locator;
    readonly addclick: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly age: Locator;
    readonly salary: Locator;
    readonly department: Locator;

    constructor(page : Page){

        this.webTables = page.locator('li').filter({ hasText: 'Web Tables' });
        this.addclick = page.getByRole('button', { name: 'Add' });
        this.firstName = page.getByPlaceholder(webtableslocators.firstname);
        this.lastName = page.getByPlaceholder(webtableslocators.lastname);
        this.age = page.getByPlaceholder(webtableslocators.age);
        this.salary = page.getByPlaceholder(webtableslocators.salary);
        this.department = page.getByPlaceholder(webtableslocators.department);
    }

    async clickWebTables(){
        await this.webTables.click();
    }

    async clickAdd(){
        await this.addclick.click();
    }

    async writeFirstName(name){
        await this.firstName.fill(name);
    }

    async writeLastName(lastname){
        await this.lastName.fill(lastname);
    }

    async writeAge(age){
        await this.age.fill(age);
    }

    async writeSalary(salary){
        await this.salary.fill(salary);
    }

    async writeDepartment(department){
        await this.department.fill(department);
    }
}