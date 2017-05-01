import { OtrapruPage } from './app.po';

describe('otrapru App', () => {
  let page: OtrapruPage;

  beforeEach(() => {
    page = new OtrapruPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
