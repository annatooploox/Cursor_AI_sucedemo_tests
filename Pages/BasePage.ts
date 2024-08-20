import { Page } from '@playwright/test';

class BasePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    addProductToCartAndCheckout = async () => {
        // Locate and click the 'Add to Cart' button
        await this.page.click('selector-for-add-to-cart'); // Replace with actual selector from ManPage

        // Locate and click the 'Checkout' button
        await this.page.click('selector-for-checkout'); // Fixed to use 'this.page'
    }

    

}



export { BasePage };