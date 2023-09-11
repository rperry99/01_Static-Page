import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <PageContent/>
  )
}

function PageContent() {
  return (
    <div>
      <img src='./react-logo.png' className='logo'/>
      <h1>Fun facts about React</h1>
      <ul className="item-list">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has made over 100k stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  )
}


export default App
