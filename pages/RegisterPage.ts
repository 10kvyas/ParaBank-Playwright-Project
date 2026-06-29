import {Page} from '@playwright/test';

export class RegisterPage {

    constructor(private page: Page){}

    async register(username:string,password:string){
        await this.page.fill("#customer\\.firstName","Karan");
        await this.page.fill("#customer\\.lastName","Vyas");
        await this.page.fill("#customer\\.address\\.street","Wall Street");
        await this.page.fill("#customer\\.address\\.city","Mumbai");
        await this.page.fill("#customer\\.address\\.state","MH");
        await this.page.fill("#customer\\.address\\.zipCode","400068");
        await this.page.fill("#customer\\.phoneNumber","887645775");
        await this.page.fill("#customer\\.ssn","12345");
        await this.page.fill("#customer\\.username",username);
        await this.page.fill("#customer\\.password",password);
        await this.page.fill("#repeatedPassword",password);
        await this.page.click("input[value='Register']");
    }
}