module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode : 'class', 
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#10b981',
      },
      backgroundImage: {
        side: "url('./assets/side.jpg')",
        white: "url('./assets/white.jpg)",
        about: "url('./assets/pf.png')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
