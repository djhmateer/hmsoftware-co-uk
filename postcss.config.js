module.exports = {
    // plugins: {
    //   tailwindcss: {},
    //   autoprefixer: {},
    // }
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
      // export NODE_ENV=production
      // export NODE_ENV=development
      // minification
      // require('cssnano')({
      //     preset: 'default',
      //   }),
  ]
  }