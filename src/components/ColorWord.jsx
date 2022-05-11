import React from 'react'
import { useParams } from 'react-router-dom'

const ColorWord = () => {
    const {color, word}= useParams()
  return (
    <div>
        <p style={{color:color}}>The word is: {word}</p>
    </div>
  )
}

export default ColorWord