import NavigationHelper from '../page-objects/helper/NavigationHelper'
import LoginPage from '../page-objects/pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'
import dataProvider from '../lib/dataProvider';
import { assert } from 'chai';

require('dotenv').config()

describe('E2E Tests - Login / Logout Functionalities', () => {

  it('The color of page header should be black', () => {
    NavigationHelper.navigateToHomePage();
    Navbar.Click_SignIn();
    LoginPage.FormIsVisible();
    let color = LoginPage.GetPageHeaderColor();
    console.log(color);
    assert.equal(color.value, 'rgba(51,51,51,1)');
  });

  it('A user can\'t log in with invalid username and password', () => {
    NavigationHelper.navigateToHomePage();
    Navbar.Click_SignIn();
    LoginPage.pauseShort(); // pauseShort() is in Base class.

    LoginPage.FormIsVisible();
    LoginPage.Fill_Form(dataProvider.getRandomUserID(), dataProvider.getRandomPwd());
    LoginPage.Submit_Form();

    const message = LoginPage.error
    expect(message).toHaveText('Login and/or password are wrong.');
  });

  it('A user can log in with valid username and password', () => {
    NavigationHelper.navigateToHomePage();
    Navbar.Click_SignIn();
    LoginPage.FormIsVisible();
    LoginPage.Fill_Form(process.env.VALID_USERNAME, process.env.VALID_PASSWORD);
    LoginPage.pauseShort();
    LoginPage.Submit_Form();
    LoginPage.pauseShort();

    Navbar.User_icon_Is_Visible();
  });

  it('A user should be able to log out', () => {
    Navbar.SignOut();
    Navbar.SignIn_btn_Is_Visible();
  });
});