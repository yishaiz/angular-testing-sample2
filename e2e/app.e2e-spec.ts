import { AngularTestingSample2Page } from './app.po';

describe('angular-testing-sample2 App', () => {
  let page: AngularTestingSample2Page;

  beforeEach(() => {
    page = new AngularTestingSample2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
