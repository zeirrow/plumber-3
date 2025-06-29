tailwind.config = {
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        float: "float 3s ease-in-out infinite",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      colors: {
        primary: "#d32f2f",
        primaryDark: "#a52a2a",
        dark: "#1a1a1a",
      },
      fontFamily: {
        sans: ["Arial", "sans-serif"],
      },
      boxShadow: {
        ribbon: "0 8px 16px rgba(211, 47, 47, 0.3)",
        card: "0 10px 25px rgba(211, 47, 47, 0.15)",
      },
    },
  },
};
