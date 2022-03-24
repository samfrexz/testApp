module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navColor: '#292929',
        bgg: '#E5E5E5'
      },
      spacing: {
        contain: '90%',
        gridBox: '300px',
        flexBox: '1520px',
        smBox: '200px',
        banaHeight: '550px',
        smBana: '257px'
      },
      lineHeight: {
        lead: '93.74px'
      }
    },
    fontFamily: {
      dmSans: ['DM Sans', 'sans-serif', 'Merriweather', 'serif', 'Mulish', 'Roboto']
    },
    fontSize: {
      large: '72px',
      tin: '24px',
      small: '32px'
    },
    minWidth: {
      min: '1520px',
      smMin: '1020px'
    }
  },
  plugins: [],
}
