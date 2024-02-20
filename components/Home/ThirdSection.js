
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import GenreTab from './GenreTab';
import { StyledSplitText } from '../StyledSplitText';

function ThirdSection({data,genres}) {

useEffect(() => {

 let ctx = gsap.context(() => {
   // put all your GSAP/ScrollTrigger code inside here...
   
   gsap.registerPlugin(ScrollTrigger);


   const animatedElements = document.querySelectorAll('.tabg-ani');

   animatedElements.forEach((element,i) => {
    const tl2 = gsap.timeline({
      onComplete: () => {
        tl2.kill();
        gsap.set(`.tabg-ani:nth-child(${i+1}) .panel`,{transition:"all 1s"}) // Kill the timeline once it's completed
      },
      scrollTrigger: {
        duration:2,
        trigger: element, // Replace with your section/class ID
        start: 'top center',
      },
    });
     tl2.from(`.tabg-ani:nth-child(${i+1}) .panel`, {
       opacity: 0,
       stagger:0.3
     },0)
     .from(`.tabg-ani:nth-child(${i+1}) span`, {
      scaleY:0,
      duration:1,
    },0)
     .from(`.tabg-ani:nth-child(${i+1}) .secg`,{
      opacity: 0,
      y: 300,
      duration:1.2
    },0)
   });
  
 });
 return () => ctx.revert(); // <-- CLEANUP!

   
 }, []);

    return ( 
        <section id="SD" className='relative overflow-hidden p-4 flex flex-col items-center gap-[5rem]'>
        <StyledSplitText textshadow="0.13em 0.13em 0px black" text={"Our Genres"} tagc="h2" className="text-lightP justify-center text-6xl sm:text-8xl font-primary text-center py-8 px-2"/>
        <div className='flex flex-col items-center gap-[4rem]'>{genres.map((o,i)=>
        <GenreTab key={i} genre={o} data={data[o.genre]}/>
        )}</div>
      </section>
     );
}

export default ThirdSection;