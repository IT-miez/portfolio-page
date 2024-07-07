import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Model, Model2 } from "./utils/three.tsx"
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from "@react-three/drei";
import { ProjectCard } from './components/project_card.tsx'
import { Credits } from './components/Credits.tsx'

/*
Important test code
<Box position={[-1.2, 0, 0]} />
<Box position={[1.2, 0, 0]} />
*/

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>Portfolio page</h1>
      <div className='canvasdiv'>
        <Canvas style={{ width: '100vw', height: '100vh' }}>
          <Suspense fallback={null}>
            <Model />
            <Model2 />
            <OrbitControls enableZoom={false} />
            <Environment preset="sunset" background />
          </Suspense>
          <ambientLight intensity={Math.PI / 2} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
          <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        </Canvas>
      </div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div className='main-content'>
        <h1 className="lowerHeader">Projects</h1>
      <ProjectCard header={'Fullstack Blog App'} summary={'A fullstack application made with React, Node.js and MongoDB.'} technologies={["MongoDB", "Node.js", "React"]} />
      </div>

      <Credits credits={'"Tux" (https://skfb.ly/U6Av) by Andy Cuccaro is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).'}/>
      
    </>
  )
}

export default App
