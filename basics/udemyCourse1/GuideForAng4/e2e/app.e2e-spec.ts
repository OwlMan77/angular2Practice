import { GuideForAng4Page } from './app.po';

describe('guide-for-ang4 App', () => {
  let page: GuideForAng4Page;

  beforeEach(() => {
    page = new GuideForAng4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
