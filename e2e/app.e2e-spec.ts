import { NgIcustPage } from './app.po';

describe('ng-icust App', () => {
  let page: NgIcustPage;

  beforeEach(() => {
    page = new NgIcustPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
