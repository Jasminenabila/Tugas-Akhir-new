const { faker } = require('@faker-js/faker');
let getBarcode; 
class ProductPage {

    get btnTambah() {
        return $('.chakra-button.css-1piskbq');
    }

    get getAlertFailed() {
        return $('.chakra-alert.css-qwanz3');
    }

    get codeProduct() {
        return $('#kode');
    }

    get nameProduct(){
        return $('#nama');
    }

    get keteranganProduct() {
        return $('#deskripsi');
    }

    get hargaBeliProduct(){
        return $('#harga\\ beli')
    }

    get hargaJualProduct(){
        return $('#harga\\ jual')
    }

    get stockProduct(){
        return $('#stok')
    }

    get comboBoxCategory(){
        return $('#kategori')
    }

    get valueCategory(){
        return $('.css-u3dlpe')
    }

    get getAlertFailed(){
        return $('.chakra-alert.css-qwanz3')
    }

    get btnSimpanProduct(){
        return $('.chakra-button.css-l5lnz6')
    }

    get menuOptionList(){
        return $('.chakra-button.chakra-menu__menu-button.css-pu8osu');
    }

    get deleteButton() {
        return $('xpath://button[text()="hapus"]');  
    }

    get headerDelete() {
        return $('xpath://button[text()="Delete"]'); 
    }

    get alertMessage() {
        return $('.chakra-alert.css-3b6enb');
    }
    
    async verifyAlert() {
        const alert = await this.alertMessage;
        await expect(alert).toBeDisplayed();
    }
    
    async clickHeaderDelete() {
        await this.headerDelete.waitForDisplayed({ timeout: 2000 }); 
        await this.headerDelete.click();
    }
    

    async clickDeleteButton() {
        await this.deleteButton.click(); 
    }

    async clickMenuOptionBtn(){
        await this.menuOptionList.click();
    }

    async verifyGetAlertFailed(){
        await this.getAlertFailed.waitForDisplayed({ timeout: 5000 }); 
        const alertText = await this.getAlertFailed.getText(); 
        console.log('Alert message:', alertText);
        await expect(alertText).toContain('\"price\" must be greater than ref:cost');
    }

    async clickbtnTambah() {
        await this.btnTambah.click();
    }

    async clickbtnSimpanProduct() {
        await this.btnSimpanProduct.click();
    }

    async getProductBarcode(){
        getBarcode = await this.codeProduct.getValue();   
        console.log("ini code product nya!!!"+getBarcode);
    }

    async verifyProductBarcode() {    
        const getBarcodeProductList = await this.valueCategory.getText();
        console.log("Kode produk dari daftar: " + getBarcodeProductList);
        await expect(getBarcode).toBe(getBarcodeProductList);
    }

    async inputProductValid() {
        const hargaBeli = faker.number.int({ min: 100000, max: 1000000 });
        const hargaJual = faker.number.int({ min: hargaBeli + 10000, max: hargaBeli + 500000 }); 
        console.log(`Harga Beli: ${hargaBeli}, Harga Jual: ${hargaJual}`);

        await this.nameProduct.setValue(faker.commerce.productName());
        await this.keteranganProduct.setValue(faker.commerce.productDescription());
        await this.hargaBeliProduct.setValue(hargaBeli); 
        await this.hargaJualProduct.setValue(hargaJual);
        await this.stockProduct.setValue(100);
        await this.comboBoxCategory.click();
        await this.valueCategory.click();
    }

    async inputHargaInvalid(){
        const hargaBeli = faker.number.int({ min: 10000, max: 100000 });
        const hargaJual = faker.number.int({ min: hargaBeli - 10000, max: hargaBeli - 5000 }); 
        console.log(`Harga Beli: ${hargaBeli}, Harga Jual: ${hargaJual}`);

        await this.nameProduct.setValue(faker.commerce.productName());
        await this.keteranganProduct.setValue(faker.commerce.productDescription());
        await this.hargaBeliProduct.setValue(hargaBeli); 
        await this.hargaJualProduct.setValue(hargaJual);
        await this.stockProduct.setValue(100);
        await this.comboBoxCategory.click();
        await this.valueCategory.click();
    }
}

module.exports = new ProductPage();
