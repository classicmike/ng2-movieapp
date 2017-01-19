import { Ng2MovieappPage } from './app.po';

describe('ng2-movieapp App', function() {
  let page: Ng2MovieappPage;

  beforeEach(() => {
    page = new Ng2MovieappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
