import { test, expect } from '@playwright/test'

test('TC-01: Ver portafolio', async ({ page }) => {
  await page.goto('https://amuroqa.github.io/Portafolio/')

  await expect(page.getByRole('heading', { name: 'Alejandro Muro' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'proyectos' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'contacto' })).toBeVisible()

  const tarjetaWeather = page.locator('.tarjeta').filter({ hasText: 'Weather app' })
  await tarjetaWeather.scrollIntoViewIfNeeded()
  await expect(tarjetaWeather.getByRole('link', { name: 'Demo' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Sobre mí' })).toBeVisible()
  await page.locator('footer').scrollIntoViewIfNeeded()
  await expect(page.locator('footer').getByText('© 2026 Alejandro Muro')).toBeVisible()
})