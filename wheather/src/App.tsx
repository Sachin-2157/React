import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from "./components/ui/button.tsx"
import { Alert} from "./components/ui/alert.tsx"
import './App.css'

function App() {
  
  return (
    <>
      <h1>new</h1>
      <div className="flex flex-col items-center justify-center min-h-svh">
      <Button>Click me</Button>
      </div> <Button>Click me</Button>
      <div>
        <Alert>
          wowowwowow
        </Alert>
      </div>
    </>
   
  )
}

export default App
