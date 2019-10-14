import colors from "colors.css"

const baseTheme = {
    blue: colors.aqua,
    red: colors.maroon

}

const  theme = {
    ...baseTheme,
    fontSizes: [12, 14, 16, 20, 24, 72],
    colors: {
        primary: baseTheme.blue,
        secondary: baseTheme.red
    }
}

export default theme