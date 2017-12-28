import { ProdDeployTestAppPage } from './app.po';

describe('prod-deploy-test-app App', function() {
  let page: ProdDeployTestAppPage;

  beforeEach(() => {
    page = new ProdDeployTestAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
