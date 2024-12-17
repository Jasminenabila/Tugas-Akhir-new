const { Given, When, Then } = require("@wdio/cucumber-framework");
const LoginPage = require("../pages/login.page");
const { expect, $, browser } = require('@wdio/globals')

Given(/^Website kasiraja has been opened$/, async () => {
   await LoginPage.open()
});

When(/^User input credentials email and password valid$/,async () => {
    await LoginPage.login('harpot1@email.com', 'password1');
});

When(/^User click button Login$/,async () => {
    await LoginPage.clickbutton()
});

Then(/^User should be able successfully dashboard kasirAja$/,async () => {
    const successDashboard = await LoginPage.successDashboard;
    await expect(browser).toHaveUrl('https://kasiraja.ajikamaludin.id/dashboard');
    await successDashboard.waitForDisplayed({ timeout: 2000 }); 
});

When(/^User input credentials email and password with invalid username$/, async () => {
    await LoginPage.login('harpot19@email.com', 'password1');
}); 

Then(/^User should be able see an error message$/, async () => {
    await LoginPage.clickbutton()
    const errorMessage = await LoginPage.errorMessage;
    await errorMessage.waitForDisplayed({ timeout: 5000 }); 
});

When(/^User input credentials email and password valid with invalid password$/, async () => {
    await LoginPage.login('harpot1@email.com', 'password12');
});


