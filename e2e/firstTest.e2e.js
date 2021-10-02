describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('Covid'))).toBeVisible();
  });

  it('should show view all screen after tap', async () => {
    await element(by.id('View All')).tap();
    await expect(element(by.text('CountryList'))).toBeVisible();
  });

});
