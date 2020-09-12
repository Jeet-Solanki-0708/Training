import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getCartLink(){
    return element(by.css('[routerlink="/cart"]'))
  }
}
