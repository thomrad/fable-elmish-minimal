// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
    public: '/',
    src: '/src'
  },
  plugins: [
    /* ... */
  ],
  packageOptions: {
    /* ... */
    knownEntrypoints: ["react-dom"]
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
