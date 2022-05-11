import React from 'react'
import { useParams } from 'react-router-dom'

const KeyWord = () => {
    const {value}=useParams()
  return (
    <div>
        {
            isNaN(value)?
            <p>The word is: {value}</p>:
            <p>The Number is: {value}</p>
        }
    </div>
  )
}

export default KeyWord