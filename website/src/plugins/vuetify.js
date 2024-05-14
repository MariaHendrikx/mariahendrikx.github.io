// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  theme: {
    defaultTheme: 'themewebsite',
    themes: {
      themewebsite: {
        dark: false,
        variables: {}, // ✅ this property is required to avoid Vuetify crash
        colors: {
          background: '#FBF9F1',
          'on-background': '#E5E1DA', // broken white
          surface: '#92C7CF',
          'on-surface': '#FBF9F1',
          primary: '#92C7CF', // blue
          'primary-darken-1': '#8f0909',
          'on-primary': '#FBF9F1',
          'primary-text': '#505050',
          secondary: '#E5E1DA', // brown
          'secondary-darken-1': '#E5E1DA',
          'secondary-text': '#505050',
          'on-secondary': '#FBF9F1',

          tertiary: '#FBF9F1',
          'tertiary-darken-1': '#03DAC5',
          'on-tertiary': '#d0c9bc  ',
          error: '#CF6679',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
          white: '#FFFFFF',
          'on-white':  '#FBF9F1', 
        },
      },
      apptheme: {
        dark: false,
        variables: {}, // ✅ this property is required to avoid Vuetify crash

        colors: {
          background: '#fde5e5',
          'on-background': '#F45555',
          surface: '#fbfbfb',
          'on-surface': '#F45555',
          primary: '#F45555',
          'primary-darken-1': '#8f0909',
          secondary: '#505050',
          'secondary-darken-1': '#03DAC5',
          'secondary-lighten-1': '#e9e9e9 ',
          'on-secondary-lighten-1': '#505050 ',
          tertiary: '#CF6679',
          'tertiary-darken-1': '#03DAC5',
          white: '#FFFFFF',
          'on-white':  '#F45555',

          green: '#0cb40c',
          'on-green': '#FFFFFF', 
        },
      },
    }
  }
})
