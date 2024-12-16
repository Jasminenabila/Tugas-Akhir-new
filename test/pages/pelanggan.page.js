// pelanggan.page.js

class PelangganPage {

    get btnTambah() {
        return $('.chakra-button.css-1piskbq');
    }

    get namaPelanggan() {
        return $('#nama');
    }

    get noHp1() {
        return $('#no.hp');
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

    get verifyLineName() {
        return $('.css-u3dlpe');
    }

    async clickbtnTambah() {
        await this.btnTambah.click();
    }

    async clickbtnSimpanPelanggan() {
        await this.btnSimpanPelanggan.click();
    }

    async getNameText() {
        const verifyText = await this.verifyLineName.getText();   
        console.log("ini text nya!!!"+verifyText);
    }

    async inputPelanggan(nama, alamat, keterangan) {
        await this.namaPelanggan.setValue(nama);
        // await this.noHp1.setValue(nohp);
        await this.alamatPelanggan.setValue(alamat);
        await this.keteranganPelanggan.setValue(keterangan);
    }
}

// Export the instance of the PelangganPage class
module.exports = new PelangganPage();
