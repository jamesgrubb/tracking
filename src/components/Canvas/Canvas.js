import React, {useEffect, useRef} from "react"
import {StyledCanvas} from "./Canvas.Styled"
import { useWindowSize } from "react-hooks-window-size"
import Tone from "tone"


const Canvas = ({trackUrl}) => {
    


    const size = useWindowSize()    
    const cnvRef = useRef(null)
    useEffect(()=> {
        const fft = new Tone.FFT({
            size: 1024
        })
        const player = new Tone.Player(trackUrl).connect(fft).toMaster()
        const value = fft.getValue()
        
        player.autostart = true
        const cnv = cnvRef.current
        let animationId, i= 0
        const draw = () => {
           
            const ctx = cnv.getContext('2d')
            ctx.clearRect(0,0, cnv.width, cnv.height)
            ctx.fillRect(40, 400, 400, Math.abs(fft.getValue()))
        
            i+= 0.04
            animationId = requestAnimationFrame(draw)            
         }
    
         draw()
    
         return()=> cancelAnimationFrame(animationId)
    },[trackUrl])

    return(
        <StyledCanvas ref={cnvRef} width={size.width} height={size.height} />
    )
}

export default Canvas