/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        /** **********************************************************
         * font ในโปรเจคเรา เวลาจะใช้ให้ใส่ใน className="font-racing" ประมาณนี้
         ********************************************************** */
        'geist': 'var(--font-geist-mono)', 
        'racing': 'var(--font-racing)',
        'bayon': 'var(--font-bayon)',
        'bebas': 'var(--font-bebas)',

      },
      colors:{
        /** *******************************************************************************************
         * สีในโปรเจคเรา ขาวดำใช้ปกติ สีที่เพิ่มเข้ามาจะนำด้วย custom เวลาจะใช้ให้ใส่ใน className="ิbg-custom-green" ประมาณนี้
        ********************************************************************************************* */
        transparent: 'transparent',
        current: 'currentColor',
      'custom-green':'#04F06A',
      'custom-pink':'#FF206E'
  },
  textStrokeWidth: {
    '1': '1px',
    '2': '2px',
  },
  textStrokeColor: theme => theme('colors'),
  }
  },
  
  plugins: [  function({ addUtilities, theme, e }) {
    const newUtilities = {};
    Object.entries(theme('textStrokeWidth')).forEach(([key, value]) => {
      Object.entries(theme('textStrokeColor')).forEach(([name, color]) => {
        const className = `.text-stroke-${e(key)}-${e(name)}`;
        newUtilities[className] = {
          '-webkit-text-stroke-width': value,
          '-webkit-text-stroke-color': color,
        };
      });
    });
    addUtilities(newUtilities, ['responsive', 'hover']);
  }],
}

