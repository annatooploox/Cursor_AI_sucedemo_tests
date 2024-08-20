import { test } from '@playwright/test';

import { LoginPage } from '../Pages/LoginPage.spec';

test.describe('buy one product', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    const loginPage = new LoginPage(page);
    await loginPage.loginUser("standard_user", "secret_sauce");
  });
  test('as a standard user I can add product to cart', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.addProductToCart();

  });

});
