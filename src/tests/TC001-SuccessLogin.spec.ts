import { test, expect } from '@playwright/test';

// Test case: Login OrangeHRM dengan jeda 5 detik
test('login OrangeHRM with 5 seconds delay', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  // Isi username dan password demo bawaan OrangeHRM
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');

  // Klik tombol login
  await page.click('button[type="submit"]');

  await page.waitForTimeout(5000);

  // Assertion: pastikan dashboard muncul
  await expect(page).toHaveURL(/dashboard/);
  await expect(page.locator('h6')).toHaveText('Dashboard');
});