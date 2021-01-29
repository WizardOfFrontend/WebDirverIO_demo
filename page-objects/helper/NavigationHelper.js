require('dotenv').config()

class NavigationHelper {

  // page navigation
  navigateTo(path) {
    browser.url(path);
  }

  // Navigate to HomePage
  navigateToHomePage() {
    this.navigateTo(process.env.HOME_PAGE);
  }
}

export default new NavigationHelper()

