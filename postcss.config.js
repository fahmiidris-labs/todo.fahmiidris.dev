const postcssConfig = {
  plugins: [
    require('tailwindcss/nesting'),
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};

module.exports = postcssConfig;
