// pelanggan.step.js
const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pages/login.page');
const PelangganPage = require('../pages/pelanggan.page'); 

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
    await PelangganPage.clickbtnTambah();
});

When(/^input form pelanggan$/, async () => {
    await PelangganPage.inputPelanggan('pelangganName1', "Jalan Raya Bekasi", "Sukses Customer");
    await browser.pause(2000);  
    
});

Then(/^Click button tambah and showing alert success$/, async () => {
    await PelangganPage.clickbtnSimpanPelanggan();
    await browser.pause(2000); 
    await PelangganPage.getNameText();
    // await browser.pause(5000);  
    // await PelangganPage.waitForDisplayed({ timeout: 5000 }); 
    // await PelangganPage.getNameText();
    // expect(await PelangganPage.isDisplayed()).toBe(true); 
});
