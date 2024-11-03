import {test as base} from '@playwright/test';
import { LogIn } from '../saucedemo/pages/login';
import { HomePage } from '../saucedemo/pages/homepage';


type MyFixtures = {
    logIn:LogIn
    homePage:HomePage
}

export const test = base.extend<MyFixtures>({
    logIn: async ({page}, use)=>{
        await use(new LogIn(page))
    },

    homePage: async ({page}, use)=>{
        await use(new HomePage(page))
    }
})