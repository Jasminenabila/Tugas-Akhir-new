const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pages/login.page');
const CategoryPage = require('../pages/category.page');


Given(/^Make sure already logged on dashboard for access category$/, async () => {
    await LoginPage.open();
    await LoginPage.login('harpot1@email.com', 'password1');
    await LoginPage.clickbutton();
    const successDashboard = await LoginPage.successDashboard;
    await expect(browser).toHaveUrl('https://kasiraja.ajikamaludin.id/dashboard');
    await successDashboard.waitForDisplayed({ timeout: 2000 }); 
    await browser.refresh();
});

When(/^click button tambah category$/, async () => {
    await browser.refresh();
    await browser.url('https://kasiraja.ajikamaludin.id/categories');
    await browser.refresh();
    await CategoryPage.clickbtnTambah();
});

When(/^input form category data empty$/, async () => {
    await CategoryPage.inputCategoryEmpty("", "");
});

When(/^input value category on the category page$/, async () => {
    await CategoryPage.getInputValueCategory();
});

When(/^input form category$/, async () => {
    await CategoryPage.inputCategory();  
    await browser.pause(2000);
});

Then(/^Click button tambah category and showing alert success$/, async () => {
    await CategoryPage.clickbtnSimpanCategory();
    await browser.pause(2000); 
    await CategoryPage.getNameText();
    await browser.saveScreenshot('screenshot1.png');
});

Then(/^Click button tambah category and showing alert failed$/, async () => {
    await CategoryPage.clickbtnSimpanCategory();
    await browser.pause(2000); 
    const errorMessage = await CategoryPage.getAlertFailed;
    await errorMessage.waitForDisplayed({ timeout: 5000 }); 
});

Then(/^Click enter and showing available success$/, async () => {
    await browser.keys('Enter');
    await CategoryPage.getNameText();
    await browser.pause(2000);
});
