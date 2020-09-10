import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('testing');
  });

  it('should display user link', () => {
    page.navigateTo();
    expect(page.getUserLink().getText());
  });

  it('should go to user link', () => {
    page.navigateTo();
    page.getUserLink().click();
    expect(page.getUserText().getText()).toContain('User not logged');
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
