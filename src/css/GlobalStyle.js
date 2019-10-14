import { createGlobalStyle } from "styled-components"
import {normalize} from "styled-normalize"
import css from '@styled-system/css'

const Globals = createGlobalStyle`
${normalize}
@import url("https://cloud.typography.com/6243072/6757812/css/fonts.css");

html{
    box-sizing: border-box;
}

*, *::before, *::after{
    box-sizing: inherit;
}

body, html{
    width: 100%;
    height: 100%
}



h1,h2,h3{
    font-family: "Tungsten A", "Tungsten B";
    font-style: normal;
    font-weight: 700;
    ${css({
        fontSize: [5],
        color: "secondary"
    })}
}
.fancyNumbers{
    font-family: "Numbers Dividend A", "Numbers Dividend B";
    font-style: normal;
    font-weight: 400;
}
`

export default Globals