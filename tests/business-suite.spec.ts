import { test, expect } from '@playwright/test';

test.describe('Business & Teams Section', () => {
  test('renders VIP Pre-Ticket aesthetic with correct elements', async ({ page }) => {
    await page.goto('/');

    // Scroll to the business section to trigger animations
    const businessSection = page.locator('#business');
    await businessSection.scrollIntoViewIfNeeded();

    // Verify background using website theme (slate-wash)
    await expect(businessSection).toHaveClass(/bg-slate-wash/);

    // Verify ticket container exists
    const ticketContainer = businessSection.locator('.shadow-lift');
    await expect(ticketContainer).toBeVisible();

    // Verify ticket headers
    await expect(ticketContainer).toContainText('Business Suite');
    await expect(ticketContainer).toContainText('Boarding Soon');

    // Verify the "Order Pre-Ticket" CTA button exists
    const ctaButton = businessSection.locator('.get-notified-btn');
    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toContainText('Order Pre-Ticket');

    // Verify barcode exists
    const barcode = businessSection.locator('.barcode');
    await expect(barcode).toBeVisible();
  });
});
