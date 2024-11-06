import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>Cutom App | chai</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit Google'
// }

const AnotherElement = (
    <a href="https://google.com" target = '_blank'>Visit Google</a>
)
const anotherUser = "Ankan Chatterjee"

const reactElement = React.createElement('a', {href: "https://google.com", target: '_blank'}, 'Click me to visit Google ',
    anotherUser
)

createRoot(document.getElementById('root')).render(
 
    // ReactElement // In react the render must be different than the customreact we created. It is made to return a function not an object. But it still renders in the way 'ReactElement' is written.

    reactElement // Therefore it is a problem of syntax in ReactElement.

    // <App/>
  
)