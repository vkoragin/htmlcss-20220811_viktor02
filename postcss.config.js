module.export = {
  syntax: "postcss-scss",
  map: {
    inline: true
  },
  plugins: [
    require("postcss-advanced-variables"),
    require("postcss-nested"),
    require("postcss-import"),
    require("postcss-strip-inline-comments"),
    require("autoprefixer"),
    require("cssnano")
  ]
}