import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Model, ModelRotating } from "./utils/three.tsx"
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from "@react-three/drei";
import { ProjectCard } from './components/ProjectCard.tsx'
import { Credits } from './components/Credits.tsx'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { SkillCard } from './components/SkillCard.tsx'

/*
Important test code
<Box position={[-1.2, 0, 0]} />
<Box position={[1.2, 0, 0]} />
*/

function App() {
  const [count, setCount] = useState(0)

  const puhelin = useLoader(GLTFLoader, "/scene.gltf")
  // <Model gltf={puhelin} position={[0, 6, -6]}/>
  const linux = useLoader(GLTFLoader, "/linux_tux/scene.gltf") 
  const react = useLoader(GLTFLoader, "/react_logo/scene.gltf") 
  const windowslogo = useLoader(GLTFLoader, "/windows_logo/scene.gltf")
  const raspberrypi = useLoader(GLTFLoader, "/raspberrypi/scene.gltf")


  return (
    <>
      <div className='whole-page'>
      <h1>Portfolio page</h1>
      <div className='canvasdiv'>
        <Canvas style={{ width: '100vw', height: '100vh' }}>
          <Suspense fallback={null}>
            <Model gltf={linux} scale={[0.05, 0.05, 0.05]} position={[0, -2, -5]}/>
            <Model gltf={react} scale={[0.5, 0.5, 0.5]} position={[4, 0, -5]}/>
            <Model gltf={windowslogo} scale={[0.05, 0.05, 0.05]} position={[-5, 0, -8]}/>
            <OrbitControls enableZoom={false} />
            <Environment preset="sunset" background />
          </Suspense>
          <ambientLight intensity={Math.PI / 2} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
          <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        </Canvas>
      </div>
      </div>
      

      <div className='main-content'>
        <h1 className="lowerHeader">Skills</h1>
        <div className='skill-card-container'>
         <SkillCard
          name={"React"}
          logo={"/skill_logos/react.svg"}
        />
        <SkillCard
          name={"JavaScript"}
          logo={"/skill_logos/javascript.svg"}
        />
        <SkillCard
          name={"TypeScript"}
          logo={"/skill_logos/typescript.svg"}
        />
        <SkillCard
          name={"HTML5"}
          logo={"/skill_logos/html.svg"}
        />
        <SkillCard
          name={"CSS"}
          logo={"/skill_logos/css.svg"}
        />
        <SkillCard
          name={"MongoDB"}
          logo={"/skill_logos/mongodb.svg"}
        />
        <SkillCard
          name={"EsLint"}
          logo={"/skill_logos/eslint.svg"}
        />
        <SkillCard
          name={"Node.js"}
          logo={"/skill_logos/nodejs.svg"}
        />
        <SkillCard
          name={"npm"}
          logo={"/skill_logos/npm.svg"}
        /> 
        <SkillCard
          name={"Git"}
          logo={"/skill_logos/git.svg"}
        />
        <SkillCard
          name={"Webpack"}
          logo={"/skill_logos/webpack.svg"}
        /> 
        <SkillCard
          name={"Docker"}
          logo={"/skill_logos/docker.svg"}
        /> 
        <SkillCard
          name={"VSCode"}
          logo={"/skill_logos/vscode.svg"}
        /> 
        <SkillCard
          name={"Visual Studio Code"}
          logo={"/skill_logos/visualstudio.svg"}
        /> 
        <SkillCard
          name={"C"}
          logo={"/skill_logos/clanguage.svg"}
        /> 
        <SkillCard
          name={"C++"}
          logo={"/skill_logos/cplusplus.svg"}
        /> 
        <SkillCard
          name={"C#"}
          logo={"/skill_logos/csharp.svg"}
        /> 
        <SkillCard
          name={"Java"}
          logo={"/skill_logos/java.svg"}
        /> 
        <SkillCard
          name={"Python"}
          logo={"/skill_logos/python.svg"}
        /> 
        <SkillCard
          name={"PostgreSQL"}
          logo={"/skill_logos/postgres.svg"}
        /> 
        <SkillCard
          name={"SQLite"}
          logo={"/skill_logos/sqlite.svg"}
        /> 
        
        </div>
        





        <h1 className="lowerHeader">Projects</h1>
      <ProjectCard 
        header={'Fullstack Blog App'} 
        summary={'A fullstack blogsite application made with React, Node.js and MongoDB.'} 
        technologies={["MongoDB", "React", "Node.js", "Vitest"]} 
        imgURL={"/project_images/blog_api_gif.gif"}
        repository={"https://github.com/IT-miez/blog-api-project"}
        />

      <ProjectCard 
        header={'Weather App'} 
        summary={'A weather application that utilizes a third party API for weather data.'} 
        technologies={["JavaScript", "CSS", "HTML"]} 
        imgURL={"/project_images/weather-app-gif.gif"} 
        repository={"https://github.com/IT-miez/Weather-App-Project"}
        liveSite={"https://it-miez.github.io/Weather-App-Project/"}
        />
      
      <ProjectCard 
        header={'Fullstack App'} 
        summary={'My first fullstack app made with React, Node.js and MongoDB.'} 
        technologies={["MongoDB", "React", "Node.js", "MUI"]} 
        imgURL={"/project_images/fullstack_site.PNG"}
        repository={"https://github.com/IT-miez/courseproject_advanced_web_applications"}
        />

      <ProjectCard 
        header={'Chess Fan-site'} 
        summary={'A simple site made using Flexbox, CSS and HTML, while doing The Odin Project - a web curriculum.'} 
        technologies={["CSS", "HTML"]} 
        imgURL={"/project_images/chess_site.PNG"}
        liveSite={"https://it-miez.github.io/Landing-Page-Project-ChessFansite/"}
        repository={"https://github.com/IT-miez/Landing-Page-Project-ChessFansite"}
        />
      </div>
      <div className='pihole-container'>
        <h1 className="lowerHeader">Other hobbies</h1>
        <div className='pihole-header'>
          <img className='pihole-image' src={"/project_images/pihole.png"}></img>
          <h2>Pi-hole + Rasbperry Pi</h2>
        </div>
        
        <div className='pihole-div'>
            <Canvas style={{ width: '450px', height: '300px' , background: 'grey'}}>
              <Suspense fallback={null}>
                <ModelRotating gltf={raspberrypi} scale={[0.7, 0.7, 0.7]} position={[0, 0, 0]} rotation = {[Math.PI / 4, 0, 0]}/>  
                <OrbitControls enableZoom={true} />
              </Suspense>
              <ambientLight intensity={Math.PI / 2} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
              <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            </Canvas>
            <h3>What is Pi-hole?</h3>
            <p className='pihole-summary'>
              Pi-hole is an open-source DNS sinkhole tool that can help protect your devices from unwanted ads, block malicious sites and has minimal hardware requirements.
              <br></br><br></br>
              It can run on Raspberry Pi devices, starting from Raspberry Pi Zero W model and up.
            </p>
            <h3>A hobby device</h3>
            <p className='pihole-summary'>
              I came across Pi-hole and wanted to learn more about how networking works, how Raspberry Pi and Linux devices work and how SSH works through a command line interface.
              <br></br><br></br>
              Using Pi-hole has been a fun and interactive way to learn more about networking and hardware, as most of my skills have been related to coding and software engineering.
            </p>
          </div>
      </div>
      
      
      <Credits credits={'"Tux" (https://skfb.ly/U6Av) by Andy Cuccaro is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).'}/>
      
    </>
  )
}

export default App
