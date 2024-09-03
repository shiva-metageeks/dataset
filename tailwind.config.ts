import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      typography: (theme: any) => ({
        dark: {
          css: {
            color: theme("colors.gray.300"),
            h1: {
              color: theme("colors.white"),
            },
            h2: {
              color: theme("colors.white"),
            },
            p: {
              color: theme("colors.gray.400"),
            },
            code: {
              color: theme("colors.pink.500"),
              // backgroundColor: theme("colors.gray.800"),
              // padding: "0.2em 0.4em",
              borderRadius: theme("borderRadius.sm"),
            },

            "pre code": {
              // backgroundColor: theme("colors.gray.900"),
              // padding: "1em",
              borderRadius: theme("borderRadius.md"),
            },
            a: {
              color: theme("colors.blue.400"),
              textDecoration: "underline",
            },
            "code.json .json-key": {
              color: theme("colors.blue.400"),
            },
            "code.json .json-value": {
              color: theme("colors.green.400"),
            },
            "code.json .json-string": {
              color: theme("colors.yellow.400"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
