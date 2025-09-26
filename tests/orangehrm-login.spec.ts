import { test, expect } from '@playwright/test';

// Ganti URL di bawah dengan URL OrangeHRM demo jika diperlukan
test('Login OrangeHRM', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(/dashboard/);
  await expect(page.locator('h6')).toHaveText('Dashboard');
});
