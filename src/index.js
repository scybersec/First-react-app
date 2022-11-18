import { createRoot } from 'react-dom'
import './style.css'
import App from './app.js'

const root = createRoot(document.querySelector('#root'))

root.render(
    <div>
        <App />
    </div>
)