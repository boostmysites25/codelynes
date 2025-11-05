/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Codelynes Color Palette
        'primary': '#C0C0C0', // Silver Gray - Primary
        'secondary': '#8B0000', // Deep Red - Secondary
        'secondary-alt': '#FF6F61', // Coral - Secondary Alternative
        'accent-white': '#FFFFFF', // White - Accent
        'accent-light-blue': '#D0E8FF', // Light Blue - Accent
        // Legacy support for existing components
        'coral': '#FF6F61',
        'deep-red': '#8B0000',
        'silver': '#C0C0C0',
      },
      boxShadow: {
        large: "0px 0px 30px 10px",
        'codelynes': "0 4px 20px rgba(139, 0, 0, 0.15)",
        'codelynes-lg': "0 10px 40px rgba(139, 0, 0, 0.2)",
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #C0C0C0 0%, #8B0000 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #8B0000 0%, #FF6F61 100%)',
        'gradient-accent': 'linear-gradient(135deg, #D0E8FF 0%, #FFFFFF 100%)',
      },
    },
  },
  plugins: [],
}