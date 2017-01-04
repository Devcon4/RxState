import { RxStatePage } from './app.po';

describe('rx-state App', function() {
  let page: RxStatePage;

  beforeEach(() => {
    page = new RxStatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
