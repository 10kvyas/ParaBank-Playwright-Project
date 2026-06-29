import {Page} from '@playwright/test';
export class HomePage{

    constructor(private page: Page){}
    async openWebsite(){
        await
        this.page.goto("https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC");
    }
    async clickRegister(){
        await this.page.click("text=Register");
    }
}