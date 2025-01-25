/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from "react";
import { calculatePositions, calculateScales, heroTags } from "../constants";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
// import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import PropTypes from 'prop-types'
import RubiksCube from "../components/RubiksCube";
import ReactLogo from "../components/ReactLogo";
import Coffee from "../components/Coffee";
import Chess from "../components/Chess";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";
import MouseLightSource from "../components/MouseLightSource";

const Hero = () => {
  const HeroTags = ({ contents, interval = 10000 }) => {
    const [i, setCurr] = useState(0)

    useEffect(() => {
      const id = () => {
        setCurr((prev) => (prev + 1) % contents.length)
      };
      // Set up the interval
      const intervalId = setInterval(id, interval);

      // Clean up the interval on component unmount
      return () => clearInterval(intervalId);
    }, [contents.length, interval])

    return (
        <div className="w-fit">
        <p className="hero_tag text-gray_gradient typing-text" key={contents[i]}>{ contents[i] }</p>
        </div>
    );
  };
  HeroTags.propTypes = {
    contents: PropTypes.arrayOf(PropTypes.string).isRequired,
    interval: PropTypes.number,
  };
  // const controls = useControls('HackerRoom', {
  //   positionX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   scale: {
  //     value: 1,
  //     min: 0.1,
  //     max: 2,
  //   },
  //   })
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const positions = calculatePositions(isSmall, isMobile, isTablet);
  const scales = calculateScales(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col items-center sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hi, I am Dia <span className="waving-hand">😉</span></p>
        <HeroTags contents={heroTags} />
        <div className="w-full h-full absolute inset-0">
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 20]} />
              <HeroCamera isMobile={isMobile}>
                <HackerRoom
                  // scale={0.07}
                  position={positions.deskPosition}
                  rotation={[0, -Math.PI - 0.5, 0]}
                  scale={scales.deskScale}
                />
              </HeroCamera>
              
              <RubiksCube scale={scales.rubiksCubeScale} position={positions.rubiksCubePosition} />
              <ReactLogo scale={scales.reactLogoScale} position={positions.reactLogoPosition} />
              <Coffee position={positions.ringPosition} />
              <Chess position={positions.chessPosition} scale={scales.chessScale} />
              <OrbitControls enableZoom={ false } />

              <MouseLightSource lightIntensity={10} />
              <ambientLight intensity={1} />
              <directionalLight intensity={1} position={[10, 10, 10]} />
            </Suspense>
          </Canvas>
        </div>
        <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
          <a href="#contact" className="w-fit">
            <Button name="Have a Project? Let's Chat!" isBeam containerClass='sm:w-fit w-full sm:min-w-96'/>

          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero;