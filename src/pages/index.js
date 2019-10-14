import React from "react"
import Globals from "../css/GlobalStyle"
import {ThemeProvider} from "styled-components"
import theme from "../css/theme"
import {Canvas} from "../components"

export default () => <><ThemeProvider theme={theme}><div><Globals /><Canvas trackUrl="https://res.cloudinary.com/makingthings/video/upload/v1568881368/mp3/go_for_landing.mp3"/><h1>Hello world!</h1></div></ThemeProvider></>
