const { faker } = require('@faker-js/faker');
class CategoryPage {

    get btnTambah() {
        return $('a.chakra-button.css-1piskbq');
    }

    get nameCategory() {
        return $('#nama');
    }

    get keteranganCategory() {
        return $('#deskripsi');
    }

    get btnSimpanCategory() {
        return $('//button[text()="simpan"]');
    }

    get valueSearchCategory(){
        return $('.chakra-input.css-2s2hk4')
    }

    get verifyLineName() {
        return $('.css-u3dlpe');
    }

    get getAlertFailed(){
        return $('.chakra-alert.css-qwanz3')
    }

    async clickbtnTambah() {
        await this.btnTambah.click();
    }

    async clickbtnSimpanCategory() {
        await this.btnSimpanCategory.click();
    }

    async getNameText() {
        const verifyText = await this.verifyLineName.getText();   
        console.log("ini text nya!!!"+verifyText);
    }

    async getInputValueCategory(){
        const inputText = await this.verifyLineName.getText();  
        console.log(inputText)
        await this.valueSearchCategory.setValue(inputText)
    }

    async inputCategory() {
        await this.nameCategory.setValue(faker.commerce.department());
        await this.keteranganCategory.setValue(faker.lorem.sentence());
    }

    async inputCategoryEmpty(namaCategory, keteranganCategory) {
        await this.nameCategory.setValue(namaCategory);
        await this.keteranganCategory.setValue(keteranganCategory);
    }
}

module.exports = new CategoryPage();
