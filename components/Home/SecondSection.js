import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import TextPlugin from 'gsap/dist/TextPlugin';

function SecondSection() {

    useEffect(() => {

      let ctx = gsap.context(() => {
        // put all your GSAP/ScrollTrigger code inside here...
        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(TextPlugin);
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '#pinner3', // Replace with your section ID
            start: 'top center',
          },
        });
      
          tl.to("#image1", {duration: 0.5,x:0})
          .from("#image2", {duration: 0.5,x: 400})
        .to("#imagep", {duration: 2, text: "Diving into thrilling stories is my passion, and I love sharing that excitement on my blog. It's a space for fellow enthusiasts to explore gripping narratives and celebrate the joy of compelling tales. Join me in the adventure of pulse-quickening stories!"})
       
      });
      return () => ctx.revert(); // <-- CLEANUP!
    
        
      }, []);

    return ( 
        <section id="yourSectionId" className='bg-lightP bg-[url("/gh.png")] bg-[length:300px_300px] flex justify-center pb-12 p-4 lg:p-12 relative pt-[240px] lg:pt-[17rem]'>
          <div className='absolute top-0 w-full bg-[url("/gg3.png")] bg-no-repeat bg-repeat-x h-[200px] bg-cover top-[-2px]'></div>
        <section id="pinner3" className='relative bg-primary border-[black] border-4 relative w-full max-w-[1400px] overflow-hidden flex-col lg:flex-row flex justify-between'>
        <img src="/bbx.png" className='absolute top-0 max-w-[600px] w-[40%] m-[-100px]'/>
          <div id='image1' className='z-[1] drop-shadow-[20px_20px_0px_rgba(0,0,0,1)] w-fit max-w-[800px] p-6 lg:p-8 lg:pr-[9%] self-center bg-slate-100 h-fit relative translate-x-[-100%] lg:left-[10%] shadow-md'>
        <div className='relative'>
          
        <p className='text-center font-secondary text-2xl sm:text-4xl opacity-0'>Diving into thrilling stories is my passion, and I love sharing that excitement on my blog. It's a space for fellow enthusiasts to explore gripping narratives and celebrate the joy of compelling tales. Join me in the adventure of pulse-quickening stories!</p>
          <p id="imagep" className='absolute inset-0 text-center font-secondary text-2xl sm:text-4xl'></p>
          
          </div>
          </div>
          <div id='image2' className='w-[1300px] bg-[url("/mm2.png")] bg-cover aspect-[1] max-w-[100%] relative z-[8]'></div>
         <div className='absolute bg-contain h-full w-[60%] sm:w-[40%] max-w-[600px] right-0 bg-[url("/pan.jpg")] bg-fixed z-[0]'></div>
        </section>
        </section>
     );
}

export default SecondSection;