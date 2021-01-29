import Base from './Base'

class LoginPage extends Base {
  get Login_form() {
    return $('#login_form')
  }

  get Username_input() {
    return $('#user_login')
  }
  get Password_input() {
    return $('#user_password')
  }

  get Submit_btn() {
    return $('input[type="submit"]')
  }

  get error() {
    return $('.alert-error')
  }

  FormIsVisible() {
    this.Login_form.waitForExist()
  }

  Fill_Form(username, password) {
    this.Username_input.setValue(username);
    this.Password_input.setValue(password);
  }

  Submit_Form() {
    this.Submit_btn.click();
  }

  Login(username, password) {
    this.FormIsVisible();
    this.Fill_Form(username, password);
    this.Submit_Form();
  }
}

export default new LoginPage()

