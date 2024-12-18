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
import Background from 'three/examples/jsm/renderers/common/Background.js'
import puheElin from '/scene.gltf'
import linuX from "/linux_tux/scene.gltf"
import reacT from "/react_logo/scene.gltf"
import windowsLogo from "/windows_logo/scene.gltf"
import raspberryPi from "/raspberrypi/scene.gltf"

import githubLogo from '/contact_logos/github.svg'
import linkedinLogo from '/contact_logos/linkedin.svg'
import emailLogo from '/contact_logos/email.svg'


// Logos for Technologies
import reactSVG from "/skill_logos/react.svg"
import javascriptSVG from "/skill_logos/javascript.svg"
import typescriptSVG from "/skill_logos/typescript.svg"
import html5SVG from "/skill_logos/html.svg"
import cssSVG from  "/skill_logos/css.svg"
import mongodbSVG from "/skill_logos/mongodb.svg"
import eslintSVG from "/skill_logos/eslint.svg"
import nodejsSVG from "/skill_logos/nodejs.svg"
import npmSVG from "/skill_logos/npm.svg"
import gitSVG from "/skill_logos/git.svg"
import webpackSVG from "/skill_logos/webpack.svg"
import dockerSVG from "/skill_logos/docker.svg"
import postgresSVG from "/skill_logos/postgres.svg"
import sqliteSVG from "/skill_logos/sqlite.svg"
import vscSVG from "/skill_logos/vscode.svg"
import visualstudioSVG from "/skill_logos/visualstudio.svg"
import cSVG from "/skill_logos/clanguage.svg"
import cppSVG from "/skill_logos/cplusplus.svg"
import csharpSVG from "/skill_logos/csharp.svg"
import javaSVG from "/skill_logos/java.svg"
import pythonSVG from "/skill_logos/python.svg"
import windowsSVG from "/skill_logos/windows.svg"
import linuxSVG from "/skill_logos/linux.svg"


// Project images and gifs
import blogapiGIF from "/project_images/blog_api_gif.gif"
import weatherappGIF from "/project_images/weather-app-gif.gif"
import fullstackPNG from "/project_images/fullstack_site.PNG"
import chesslandingpagePNG from "/project_images/chess_site.PNG"
import jobitoryPNG from "/project_images/jobitoryPNG.PNG"

import piholelogoPNG from "/project_images/pihole.png"

/*
Important test code
<Box position={[-1.2, 0, 0]} />
<Box position={[1.2, 0, 0]} />
*/

function App() {
  const [count, setCount] = useState(0)

  const puhelin = useLoader(GLTFLoader, puheElin)
  // <Model gltf={puhelin} position={[0, 6, -6]}/>
  const linux = useLoader(GLTFLoader, linuX) 
  const react = useLoader(GLTFLoader, reacT) 
  const windowslogo = useLoader(GLTFLoader, windowsLogo)
  const raspberrypi = useLoader(GLTFLoader, raspberryPi)


  return (
    <>
      <div className='whole-page'>
      
      <div className='canvasdiv'>
        <Canvas className='canvas' style={{ width: '100%', height: '99vh' }}>
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
        <div className="overlay">
          <div className='overlay-left'>
            <h1>Portfolio Page</h1>
            <p>Welcome to my ongoing portfolio site project!</p>
          </div>
          <div className='overlay-right'>
            <div className='top-section-logos'>
              <a href='https://github.com/IT-miez'>
                <img className='contact-logo invert-color' src={githubLogo}></img>
              </a>
              <a href='https://linkedin.com/in/IT-opiskelija'>
                <img className='contact-logo' src={linkedinLogo}></img></a>
              <a href='mailto:veikkosakari01@gmail.com'>
                <img className='contact-logo invert-color' src={emailLogo}></img>
              </a>
            </div>
          </div>
          

        </div>
        
      </div>
      </div>
      

      <div className='main-content'>
        <div className='aboutme'>
          <h1 className="lowerHeader">About me</h1>
          <p className='aboutme-summary'>
            I'm a second year Master's degree student in LUT University, studying Software Engineering and Digital Transformation.
            I have been able to work with many different kinds of people and different kinds of issues, which has been great for learning.
            <br></br><br></br>
            I'm interested in learning more about Software Development, whether it is front-, back- or fullstack development. 
            I also like learning more about configuration regarding infrastructure, DevOps and automating stuff that you can automate.
            <br></br><br></br>
            I have also studied coding languages, configuration skills, version controlling and other relevant topics on my free time.
            More about my coding projets can be found on my GitHub.
          </p>
        </div>
        
        <div className='skilldiv'>
          <h1 className="lowerHeader">Skills</h1>
        <div className='skill-card-container'>
          <SkillCard
            name={"React"}
            logo={reactSVG}
          />
          <SkillCard
            name={"JavaScript"}
            logo={javascriptSVG}
          />
          <SkillCard
            name={"TypeScript"}
            logo={typescriptSVG}
          />
          <SkillCard
            name={"HTML5"}
            logo={html5SVG}
          />
          <SkillCard
            name={"CSS"}
            logo={cssSVG}
          />
          <SkillCard
            name={"MongoDB"}
            logo={mongodbSVG}
          />
          <SkillCard
            name={"EsLint"}
            logo={eslintSVG}
          />
          <SkillCard
            name={"Node.js"}
            logo={nodejsSVG}
          />
          <SkillCard
            name={"npm"}
            logo={npmSVG}
          /> 
          <SkillCard
            name={"Git"}
            logo={gitSVG}
          />
          <SkillCard
            name={"Webpack"}
            logo={webpackSVG}
          /> 
          <SkillCard
            name={"Docker"}
            logo={dockerSVG}
          /> 
          <SkillCard
            name={"PostgreSQL"}
            logo={postgresSVG}
          /> 
          <SkillCard
            name={"SQLite"}
            logo={sqliteSVG}
          /> 
          <SkillCard
            name={"VSCode"}
            logo={vscSVG}
          /> 
          <SkillCard
            name={"Visual Studio Code"}
            logo={visualstudioSVG}
          /> 
          <SkillCard
            name={"C"}
            logo={cSVG}
          /> 
          <SkillCard
            name={"C++"}
            logo={cppSVG}
          /> 
          <SkillCard
            name={"C#"}
            logo={csharpSVG}
          /> 
          <SkillCard
            name={"Java"}
            logo={javaSVG}
          /> 
          <SkillCard
            name={"Python"}
            logo={pythonSVG}
          /> 
          <SkillCard
            name={"Windows"}
            logo={windowsSVG}
          /> 
          <SkillCard
            name={"Linux"}
            logo={linuxSVG}
          /> 
        
          </div>
        </div>
        
        



        <h1 className="lowerHeader">Projects</h1>
        <div className='projectdiv'>
          
          <ProjectCard 
            header={'Fullstack Blog App'} 
            summary={'A fullstack blogsite application made with React, Node.js and MongoDB. NOTE! Backend starts slow on live site - hosted on a free service.'} 
            technologies={["MongoDB", "React", "Node.js", "Vitest", "Express  "]} 
            imgURL={blogapiGIF}
            liveSite='https://blog-api-project-gamma.vercel.app//'
            repository={"https://github.com/IT-miez/blog-api-project"}
            />

          <ProjectCard 
            header={'Weather App'} 
            summary={'A weather application that utilizes a third party API for weather data.'} 
            technologies={["JavaScript", "CSS", "HTML"]} 
            imgURL={weatherappGIF} 
            repository={"https://github.com/IT-miez/Weather-App-Project"}
            liveSite={"https://it-miez.github.io/Weather-App-Project/"}
            />

          <ProjectCard 
            header={'Jobitory'} 
            summary={'A collaborative project where I work on the backend.'} 
            technologies={["GraphQL", "Apollo", "Prisma", "Express", "PostgreSQL"]} 
            imgURL={jobitoryPNG}
            repository={"https://github.com/IT-miez/jobitory"}
            />
          
          <ProjectCard 
            header={'Fullstack App'} 
            summary={'My first fullstack app made with React, Node.js and MongoDB.'} 
            technologies={["MongoDB", "React", "Node.js", "MUI", "Express"]} 
            imgURL={fullstackPNG}
            repository={"https://github.com/IT-miez/courseproject_advanced_web_applications"}
            />

          <ProjectCard 
            header={'Chess Fan-site'} 
            summary={'A simple site made using Flexbox, CSS and HTML, while doing The Odin Project - a web curriculum.'} 
            technologies={["CSS", "HTML"]} 
            imgURL={chesslandingpagePNG}
            liveSite={"https://it-miez.github.io/Landing-Page-Project-ChessFansite/"}
            repository={"https://github.com/IT-miez/Landing-Page-Project-ChessFansite"}
            />
        </div>
      </div>
        
      <div className='pihole-container'>
        <h1 className="lowerHeader">Other interests</h1>
        <div className='pihole-header'>
          <img className='pihole-image' src={piholelogoPNG}></img>
          <h2>Pi-hole + Raspberry Pi</h2>
        </div>
        
        <div className='pihole-div'>
            <Canvas style={{ background: 'grey'}} className='raspicanvas'>
              <Suspense fallback={null}>
                <ModelRotating gltf={raspberrypi} scale={[0.7, 0.7, 0.7]} position={[0, 0, 0]} rotation = {[Math.PI / 4, 0, 0]}/>  
                <OrbitControls enableZoom={true} />
              </Suspense>
              <ambientLight intensity={Math.PI / 2} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
              <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            </Canvas>
            <Credits credits={"A Raspberry Pi 3 device."}/>
            <div className='pihole-lefttext'>
              <h3>What is Pi-hole?</h3>
            </div>
            
            <p className='pihole-summary'>
              <a href="https://docs.pi-hole.net/">Pi-hole</a> is an open-source <a href="https://www.enisa.europa.eu/topics/incident-response/glossary/dns-sinkhole">DNS sinkhole</a> tool that can help protect your devices from unwanted ads, block malicious sites and has minimal hardware requirements.
              <br></br><br></br>
              It can run on <a href="https://www.raspberrypi.com/">Raspberry Pi</a> devices, starting from Raspberry Pi Zero W model and up, but can also be run on Linux based devices.
            </p>
            <div className='pihole-lefttext'>
              <h3>A hobby device</h3>
            </div>
            <p className='pihole-summary'>
              I came across Pi-hole and wanted to learn more about how networking works, how Raspberry Pi and Linux devices work and how SSH works through a command line interface.
              <br></br><br></br>
              Using Pi-hole has been a fun and interactive way to learn more about networking and hardware, as most of my free-time learning has been related to learning new coding languages and frameworks.
            </p>
          </div>
      </div>
      
      
      <Credits credits={'"Tux" (https://skfb.ly/U6Av) by Andy Cuccaro is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).'}/>
      
    </>
  )
}

export default App
