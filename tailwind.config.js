module.exports = {
  content: [
    './index.html', // If you have an index.html
    './src/**/*.{js,ts,jsx,tsx}' // Include all your React files in the src folder
  ],
  theme: {
    extend: {
      spacing: {
        '15': '3.75rem', // Adds p-15 (15 units of spacing = 3.75rem)
        '18': '4.5rem',  // Adds p-18 (18 units of spacing = 4.5rem)
        '20': '5rem',    // Adds p-20 (20 units of spacing = 5rem)
        '24': '6rem',    // Adds p-24 (24 units of spacing = 6rem)
        '32': '8rem',    // Adds p-32 (32 units of spacing = 8rem)
        // Add any other custom padding values as you like
      }

    },
  },
  plugins: [],
};
