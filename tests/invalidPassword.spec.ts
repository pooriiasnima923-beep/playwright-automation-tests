import { test, expect } from '@playwright/test';

test('Negative: Login with invalid password', async ({ page }) => { 
await page.goto('https://practicetestautomation.com/practice-test-login/'); 
await page.fill('#username', 'student'); 
await page.fill('#password', 'wrongPassword'); 
await page.click('#submit'); 
await expect(page.locator('#error')).toContainText('Your password is invalid!'); });
