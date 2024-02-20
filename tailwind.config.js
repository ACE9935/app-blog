/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {colors: {
      primary: '#14532d',
      secondary: '#A52A2A',
      darkP:'#D2B48C',
      lightP:'#eadfc5'
      
            // Add more colors as needed
    },
   fontFamily:{
    primary:'Holtwood One SC',
    secondary:"Bubblegum Sans"
   }
  },
  },
  plugins: [],

}

