import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  // function changeBackgroundColor(color){
  //   setColor(color)
  // }

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-2 py-2 rounded-3xl">
            <button
              className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
              style={{backgroundColor: "red"}}
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
              style={{backgroundColor: "green"}}
              onClick={() => setColor("green")}
            >
              Green
            </button>

            <button className='outline-none px-4 py-1 shadow-lg text-black rounded-full'
            style={{backgroundColor: "blue"}}
            onClick={() => setColor("blue")}
            >Blue</button>

            <button className='outline-none px-4 py-1 shadow-lg rounded-full text-black'
            style={{backgroundColor: "purple"}}
            onClick={() => setColor("purple")}
            >purple</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
