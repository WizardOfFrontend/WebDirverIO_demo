import Base from '../pages/Base'

class Navbar extends Base {
  get SignIn_btn() {
    return $('#signin_button')
  }

  get InsideNavbar() {
    return $('.nav.nav-tabs');
  }

  get Setting_btn() {
    return $('.icon-cog');
  }

  get Help_btn() {
    return $('#help_link');
  }

  get Search_tbx() {
    return $('#searchTerm')
  }

  get Username_ddl() {
    return $('a=username')
  }

  get Logout_link() {
    return $('#logout_link')
  }

  get User_icon() {
    return $('.icon-user');
  }

  // actions
  Click_SignIn() {
    this.SignIn_btn_Is_Visible();
    this.SignIn_btn.click();
  }

  SignIn_btn_Is_Visible() {
    this.SignIn_btn.waitForExist();
  }

  User_icon_Is_Visible() {
    this.User_icon.waitForDisplayed();
  }

  IsInsideNavbar_Visible() {
    this.InsideNavbar.waitForExist();
  }

  Search(text) {
    this.Search_tbx.waitForExist();
    this.Search_tbx.setValue(text);
    browser.keys('Enter');
  }
  Click_Settings() {
    this.Setting_btn.waitForExist();
    this.Setting_btn.click();
  }

  ClickHelp() {
    this.helpButton.waitForExist();
    this.helpButton.click();
  }

  SignOut() {
    this.Username_ddl.waitForExist();
    this.Username_ddl.click();
    this.Logout_link.waitForDisplayed();
    this.Logout_link.click();
  }
}

export default new Navbar()

