import { useRef, useState, useEffect } from 'react'
import './style.css'

export default function Clicker({ increment, keyName, color })
{
    const [ count, setCount ] = useState(parseInt(localStorage.getItem(keyName) ?? 0))
    const buttonRef = useRef()

    useEffect(() => 
    {
        buttonRef.current.style.backgroundColor = 'indigo'
        buttonRef.current.style.color = 'violet'
        
        return () => 
        {
            localStorage.removeItem(keyName)
        }
    }, [])
    
    useEffect(() => 
    {
        localStorage.setItem(keyName, count)
    }, [ count ])

   
    const buttonClicked = () => 
    {
        setCount(count + 1)
        increment()
    }

    return <div>
    <div style={{color: color}}>Click count: { count }</div>
    <button ref={buttonRef} onClick={buttonClicked}>Click me</button>
    </div>
} 