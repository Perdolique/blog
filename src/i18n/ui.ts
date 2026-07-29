import type { Locale } from './config'

interface UiTranslations {
  homeMetaDescription: string
  logoAlt: string
  languageSwitcherLabel: string
  aboutHeading: string
  aboutDescription: string
  latestPostsHeading: string
  noLatestPosts: string
  lightThemeLabel: string
  darkThemeLabel: string
  systemThemeLabel: string
  githubLabel: string
  linkedinLabel: string
  twitchLabel: string
  telegramLabel: string
}

export const ui = {
  en: {
    homeMetaDescription: 'Frontend enthusiast passionate about user-friendly interfaces, human-readable code, and modern web tech. Turning tea and TypeScript into effective UI.',
    logoAlt: 'Perdolique logo',
    languageSwitcherLabel: 'Choose language',
    aboutHeading: 'About me',
    aboutDescription: 'Frontend enthusiast passionate about user-friendly interfaces, human-readable code, and modern web tech. Turning tea and TypeScript into effective UI.',
    latestPostsHeading: 'Latest posts',
    noLatestPosts: 'No posts yet, but they’re coming soon! 🚀',
    lightThemeLabel: 'Light theme',
    darkThemeLabel: 'Dark theme',
    systemThemeLabel: 'System theme',
    githubLabel: 'Visit my GitHub profile',
    linkedinLabel: 'Visit my LinkedIn profile',
    twitchLabel: 'Visit my Twitch channel',
    telegramLabel: 'Visit my Telegram channel'
  },
  ru: {
    homeMetaDescription: 'Фронтенд-энтузиаст, который любит удобные интерфейсы, понятный человекам код и современные веб-технологии. Превращаю чай и TypeScript в эффективный UI.',
    logoAlt: 'Логотип Perdolique',
    languageSwitcherLabel: 'Выбрать язык',
    aboutHeading: 'Обо мне',
    aboutDescription: 'Фронтенд-энтузиаст, который любит удобные интерфейсы, понятный человекам код и современные веб-технологии. Превращаю чай и TypeScript в эффективный UI.',
    latestPostsHeading: 'Свежие посты',
    noLatestPosts: 'Постов пока нет, но скоро появятся! 🚀',
    lightThemeLabel: 'Светлая тема',
    darkThemeLabel: 'Тёмная тема',
    systemThemeLabel: 'Системная тема',
    githubLabel: 'Открыть мой профиль на GitHub',
    linkedinLabel: 'Открыть мой профиль на LinkedIn',
    twitchLabel: 'Открыть мой канал на Twitch',
    telegramLabel: 'Открыть мой канал в Telegram'
  }
} as const satisfies Record<Locale, UiTranslations>
