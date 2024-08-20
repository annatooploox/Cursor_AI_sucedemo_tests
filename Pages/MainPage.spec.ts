class MainPage {
    // ... existing code ...

    addProductToCart = async (page) => {
        const addToCartButton = await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        await addToCartButton.click();
    }

    checkButtonTitleAfterClick = async (page) => {
        const addToCartButton = await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        const buttonTitle = await addToCartButton.textContent();
        return buttonTitle === 'REMOVE';
    }

    clickShoppingCart = async (page) => {
        const shoppingCartLink = await page.locator('[data-test="shopping-cart-link"]');
        await shoppingCartLink.click();
    }

    clickCheckoutButton = async (page) => {
        const checkoutButton = await page.locator('[data-test="checkout"]');
        await checkoutButton.click();
    }

    // ... existing code ...
}