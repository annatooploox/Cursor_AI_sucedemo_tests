import { Locator, Page  } from '@playwright/test';

export class LoginPage  {
    protected page: Page;

    constructor(page: Page) {
      this.page = page; 
      this.usernameInput = this.page.getByPlaceholder('Username');
      this.passwordInput = this.page.getByPlaceholder('Password');
      this.loginButton = this.page.getByRole('button', { name: 'Login' });
      this.logoutButton = this.page.getByRole('button', { name: 'Logout' });
    }

    public readonly usernameInput: Locator;
    public readonly passwordInput: Locator;
    public readonly loginButton: Locator;
    public readonly logoutButton: Locator;

    async loginUser(username: string, password: string): Promise<void> {
      await this.usernameInput.fill(username);
      await this.passwordInput.fill(password);
      await this.loginButton.click();
    }

    async logoutUser(): Promise<void> {
        await this.logoutButton.click();
    }
}