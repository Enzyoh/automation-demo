import { Builder, By, until } from 'selenium-webdriver'
import ConfigModel from '../model/ConfigModel'
import genericConfig from '../../../config/generic.config.json'
const { Options } = require('selenium-webdriver/chrome')
require('chromedriver')

const waitUntilTime = 20000

class TestBootstrap {
  constructor () {
    this._driver = {}
    this._launchSetup = undefined
  }

  get launchSetup () {
    return this._launchSetup
  }

  set launchSetup (value) {
    this._launchSetup = value
  }

  async init () {
    const config = JSON.parse(JSON.stringify(genericConfig))
    ConfigModel.config = config
    try {
      const chromeOptions = new Options()
      // chromeOptions.addArguments('--headless')

      this._driver = new Builder()
        .forBrowser('chrome')
        .setChromeOptions(chromeOptions)
        .build()
    } catch (err) {
      this.handleFailure(err)
    }
  }

  async getPage (url) {
    return await this._driver.get(url)
  }

  async getCurrentPageUrl () {
    return this._driver.getCurrentUrl()
  }

  async resizeWindow (width, height) {
    await this._driver.manage().window().setRect({ width: width, height: height })
  }

  async maximizeWindow () {
    await this._driver.manage().window().maximize()
  }

  async waitForSeconds (seconds) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, seconds * 1000)
    })
  }

  async dismissAlert () {
    await this._driver.switchTo().alert().accept()
  }

  async getElementById (id) {
    const element = await this._driver.wait(until.elementLocated(By.id(id)), waitUntilTime)
    return element
  }

  async getVisibleElementById (id) {
    const element = await this._driver.wait(until.elementLocated(By.id(id)), waitUntilTime)
    const webElementPromise = await this._driver.wait(until.elementIsVisible(element), waitUntilTime)
    return webElementPromise
  }

  async itemNotVisible (id, timeout = 2000) {
    const element = await this._driver.wait(until.elementLocated(By.id(id)), timeout)
    return element
  }

  async itemDoesNotExist (id) {
    const items = await this._driver.findElements(By.id(id))
    return items.length === 0
  }

  async getVisibleElementByIdWithinOther (id, otherWebElement) {
    const element = await otherWebElement.findElement(By.id(id))
    return element
  }

  async getWebElementCssValue (element, cssProperty) {
    return await element.getCssValue(cssProperty)
  }

  async getVisibleElementByCssSelector (cssSelector) {
    const element = await this._driver.wait(until.elementLocated(By.css(cssSelector)), waitUntilTime)
    const webElementPromise = await this._driver.wait(until.elementIsVisible(element), waitUntilTime)
    return webElementPromise
  }

  async getGrandParentOf (element) {
    return await element.findElement(By.xpath('./../..'))
  }

  async getParentOf (element) {
    return await element.findElement(By.xpath('./..'))
  }

  async getFollowingSiblingClass (element, className, htmlType) {
    const parent = await this.getParentOf(element)
    const sibling = await parent.findElement(By.css(`${htmlType}[class=${className}]`))
    return sibling
  }

  async getElementByXPath (xpath) {
    const element = await this._driver.wait(until.elementLocated(By.xpath(xpath)), waitUntilTime)
    return await this._driver.wait(until.elementIsVisible(element), waitUntilTime)
  }

  cleanUp () {
    if (this._driver) {
      this._driver.quit()
    }
  }

  handleFailure (err) {
    console.error('Something went wrong!\n', err.stack, '\n')
    this.cleanUp()
  }
}

export default TestBootstrap
export const testBootstrapInstance = new TestBootstrap()
