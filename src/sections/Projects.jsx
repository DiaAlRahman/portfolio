import { Suspense, useState } from "react";
import { myProjects } from "../constants"
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import DemoComputer from "../components/DemoComputer";

const Projects = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const handleNavigation = (direction) => {
    setCurrIndex((prevIndex) => {
      if (direction === 'prev') {
        return prevIndex === 0 ? myProjects.length - 1 : prevIndex - 1;
      } else if (direction === 'next') {
        return prevIndex === myProjects.length - 1 ? 0 : prevIndex + 1;
      }
    })
  };
  return (
    <section className="c-space my-20" id="work">
      <p className="head-text">My Work</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 realtive sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img src={myProjects[currIndex].spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
          </div>
          {/* <div className="p-3 backdrop-filter backdrop-blur 3xl w-fit rounded-lg" style={myProjects[currIndex].logoStyle}>
            <img src={myProjects[currIndex].logo} alt="logo" className="w-10 h-10 shadow-sm" />
          </div> */}
          <div className="flex flex-col gap-5 text-white-600 my-5 sm:h-[600px]">
            <p className="text-white text-2xl font-semibold animatedText">{myProjects[currIndex].title}</p>
            <p className="animatedText">{myProjects[currIndex].desc}</p>
            <p className="animatedText">{myProjects[currIndex].subdesc}</p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            {/* <div className="flex items-center gap-3">
              {myProjects[currIndex].tags.map((tag, index) => (
                <div className="tech-logo" key={index}>
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))} 
            </div> */}
            <a className="flex items-center gap-2 cursor-pointer text-white-600" href={myProjects[currIndex].href} target="_black" rel="noreferrer">
              <p>Live Preview</p>
              <img src="/portfolio/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          </div>
          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={() => handleNavigation('prev')}>
              <img src="/portfolio/assets/left-arrow.png" alt="left-arrow" className="w-4 h-4" />
            </button>
            <button className="arrow-btn" onClick={() => handleNavigation('next')}>
              <img src="/portfolio/assets/right-arrow.png" alt="right-arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={5} position={[0, -1, 0]} rotation={[Math.PI/2, Math.PI, Math.PI-0.5]}>
                  <DemoComputer texture={myProjects[currIndex].texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  )
}

export default Projects;