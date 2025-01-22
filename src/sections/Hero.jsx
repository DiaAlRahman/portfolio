import { useEffect, useState } from "react"
import { heroTags } from "../constants";

const Hero = () => {
  const HeroTags = ({ contents, interval = 3000 }) => {
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
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col items-center sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hi, I am Dia <span className="waving-hand">😉</span></p>
        <HeroTags contents={heroTags} interval={5000}/>
      </div>
    </section>
  )
}

export default Hero