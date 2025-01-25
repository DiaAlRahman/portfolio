import React from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'
import TechStack from '../components/TechStack';

const About = () => {
  const [hasCopy, setHasCopy] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('diaalrahman312@gmail.com');
    setHasCopy(true);
    setTimeout(() => {
      setHasCopy(false);
    }, 2000);
  }
  return (
    <section className="c-space my-20" id='about'>
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/dia.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain bg-transparent'/>
            <div>
              <p className='grid-headtext'>Hi, I am Dia!</p>
              <p className="grid-subtext">"I feel like curiosity has driven me this far. Whenever I learn something new, I like to poke at it, challenge it, and make it my own. With Google, we entered an era where information was at our fingertips, and now, with AI, we're stepping into a whole new paradigm. We can focus on creating innovative solutions for humanity without being weighed down by the details. If that resonates with you, let’s collaborate!"</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <TechStack className='w-full sm:h-[276px] h-fit object-contain'/>
            {/* <img src="/assets/grid2.png" alt="grid-2" className='w-full sm:h-[276px] h-fit object-contain' /> */}
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">I started with C, learning the basics of coding. Then I got into Python, picking it up through hands-on projects. Later, web development caught my interest, and I dove into ReactJS, constantly challenging myself by building new projects to get better.</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor='rgba(0,0,0,0)'
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className="grid-headtext">I work remotely across most timezones.</p>
              <p className="grid-subtext">I am based in Adelaide, with remote work available.</p>
              <br />
              <p className="grid-subtext">Take the globe for a spin, click and drag!</p>
              <a href="#contact">
                <Button name='Get in touch' isBeam containerClass={'w-full mt-10'} />
              </a>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid3.png" alt="" className="w-full h-fit object-contain sm:h-[266px]" />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext"></p>
              <p className="grid-subtext">The step-by-step process of coding really fascinates me. The ability to visualize and bring ideas to life through code is something I find incredibly rewarding. With technology becoming more deeply woven into our daily lives, this field is quickly becoming just as essential as anything else. Software has already impacted millions of lives. In the next 20 years, I want to work on a project that will revolutionize the education system—something that produces free, independent, productive thinkers. Thinkers who can drive real, positive change.</p>
              <p className="grid-subtext">My passion now lies in web-based software, connectivity, and networking, with a strong interest in LLMs, AI, and computer vision. While coding is inherently enjoyable, it becomes truly fulfilling when I’m working on real-world problems. Education, in particular, is an area that urgently needs transformation, and I’m eager to play a role in reshaping it for the future.</p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] h-fit object-cover sm:h-[276px] sm:object-top" />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopy ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-grey_gradient text-white">diaalrahman312@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> 
  )
}

export default About