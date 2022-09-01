import { useState } from 'react'
import Home from './pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container mx-auto bg-gray-100 w-full">
      <Home />
    </div>
  )
}

export default App
