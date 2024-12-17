// pelanggan.step.js
const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pages/login.page');
const PelangganPage = require('../pages/pelanggan.page'); 
const { faker } = require('@faker-js/faker');

Given(/^Make sure already logged on dashboard$/, async () => {
    await LoginPage.open();
    await LoginPage.login('harpot1@email.com', 'password1');
    await LoginPage.clickbutton();
    const successDashboard = await LoginPage.successDashboard;
    await expect(browser).toHaveUrl('https://kasiraja.ajikamaludin.id/dashboard');
    await successDashboard.waitForDisplayed({ timeout: 2000 }); 
});

When(/^click button tambah$/, async () => {
    await browser.url('https://kasiraja.ajikamaludin.id/customers');
    await browser.refresh();
    await PelangganPage.clickbtnTambah();
});

When(/^input form pelanggan$/, async () => {
    await PelangganPage.inputPelanggan();    
});

When(/^input form pelanggan data empty$/, async () => {
    await PelangganPage.inputPelangganEmpty("", "", "", "");     
});

When(/^input form pelanggan data invalid format number$/, async () => {
    await PelangganPage.inputPelangganInvalidFormatPhone();  
});

Then(/^Click button tambah and showing alert success$/, async () => {
    await PelangganPage.clickbtnSimpanPelanggan();
    await browser.pause(2000); 
    await PelangganPage.getNameText();
});

Then(/^Click button tambah and showing alert failed$/, async () => {
    await PelangganPage.clickbtnSimpanPelanggan();
    await browser.pause(2000); 
    const errorMessage = await PelangganPage.getAlertFailed;
    await errorMessage.waitForDisplayed({ timeout: 5000 }); 
});
