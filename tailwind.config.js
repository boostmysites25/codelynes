/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sapphire Veil Color Palette
        'primary': '#0D1B2A', // Midnight Navy - Primary
        'secondary': '#1F3C88', // Sapphire Blue - Secondary
        'secondary-alt': '#3A5BA0', // Luminous Sapphire - Accent
        'accent-white': '#F5F7FA', // Soft Mist - Accent
        'accent-light-blue': '#C7D9FF', // Veil Blue - Accent
        // Legacy aliases for backward compatibility
        'coral': '#3A5BA0',
        'deep-red': '#1F3C88',
        'silver': '#0D1B2A',
      },
      boxShadow: {
        large: "0px 0px 30px 10px",
        'infynic': "0 4px 20px rgba(31, 60, 136, 0.18)",
        'infynic-lg': "0 10px 40px rgba(13, 27, 42, 0.25)",
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0D1B2A 0%, #1F3C88 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #1F3C88 0%, #3A5BA0 100%)',
        'gradient-accent': 'linear-gradient(135deg, #C7D9FF 0%, #F5F7FA 100%)',
      },
    },
  },
  plugins: [],
}