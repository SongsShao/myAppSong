module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  mini: {},
  h5: {},
  copy: {
    patterns: [
      {
        from: 'src/pages/assets/fonts/',
        to: 'dist/pages/assets/fonts/'
      },
      {
        from: 'src/components/',
        to: 'dist/components/'
      },
      {
        from: 'src/pages/resource/',
        to: 'dist/pages/resource/'
      },
    ],
    options: {
    }
  }
}
