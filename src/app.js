import { useState } from 'react'
import Clicker from './clicker.js'

export default function app(){
    
    const [ hasClicker, setHasClicker ] = useState(true)

    const toggleClickerClick = () => {
        setHasClicker(!hasClicker)
    }

    return <>
        <button onClick={toggleClickerClick}>{ hasClicker ? 'Hide' : 'Show'} Clicker</button>
        { hasClicker ? <Clicker /> : null }
    </>
}