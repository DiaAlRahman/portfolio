const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <div className="flex gap-3">
          <div className="social-icon">
            <a href="https://github.com/DiaAlRahman" target="_blank" rel="noreferrer" className="flex justify-center">
              <img src="/portfolio/assets/github.svg" alt="github" className="w-6 h-6 cursor-pointer" />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/dia-al-rahman-898994248/" target="_blank" rel="noreferrer" className="flex justify-center">
              <img src="/portfolio/assets/linkedin.png" alt="linkedin" className="w-6 h-6 cursor-pointer" />
            </a>
          </div>
          {/* <div className="social-icon">
            <a href="https://x.com/namless_child" target="_blank" rel="noreferrer" className="flex justify-center">
              <img src="/portfolio/assets/twitter.svg" alt="twitter" className="w-6 h-6 cursor-pointer" />
            </a>
          </div> */}
          {/* <div className="social-icon">
            <a href="https://www.instagram.com/nameless._.child" target="_blank" rel="noreferrer" className="flex justify-center">
              <img src="portfolio/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2 cursor-pointer" />
            </a>
          </div> */}
        </div>
      </div>
      <p className="text-white-500">© 2025 Dia. All rights reserved.</p>
    </section>
  )
}

export default Footer