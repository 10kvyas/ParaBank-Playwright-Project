import {Page} from '@playwright/test';

export class AccountPage{

    constructor(private page:Page){}

    async printBalance(){

        await this.page.locator('a[href="overview.htm"]').click();
        await this.page.waitForSelector('#accountTable');
        const balance = await this.page.locator('#accountTable tbody tr td:nth-child(2)').first().innerText();
        console.log("Balance is: "+ balance);    
        
    }
}