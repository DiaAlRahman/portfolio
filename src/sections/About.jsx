import React from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'

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
            <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain' />
            <div>
              <p className='grid-headtext'>Hi, I am Dia!</p>
              <p className="grid-subtext">On the pursuit to become the greatest software engineer!</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid2.png" alt="grid-2" className='w-full sm:h-[276px] h-fit object-contain' />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">I specialise in everything, a jack of all trades!</p>
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
              <Button name='Contact Me' isBeam containerClass={'w-full mt-10'}/>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid3.png" alt="" className="w-full h-fit object-contain sm:h-[266px]" />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">I love solving problems using code. Coding isn't just my proffession - it's my passion.</p>
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