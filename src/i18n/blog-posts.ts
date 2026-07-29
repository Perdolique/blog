import type { CollectionEntry } from 'astro:content'
import { isLocale, locales, type Locale } from './config'

export interface LocalizedBlogPost {
  entry: CollectionEntry<'blogPosts'>
  locale: Locale
  slug: string
}

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

function parseBlogPost(entry: CollectionEntry<'blogPosts'>): LocalizedBlogPost {
  const pathParts = entry.id.split('/')
  const [locale, slug] = pathParts

  if (pathParts.length !== 2 || locale === undefined || slug === undefined) {
    throw new Error(
      `Blog post "${entry.id}" must have the ID "<locale>/<slug>" without extra nesting`
    )
  }

  if (!isLocale(locale)) {
    throw new Error(
      `Blog post "${entry.id}" uses an unknown locale "${locale}". Expected one of: ${locales.join(', ')}`
    )
  }

  if (!slugPattern.test(slug)) {
    throw new Error(
      `Blog post "${entry.id}" must use a lowercase ASCII slug with words separated by hyphens`
    )
  }

  return {
    entry,
    locale,
    slug
  }
}

export function parseAndValidateBlogPosts(
  entries: CollectionEntry<'blogPosts'>[]
): LocalizedBlogPost[] {
  const posts = entries.map(parseBlogPost)
  const postsBySlug = new Map<string, Map<Locale, LocalizedBlogPost>>()

  for (const post of posts) {
    const translations = postsBySlug.get(post.slug) ?? new Map()

    if (translations.has(post.locale)) {
      throw new Error(
        `Blog post "${post.slug}" has more than one "${post.locale}" translation`
      )
    }

    translations.set(post.locale, post)
    postsBySlug.set(post.slug, translations)
  }

  for (const [slug, translations] of postsBySlug) {
    const missingLocales = locales.filter((locale) => !translations.has(locale))

    if (missingLocales.length > 0) {
      throw new Error(
        `Blog post "${slug}" is missing translations for: ${missingLocales.join(', ')}`
      )
    }

    const publicationDates = locales.map((locale) => {
      const post = translations.get(locale)

      if (post === undefined) {
        throw new Error(`Blog post "${slug}" is missing the "${locale}" translation`)
      }

      return post.entry.data.date.getTime()
    })

    if (new Set(publicationDates).size !== 1) {
      throw new Error(
        `Blog post "${slug}" translations must share the same publication date`
      )
    }
  }

  return posts
}
