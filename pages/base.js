const {
  Builder,
  By,
  until,
} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const service =
  new chrome.ServiceBuilder(
    './drivers/chromedriver'
  );

let driver = new Builder()
  .forBrowser('chrome')

  .setChromeService(service)
  .build();
class Base {
  constructor() {
    global.driver = driver;
  }
  //Defaults
  async OPEN_PAGE(url) {
    return await driver.get(url);
  }
  async MAX_WINDOW() {
    return await driver
      .manage()
      .window()
      .maximize();
  }
  async WAIT_IMP(WAIT_TIME) {
    return await driver
      .manage()
      .setTimeouts({
        implicit: WAIT_TIME,
      });
  }
  async WAIT_UNTIL_ID(LOC, WAIT_TIME) {
    return await driver.wait(
      until.elementLocated(By.id(LOC)),
      WAIT_TIME
    );
  }
  async WAIT_UNTIL_CLASSNAME(
    LOC,
    WAIT_TIME
  ) {
    return await driver.wait(
      until.elementLocated(
        By.name(LOC)
      ),
      WAIT_TIME
    );
  }
  async WAIT_UNTIL_NAME(
    LOC,
    WAIT_TIME
  ) {
    return await driver.wait(
      until.elementLocated(
        By.name(LOC)
      ),
      WAIT_TIME
    );
  }
  async CLOSE_BROWSER() {
    return await driver.quit();
  }
  //Patient Creation:
  async ENTER__FIRST_NAME(
    locator,
    keys
  ) {
    return await driver
      .findElement(By.name(locator))
      .sendKeys(keys);
  }
  async ENTER__MIDDLE_NAME(
    locator,
    keys
  ) {
    return await driver
      .findElement(By.name(locator))
      .sendKeys(keys);
  }
  async ENTER__LAST_NAME(
    locator,
    keys
  ) {
    return await driver
      .findElement(By.name(locator))
      .sendKeys(keys);
  }
  async ENTER__PHONE(locator, keys) {
    return await driver
      .findElement(By.name(locator))
      .sendKeys(keys);
  }
  async ENTER__DOB(locator, keys) {
    return await driver
      .findElement(By.name(locator))
      .sendKeys(keys);
  }
  async ENTER__ADDRESS(locator, keys) {
    return await driver
      .findElement(By.name(locator))
      .sendKeys(keys);
  }
  async CLICK__ADD_NEW_USER(locator) {
    return await driver
      .findElement(
        By.className(locator)
      )
      .click();
  }
  async CHECK_LIST(locator) {
    return await driver
      .findElement(By.css(locator))
      .getText();
  }
}
module.exports = new Base();
