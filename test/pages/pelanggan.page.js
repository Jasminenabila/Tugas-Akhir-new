const { faker } = require('@faker-js/faker');
class PelangganPage {

    get btnTambah() {
        return $('.chakra-button.css-1piskbq');
    }

    get namaPelanggan() {
        return $('#nama');
    }

    get noHp1() {
        return $("//input[@id='no.hp']");
    }

    get alamatPelanggan() {
        return $('#alamat');
    }

    get keteranganPelanggan() {
        return $('#keterangan');
    }

    get btnSimpanPelanggan() {
        return $('.chakra-button.css-l5lnz6');
    }

    get alertMessage() {
        return $('.chakra-alert.css-3b6enb');
    }
    
    async verifyAlert() {
        const alert = await this.alertMessage;
        await expect(alert).toBeDisplayed();
    }

    get verifyLineName() {
        return $('.css-u3dlpe');
    }

    get getAlertFailed(){
        return $('.chakra-alert.css-qwanz3')
    }

    async clickbtnTambah() {
        await browser.refresh();
        await this.btnTambah.click();
    }

    async clickbtnSimpanPelanggan() {
        await this.btnSimpanPelanggan.click();
    }

    async getNameText() {
        const verifyText = await this.verifyLineName.getText(); 
        console.log("ini text nya!!!"+verifyText);
    }

    async inputPelanggan() {
        await browser.refresh();
        await this.namaPelanggan.setValue(faker.person.fullName());
        await this.noHp1.setValue(faker.number.int());
        await this.alamatPelanggan.setValue(faker.location.streetAddress());
        await this.keteranganPelanggan.setValue(faker.lorem.sentence());
    }

    async inputPelangganEmpty(nama, noHp, alamat, keterangan) {
        await browser.refresh();
        await this.namaPelanggan.setValue(nama);
        await this.noHp1.setValue(noHp);
        await this.alamatPelanggan.setValue(alamat);
        await this.keteranganPelanggan.setValue(keterangan);
    }

    async inputPelangganInvalidFormatPhone() {
        await browser.refresh();
        await this.namaPelanggan.setValue(faker.person.fullName());
        await this.noHp1.setValue(faker.phone.number());
    }
}

module.exports = new PelangganPage();
