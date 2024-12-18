const { Given, When, Then } = require("@wdio/cucumber-framework");
const LoginPage = require("../pages/login.page");
const ProductPage = require("../pages/product.page");

Given(/^Make sure already logged on dashboard for access product menu$/, async () => {
    await LoginPage.open();
    await LoginPage.login('harpot1@email.com', 'password1');
    await LoginPage.clickbutton();
    const successDashboard = await LoginPage.successDashboard;
    await expect(browser).toHaveUrl('https://kasiraja.ajikamaludin.id/dashboard');
    await successDashboard.waitForDisplayed({ timeout: 2000 }); 
    await browser.refresh();
});
When(/^click button tambah product$/, async () => {
    await browser.refresh();
    await browser.url('https://kasiraja.ajikamaludin.id/products');
    await browser.refresh();
    await ProductPage.clickbtnTambah();
});

When(/^input form product with data valid$/, async () => {
    await ProductPage.getProductBarcode();
    await ProductPage.inputProductValid();
});

When(/^click option menu$/, async () => {
    await browser.refresh();
    await browser.url('https://kasiraja.ajikamaludin.id/products');
    await browser.refresh();
    await ProductPage.clickMenuOptionBtn();
});

When(/^Choose option delete$/, async () => {
    await ProductPage.clickDeleteButton();
});

Then(/^click approve pop up delete and should be deleted successfully$/, async () => {
    await ProductPage.clickHeaderDelete();
    await ProductPage.verifyAlert();
});

When(/^input form product with harga invalid$/, async () => {
    await browser.refresh();
    await ProductPage.clickbtnTambah();
    await ProductPage.getProductBarcode();
    await ProductPage.inputHargaInvalid();
});

Then(/^Click button tambah product and showing alert successfully saved$/, async () => {
    await ProductPage.clickbtnSimpanProduct();
    await browser.pause(2000); 
    await browser.refresh();
    await ProductPage.verifyProductBarcode();
});

Then(/^Click button tambah product and showing alert failed$/, async () => {
    await ProductPage.clickbtnSimpanProduct();
    await browser.pause(2000); 
    await ProductPage.verifyGetAlertFailed();
});


