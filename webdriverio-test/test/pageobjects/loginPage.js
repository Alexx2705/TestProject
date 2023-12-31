
import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {
    get inputUsername () { 
    return $('#user-name');
    }


get inputPassword () {
    return $('#password');

}

get loginBtn () {
    return $('#login-button');
}

async login (username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.loginBtn.click();
}
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
