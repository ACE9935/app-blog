
import HomeImg from "./HomeImg"
import { StyledSplitText } from '../StyledSplitText';

function HomeMain() {
    return ( 
         <section className='bg-primary flex justify-center pt-12'>
      <div className='flex px-8 w-[100%] justify-center md:justify-between max-w-[1400px]'>
      <div className='pt-12 pb-[100px]  lg:pb-0 lg:pt-0 md:max-w-[620px] flex flex-col justify-center'>
        <h1 className='text-4xl text-white  pb-[30px] sm:text-6xl font-primary leading-[50px] sm:leading-[70px]'><StyledSplitText text={"Explore"} className="text-lightP hero-sg"/> a world of insights and inspiration on our blog</h1>
        <div className='flex items-center gap-2'>
       <button className='transition ease-in duration-300 font-[300] p-4 border-4 text-md sm:text-lg text-lightP font-primary hover:drop-shadow-[-6px_6px_0px_rgba(0,0,0,1)]'>Start Reading</button>
        </div>
     {/*
     <motion.div
      initial={{ x: -100, rotate: -80 }}
      animate={{ x: 0, rotate: 0 }}
      transition={{
        type: 'spring',
        damping: 10,
        stiffness: 100,
        bounce: 0.1,
        duration: 2,
      }}
     ><img src='/x56.png' width={360}/></motion.div>
     */}
     </div>
  <HomeImg/>
     </div>
     </section>
     );
}

export default HomeMain;