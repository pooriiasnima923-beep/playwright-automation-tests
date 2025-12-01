import { test, expect } from '@playwright/test';
test('Negative: Login with invalid username', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.fill('#username', 'wrongUser');
  await page.fill('#password', 'Password123');
  await page.click('#submit');
 await expect(page.locator('#error')).toContainText('Your username is invalid!');
});
