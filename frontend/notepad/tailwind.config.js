/** @type {import('tailwindcss').Config} */
export const content = [
  ".index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      primary: "#2B85FF",
      secondary: "#EF863E",
      brown: 'brown',
      darkbrown: 'darkbrown',
      white: 'white',
      beige: '#EBEBB8',
      lightbeige: '#EBEBB8',
      gray: 'lightgray',
      darkgray: 'gray',
      yellow: '#BDB232',
    }
  },
};
export const plugins = [];

