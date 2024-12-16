class LoginPage {
    get userNameInput() {
      return $('#email');
    }
  
    get passwordInput() {
      return $('#password');
    }
  
    get loginButton() {
      return $('.chakra-button.css-1n8i4of');
    }
  
    get errorMessage() {
      return $('div[role="alert"]');
    }

    get successDashboard(){
        return $('.chakra-heading.css-nip5k5')
    }
  
    async open() {
        await browser.url('https://kasiraja.ajikamaludin.id');
        console.log(await browser.getUrl());
    }

    async clickbutton(){
        await this.loginButton.click();
    }
  
    async login(username, password) {
      await this.userNameInput.setValue(username);
      await this.passwordInput.setValue(password);
    }
  }
  
  module.exports = new LoginPage();