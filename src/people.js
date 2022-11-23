import { useEffect, useState } from 'react'

export default function People({  })
{
    const [ people, setPeople ] = useState([
        { id: '1', name: 'Esteban' },
        { id: '2', name: 'Bailey' },
        { id: '3', name: 'Chris' },
        { id: '4', name: 'Christian' },
        { id: '5', name: 'Karl' }
    ]) 

    //Api fetching
    const getPeople = async () => 
    {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        console.log(response)
        const result = await response.json()
        console.log(result)
        setPeople(result)
    }

    useEffect(() => 
    {
        getPeople()
    }, [])

    return <div>
        <h2>People</h2>

        <ul className='people'>
            { people.map((person) => 
            <li key={person.id}> 
                Name: <strong><i>{ person.name}</i></strong> <br/>
                Username: <strong>{person.username}</strong> <br/>
                Email: <strong><ins>{person.email}</ins></strong> <br/>
                Phone:<strong>{person.phone}</strong> <br/><br/>
            </li>)}
        </ul>
    </div>
}