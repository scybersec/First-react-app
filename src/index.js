import { createRoot } from 'react-dom'
import './style.css'
import App from './app.js'

const root = createRoot(document.querySelector('#root'))

root.render(
    <div>
       <App clickersCount = {5}>
            <h1>My First react app</h1>
            <h2>It's lit</h2>
       </App>
    </div>
)