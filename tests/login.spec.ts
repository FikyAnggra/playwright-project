import { test, expect } from '@playwright/test';

// Test case: Login with 5 seconds delay

test('login with 5 seconds delay', async ({ page }) => {
  await page.goto('https://example.com/login'); // Ganti dengan URL login aplikasi Anda

  await page.fill('#username', 'your-username'); // Ganti selector dan value sesuai kebutuhan
  await page.fill('#password', 'your-password'); // Ganti selector dan value sesuai kebutuhan

  await page.waitForTimeout(5000); // Jeda waktu 5 detik

  await page.click('button[type="submit"]'); // Ganti selector sesuai kebutuhan

  // Assertion setelah login, misal cek URL atau elemen tertentu
  await expect(page).toHaveURL(/dashboard|home/); // Ganti sesuai aplikasi
});
