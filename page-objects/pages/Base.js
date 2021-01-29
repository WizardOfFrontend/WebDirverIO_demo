import { short, medium, long } from '../../lib/waitTime.js';

class Base {
  // pausing
  pauseShort() {
    browser.pause(short);
  }
  pauseMedium() {
    browser.pause(medium);
  }
  pauseLong() {
    browser.pause(long);
  }
}


export default Base;