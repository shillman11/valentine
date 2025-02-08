/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        pulseRotate: "pulseRotate 3s ease-in-out infinite", // Custom pulseRotate animation
        pulseRotateDelay: "pulseRotateDelay 3s ease-in-out infinite", // Custom pulseRotate animation
        rotate: "rotate 3s ease-in-out infinite",
        rotateDelay: "rotateDelay 3s ease-in-out infinite",
      },

      keyframes: {
        pulseRotate: {
          "0%, 100%": {
            transform: "rotate(-15deg)", // Start rotating to the left
            opacity: 0.5, // Transparency starts at 50%
          },
          "50%": {
            transform: "rotate(15deg)", // Rotate to the right
            opacity: 1, // Transparency ends at 100%
          },
        },

        pulseRotateDelay: {
          "0%, 100%": {
            transform: "rotate(15deg)", // Start rotating to the left
            opacity: 1, // Transparency starts at 50%
          },
          "50%": {
            transform: "rotate(-15deg)", // Rotate to the right
            opacity: 0.5, // Transparency ends at 100%
          },
        },

        rotate: {
          "0%, 100%": {
            transform: "rotate(1deg)", // Start rotating to the left
          },
          "50%": {
            transform: "rotate(-1deg)", // Rotate to the right
          },
        },

        rotateDelay: {
          "0%, 100%": {
            transform: "rotate(-1deg)", // Start rotating to the left
          },
          "50%": {
            transform: "rotate(1deg)", // Rotate to the right
          },
        },
      },
    },
  },
  plugins: [],
};
