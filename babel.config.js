module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'transform-define',
      {
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': true
      }
    ]
  ]
}