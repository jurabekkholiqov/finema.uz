export const CONFIG = {
  TELEGRAM_ADMIN: "Finema_admin",
  TELEGRAM_ADMIN_URL: "https://t.me/Finema_admin",
  TELEGRAM_BOT: "finemabot", // Reserved for future bot integration
  INSTAGRAM: "https://instagram.com/Finema_uz",
  PHONE_DISPLAY: "97 587 22 00",
  PHONE_LINK: "tel:+998975872200",
  FULL_PHONE_DISPLAY: "+998 97 587 22 00",
} as const;

export type Language = 'uz' | 'ru' | 'en';

/**
 * Generates a localized Telegram order link with prefilled text
 * UZ: "Assalomu alaykum, Finema [product name] [size] mahsulotiga buyurtma bermoqchiman."
 * RU: "Здравствуйте, я хочу заказать средство Finema [product name] [size]."
 * EN: "Hello, I would like to order Finema [product name] [size]."
 */
export function getTelegramOrderUrl(productName?: string, size?: string, lang: Language = 'uz'): string {
  if (!productName) {
    const defaultMessages: Record<Language, string> = {
      uz: "Assalomu alaykum, Finema mahsulotlari bo'yicha buyurtma bermoqchiman.",
      ru: "Здравствуйте, я хочу сделать заказ продукции Finema.",
      en: "Hello, I would like to place an order for Finema products.",
    };
    const text = encodeURIComponent(defaultMessages[lang] || defaultMessages.uz);
    return `${CONFIG.TELEGRAM_ADMIN_URL}?text=${text}`;
  }

  const pName = productName;
  const pSize = size ? ` ${size}` : "";

  let rawMessage = "";
  if (lang === 'ru') {
    rawMessage = `Здравствуйте, я хочу заказать средство Finema ${pName}${pSize}.`;
  } else if (lang === 'en') {
    rawMessage = `Hello, I would like to order Finema ${pName}${pSize}.`;
  } else {
    // uz default
    rawMessage = `Assalomu alaykum, Finema ${pName}${pSize} mahsulotiga buyurtma bermoqchiman.`;
  }

  return `${CONFIG.TELEGRAM_ADMIN_URL}?text=${encodeURIComponent(rawMessage)}`;
}

/**
 * Generates a Telegram link for wholesale inquiries
 */
export function getTelegramWholesaleUrl(lang: Language = 'uz'): string {
  const messages: Record<Language, string> = {
    uz: "Assalomu alaykum, Finema mahsulotlarini ulgurji (optom) xarid qilish bo'yicha hamkorlik qilmoqchiman.",
    ru: "Здравствуйте, я хочу сотрудничать по оптовым закупкам продукции Finema.",
    en: "Hello, I am interested in wholesale partnership for Finema products.",
  };
  const text = encodeURIComponent(messages[lang] || messages.uz);
  return `${CONFIG.TELEGRAM_ADMIN_URL}?text=${text}`;
}
