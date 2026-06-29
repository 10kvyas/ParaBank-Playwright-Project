import{Given, When, Then} from "@cucumber/cucumber";
import {Browser, chromium, Page} from "@playwright/test";
import {HomePage} from "../pages/HomePage";
import {RegisterPage} from "../pages/RegisterPage";
import {AccountPage} from "../pages/AccountPage";
import { setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(60000);

let browser: Browser;
let page: Page;

const username = "user"+Date.now();
const password = "Test@123";

Given ("User opens the ParaBank site", async function(){
    browser = await chromium.launch();
    const context = await browser.newContext();
    page = await context.newPage();
    const home = new HomePage(page);
    await home.openWebsite();
    await home.clickRegister();
});

When("User clicks on registers a new account", async function(){
    const register = new RegisterPage(page);
    await register.register(username, password);
});

Then("User should be able to see the account balance", async function(){

    const account = new AccountPage(page);
    await account.printBalance();
    await browser.close();
});