import React from 'react'
import {useParams} from "react-router-dom"

const Word = () => {
    const {word}=useParams()
  return (
    <div>
        <p>The word is: {Word}</p>
    </div>
  )
}

export default Word