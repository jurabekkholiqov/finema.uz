import { Language, getTelegramOrderUrl } from '../config';

export interface ProductVariant {
  id: string;
  name: Record<Language, string>;
  size: string;
  image: string;
  webpImage: string;
  scent?: Record<Language, string>;
  colorTag?: string;
}

export interface ProductCategory {
  id: string;
  titleKey: string;
  taglineKey: string;
  descKey: string;
  mainImage: string;
  mainWebpImage: string;
  badgeKey?: string;
  variants: ProductVariant[];
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'dishwashing',
    titleKey: 'products.categories.dish.title',
    taglineKey: 'products.categories.dish.tagline',
    descKey: 'products.categories.dish.desc',
    mainImage: '/images/dish-500ml.jpg',
    mainWebpImage: '/images/dish-500ml.webp',
    variants: [
      {
        id: 'dish-500-apple',
        name: {
          uz: "Idish yuvish geli (Olma)",
          ru: "Гель для посуды (Яблоко)",
          en: "Dishwashing Gel (Apple)"
        },
        size: "500 ml",
        image: "/images/dish-500ml.jpg",
        webpImage: "/images/dish-500ml.webp",
        scent: { uz: "Yashil olma", ru: "Зеленое яблоко", en: "Green Apple" },
        colorTag: "#8CC63F"
      },
      {
        id: 'dish-500-lemon',
        name: {
          uz: "Idish yuvish geli (Limon)",
          ru: "Гель для посуды (Лимон)",
          en: "Dishwashing Gel (Lemon)"
        },
        size: "500 ml",
        image: "/images/dish-500ml.jpg",
        webpImage: "/images/dish-500ml.webp",
        scent: { uz: "Sariq limon", ru: "Сочный лимон", en: "Fresh Lemon" },
        colorTag: "#F2C230"
      },
      {
        id: 'dish-1l-lemon',
        name: {
          uz: "Idish yuvish geli (Limon)",
          ru: "Гель для посуды (Лимон)",
          en: "Dishwashing Gel (Lemon)"
        },
        size: "1 L",
        image: "/images/dish-1l.jpg",
        webpImage: "/images/dish-1l.webp",
        scent: { uz: "Limon", ru: "Лимон", en: "Lemon" }
      },
      {
        id: 'dish-1l-apple',
        name: {
          uz: "Idish yuvish geli (Olma)",
          ru: "Гель для посуды (Яблоко)",
          en: "Dishwashing Gel (Apple)"
        },
        size: "1 L",
        image: "/images/dish-1l.jpg",
        webpImage: "/images/dish-1l.webp",
        scent: { uz: "Olma", ru: "Яблоко", en: "Apple" }
      },
      {
        id: 'dish-1l-strawberry',
        name: {
          uz: "Idish yuvish geli (Qulupnay)",
          ru: "Гель для посуды (Клубника)",
          en: "Dishwashing Gel (Strawberry)"
        },
        size: "1 L",
        image: "/images/dish-1l.jpg",
        webpImage: "/images/dish-1l.webp",
        scent: { uz: "Qulupnay", ru: "Клубника", en: "Strawberry" }
      },
      {
        id: 'dish-4l-green',
        name: {
          uz: "Idish yuvish geli (Yashil kanistra)",
          ru: "Гель для посуды (Зеленая канистра)",
          en: "Dishwashing Gel (Green Canister)"
        },
        size: "4.2 L",
        image: "/images/dish-4l.jpg",
        webpImage: "/images/dish-4l.webp",
        colorTag: "#1B6B2F"
      },
      {
        id: 'dish-4l-red',
        name: {
          uz: "Idish yuvish geli (Qizil kanistra)",
          ru: "Гель для посуды (Красная канистра)",
          en: "Dishwashing Gel (Red Canister)"
        },
        size: "4.2 L",
        image: "/images/dish-4l.jpg",
        webpImage: "/images/dish-4l.webp",
        colorTag: "#E53E3E"
      },
      {
        id: 'dish-4l-yellow',
        name: {
          uz: "Idish yuvish geli (Sariq kanistra)",
          ru: "Гель для посуды (Желтая канистра)",
          en: "Dishwashing Gel (Yellow Canister)"
        },
        size: "4.2 L",
        image: "/images/dish-4l.jpg",
        webpImage: "/images/dish-4l.webp",
        colorTag: "#F2C230"
      }
    ]
  },
  {
    id: 'laundry',
    titleKey: 'products.categories.laundry.title',
    taglineKey: 'products.categories.laundry.tagline',
    descKey: 'products.categories.laundry.desc',
    mainImage: '/images/laundry-gel-2-2kg.jpg',
    mainWebpImage: '/images/laundry-gel-2-2kg.webp',
    variants: [
      {
        id: 'laundry-gel-rose-2.2kg',
        name: {
          uz: "Kir yuvish geli 'Deep Clean' (Atirgul hidi)",
          ru: "Гель для стирки 'Deep Clean' (Аромат розы)",
          en: "Laundry Gel 'Deep Clean' (Rose Fragrance)"
        },
        size: "2.2 kg",
        image: "/images/laundry-gel-2-2kg.jpg",
        webpImage: "/images/laundry-gel-2-2kg.webp",
        scent: { uz: "Atirgul", ru: "Роза", en: "Rose" }
      },
      {
        id: 'laundry-powder-2.5l',
        name: {
          uz: "Kir yuvish kukuni / Suyuq vosita",
          ru: "Стиральный порошок / Жидкое средство",
          en: "Laundry Detergent / Liquid Wash"
        },
        size: "2.5 L",
        image: "/images/laundry-2-5l.jpg",
        webpImage: "/images/laundry-2-5l.webp"
      },
      {
        id: 'laundry-soap-5l',
        name: {
          uz: "Suyuq kir yuvish vositasi",
          ru: "Жидкое средство для стирки",
          en: "Liquid Laundry Detergent"
        },
        size: "5 L",
        image: "/images/laundry-5l-soap.jpg",
        webpImage: "/images/laundry-5l-soap.webp"
      }
    ]
  },
  {
    id: 'glass',
    titleKey: 'products.categories.glass.title',
    taglineKey: 'products.categories.glass.tagline',
    descKey: 'products.categories.glass.desc',
    mainImage: '/images/glass-cleaner-500ml.jpg',
    mainWebpImage: '/images/glass-cleaner-500ml.webp',
    variants: [
      {
        id: 'glass-500ml',
        name: {
          uz: "Shisha va oyna tozalagich sprey",
          ru: "Спрей для мытья стекол и зеркал",
          en: "Glass & Window Cleaning Spray"
        },
        size: "500 ml",
        image: "/images/glass-cleaner-500ml.jpg",
        webpImage: "/images/glass-cleaner-500ml.webp"
      }
    ]
  },
  {
    id: 'soap72',
    titleKey: 'products.categories.soap.title',
    taglineKey: 'products.categories.soap.tagline',
    descKey: 'products.categories.soap.desc',
    mainImage: '/images/soap-72.jpg',
    mainWebpImage: '/images/soap-72.webp',
    variants: [
      {
        id: 'soap-72-brown-2.5l',
        name: {
          uz: "Suyuq xo'jalik sovuni 72% Universal (Qo'ng'ir)",
          ru: "Жидкое хозяйственное мыло 72% (Коричневое)",
          en: "Liquid Household Soap 72% (Brown)"
        },
        size: "2.5 L",
        image: "/images/soap-72.jpg",
        webpImage: "/images/soap-72.webp",
        colorTag: "#8B5A2B"
      },
      {
        id: 'soap-72-5l',
        name: {
          uz: "Suyuq xo'jalik sovuni 72% Universal",
          ru: "Жидкое хозяйственное мыло 72% Универсальное",
          en: "Liquid Household Soap 72% Universal"
        },
        size: "5 L",
        image: "/images/soap-72.jpg",
        webpImage: "/images/soap-72.webp"
      }
    ]
  }
];
