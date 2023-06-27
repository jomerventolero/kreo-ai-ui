import Image from 'next/image'
import AnimatedHeading from './AnimatedHeading'

const Navbar = () => {
  return (
    <div className="z-10 w-full px-10 items-center justify-between font-mono text-2xl lg:flex">
        <div className="fixed bottom-0 left-0 flex flex-row h-48 w-full items-end justify-between bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div className="flex flex-row">
            <a href="/">
                <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/logo.png"
                alt="Kreo Image AI Logo"
                width={180}
                height={37}
                priority
                />
            </a>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 flex flex-row h-48 w-full gap-10 items-end justify-between bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a href="/about" className="font-sans font-medium hover:text-violet-500">
              <AnimatedHeading headingText={'ABOUT'}/>
            </a>
            <a href="/services" className="font-sans font-medium hover:text-violet-500">
              <AnimatedHeading headingText={'SERVICES'}/>
            </a>
          </div>
      </div>
  )
}

export default Navbar