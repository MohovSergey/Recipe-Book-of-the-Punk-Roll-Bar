const {heroui} = require('@heroui/theme');
import { heroui } from "@heroui/theme";
  plugins: [heroui()],
  content: [
    "./node_modules/@heroui/theme/dist/components/(form|input|modal|navbar).js"
],

/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
];

export const theme = {
  extend: {},
};

export const darkMode = "class"; // управление через класс 'dark'
export const plugins = [heroui()];
