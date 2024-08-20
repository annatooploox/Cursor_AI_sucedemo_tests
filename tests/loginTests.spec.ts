import { test } from '@playwright/test';

import { LoginPage } from '../Pages/LoginPage.spec';

test.describe('Login Page tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
  });
  test('should allow me to login to App as a standard user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginUser("standard_user", "secret_sauce");
  });

});
