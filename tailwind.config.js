/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            width: {
                "custom-420": "26.25rem",
            },
            height: {
                "custom-595": "37.188rem",
            },
            padding: {
                "custom-50": "3.125rem",
            },
            colors: {
                "teal-400": "#40E0EB",
                "teal-500": "#00ADBA",
                "teal-600": "#00878F",
                "teal-800": "#007679",
                "gray-border": "#E2E8F0",
                "gray-border-2": "#F9F9F9",
                "gray-border-3": "#CBD5E1",
                "teal-stop": "#0FCDBA",
                "form-border": "E4E4E7",
            },
            backgroundColor: {
                header: "#fff",
                body: "#F9F9F9",
            },
            borderRadius: {
                sm: "0.5rem",
                md: "1.25rem",
                lg: "var(--radius)",
            },
            gap: {
                "30px": "30px",
                "10px": "10px",
                "6px": "6px",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
