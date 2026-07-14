import { test, expect } from '@playwright/test';

test.describe('Who is it for Section', () => {
  test('renders 4x2 Manifest grid layout correctly', async ({ page }) => {
    await page.goto('/');

    // Scroll to the section to trigger animations
    const whoSection = page.locator('#who');
    await whoSection.scrollIntoViewIfNeeded();

    // Verify heading text
    await expect(whoSection.locator('h2')).toContainText('Who is Email Pilots for?');

    // Verify 8 personas are rendered in the grid
    const personas = whoSection.locator('.group');
    await expect(personas).toHaveCount(8);

    // Verify grid layout classes
    const gridContainer = whoSection.locator('.grid');
    await expect(gridContainer).toHaveClass(/lg:grid-cols-4/);

    // Verify specific content in the first card
    const firstCard = personas.first();
    await expect(firstCard).toContainText('Job Seekers');
    await expect(firstCard).toContainText('01 / APPLICANT');
  });
});
