import Typography from "typography"
import theme from "../theme"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerColor: `${theme.color.black}`,
  bodyColor: `${theme.color.black}`,
  headerWeight: 400,
  bodyWeight: 400,
  headerFontFamily: [ "Roboto Mono", "monospace"],
  bodyFontFamily: ["Roboto Mono", "monospace"],
  googleFonts: [
    {
      name: 'Roboto Mono',
      styles: [
        '300',
        '400',
      ],
    },
  ],
  overrideStyles: () => ({
    'p:last-child': {
      marginBottom: 0,
    },
    blockquote: {
      margin: 0,
    },
    cite: {
      fontWeight: 300,
    },
  }),  
})

export default typography