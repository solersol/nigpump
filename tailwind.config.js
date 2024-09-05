// // /** @type {import('tailwindcss').Config} */
// // export default {
// //   content: [
// //     "./index.html",
// //     "./src/**/*.{js,ts,jsx,tsx}",
// //   ],
// //   theme: {
// //     fontSize: {
// //       xs: ['12px', '16px'],
// //       sm: ['14px', '20px'],
// //       base: ['16px', '19.5px'],
// //       lg: ['18px', '21.94px'],
// //       xl: ['20px', '24.38px'],
// //       '2xl': ['24px', '29.26px'],
// //       '3xl': ['28px', '50px'],
// //       '4xl': ['48px', '58px'],
// //       '8xl': ['96px', '106px']
// //     },
// //     extend: {
// //       fontFamily: {
// //         palanquin: ['Palanquin', 'sans-serif'],
// //         montserrat: ['Montserrat', 'sans-serif'],
// //         anton: ['Anton SC', 'sans-serif'],
// //         comic: ['Comic Neue', 'cursive']
// //       },
// //       colors: {
// //         'primary': "#ECEEFF",
// //         "coral-red": "#FF6452",
// //         "slate-gray": "#6D6D6D",
// //         "pale-blue": "#F5F6FF",
// //         "white-400": "rgba(255, 255, 255, 0.80)"
// //       },
// //       boxShadow: {
// //         '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
// //       },
// //       backgroundImage: {
// //         'hero': "url('assets/images/collection-background.svg')",
// //         'card': "url('assets/images/thumbnail-background.svg')",
// //       },
// //       screens: {
// //         "wide": "1440px"
// //       },
// //       animation: {
// //         marque: 'marque 30s linear infinite',
// //       },
// //       keyframes: {
// //         marque: {
// //           '0%': { backgroundPosition: '0 0' },
// //           '100%': { backgroundPosition: '100vw 0' },
// //         },
// //       }, 

      
      
// //     },
// //   },
// //   plugins: [],
  
// // }


// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     fontSize: {
//       xs: ['12px', '16px'],
//       sm: ['14px', '20px'],
//       base: ['16px', '19.5px'],
//       lg: ['18px', '21.94px'],
//       xl: ['20px', '24.38px'],
//       '2xl': ['24px', '29.26px'],
//       '3xl': ['28px', '50px'],
//       '4xl': ['48px', '58px'],
//       '8xl': ['96px', '106px']
//     },
//     extend: {
//       fontFamily: {
//         palanquin: ['Palanquin', 'sans-serif'],
//         montserrat: ['Montserrat', 'sans-serif'],
//         anton: ['Anton SC', 'sans-serif'],
//         comic: ['Comic Neue', 'cursive']
//       },
//       colors: {
//         'primary': "#ECEEFF",
//         "coral-red": "#FF6452",
//         "slate-gray": "#6D6D6D",
//         "pale-blue": "#F5F6FF",
//         "white-400": "rgba(255, 255, 255, 0.80)"
//       },
//       boxShadow: {
//         '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
//       },
//       backgroundImage: {
//         'hero': "url('assets/images/collection-background.svg')",
//         'card': "url('assets/images/thumbnail-background.svg')",
//       },
//       screens: {
//         "wide": "1440px"
//       },
//       animation: {
//         marque: 'marque 30s linear infinite',
//         shake: 'shake 2s ease-in-out infinite 3s', // Added shake animation
//       },
//       keyframes: {
//         marque: {
//           '0%': { backgroundPosition: '0 0' },
//           '100%': { backgroundPosition: '100vw 0' },
//         },
//         shake: {
//           '0%': { transform: 'translateX(0)' },
//           '25%': { transform: 'translateX(-10px)' },
//           '50%': { transform: 'translateX(10px)' },
//           '75%': { transform: 'translateX(-10px)' },
//           '100%': { transform: 'translateX(0)' },
//         },
//       }, 
//     },
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        anton: ['Anton SC', 'sans-serif'],
        comic: ['Comic Neue', 'cursive']
      },
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
        'yellow-bg': '#FFEB3B', // Added yellow color for background
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('assets/images/collection-background.svg')",
        'card': "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        "wide": "1440px"
      },
      animation: {
        marque: 'marque 30s linear infinite',
        shake: 'shake 0.5s ease-in-out infinite 2s', // Faster shake
      },
      keyframes: {
        marque: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '100vw 0' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%': { transform: 'translateX(-8px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(8px)' },
        },
      },
    },
  },
  plugins: [],
};
