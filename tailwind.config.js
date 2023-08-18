/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,tsx,jsx}',
    './src/*.{html,js,tsx,jsx}',
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false, // 这里禁用掉基础样式，用本项目自带的基础样式，详见：https://tailwindcss.com/docs/preflight
  },
  important: 'body',
  plugins: [],
};

