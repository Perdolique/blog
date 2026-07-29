export const locales = ['en', 'ru'] as const

export type Locale = typeof locales[number]

export const defaultLocale: Locale = 'en'

export function isLocale(value: string | undefined): value is Locale {
  return locales.some((locale) => locale === value)
}

export function getCurrentLocale(value: string | undefined): Locale {
  if (!isLocale(value)) {
    throw new Error(`Unsupported page locale: "${value ?? 'undefined'}"`)
  }

  return value
}
