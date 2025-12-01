import { test, expect } from '@playwright/test';
test('Positive: Verify Logout button after login', async ({ page }) => {
await page.goto('https://practicetestautomation.com/practice-test-login/');
await page.fill('#username', 'student');
await page.fill('#password', 'Password123');
await page.click('#submit');
const logoutButton = page.locator('text=Log out');
await expect(logoutButton).toBeVisible();
});
