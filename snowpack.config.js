module.exports = {
  mount: {
    public: {
      url: "/",
      static: true,
    },
    src: "/dist",
  },
  plugins: [
    "@snowpack/plugin-typescript",
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-webpack",
    // "@canarise/snowpack-eslint-plugin",
  ],

  // optimize: {
  //   bundle: true,
  //   minify: true,
  //   target: "es2018",
  // },
};
