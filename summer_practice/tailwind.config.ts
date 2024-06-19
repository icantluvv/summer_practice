import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}"
    ],

    plugins: [
        require("@tailwindcss/line-clamp"),
        plugin(function ({ addUtilities }) {
            addUtilities({
                ".scrollbar-hide": {
                    /* Hide scrollbar for Chrome, Safari, and Opera */
                    "&::-webkit-scrollbar": {
                        display: "none"
                    },
                    /* Hide scrollbar for IE, Edge, and Firefox */
                    "-ms-overflow-style": "none" /* IE and Edge */,
                    "scrollbar-width": "none" /* Firefox */
                }
            })
        })
    ]
}
export default config
