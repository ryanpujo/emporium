/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-banner': "url('/banner.png')",
        'mobile-banner': "url('/mobile.png')",
        'hero-banner': "url('/Home.png')"
      },
      aspectRatio: {
        'desktop-banner': '3.23/1',
        'mobile-banner': '0.67/1'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["corporate", "synthwave"],
  },

}

