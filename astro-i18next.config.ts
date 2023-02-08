import type { AstroI18nextConfig } from "astro-i18next";

const config: AstroI18nextConfig = {
  defaultLocale: "en",
  locales: ["en", "ru"],
  i18nextServer: {
    debug: process.env.NODE_ENV !== "production",
    backend: {
      loadPath: "./public/locales/{{lng}}/{{ns}}.json",
    },
  },
};

export default config;
