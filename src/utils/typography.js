import Typography from 'typography'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

const options = {
  baseFontSize: '18px',
  baseLineHeight: 1.5,
  scaleRatio: 2.5,
  headerFontFamily: ['system-ui', 'Segoe UI', 'Tahoma', 'sans-serif'],
  bodyFontFamily: ['system-ui', 'Segoe UI', 'Tahoma', 'sans-serif'],
  overrideStyles: ({ rhythm, scale }, options) => ({
    [MOBILE_MEDIA_QUERY]: {
      // Make baseFontSize on mobile 16px.
      html: {
        fontSize: `16px`,
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: rhythm(7 / 8),
      marginBottom: rhythm(1 / 2),
    },
  }),
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
