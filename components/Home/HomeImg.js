import { motion } from 'framer-motion';

function HomeImg() {
    return ( 
        <div className='hidden lg:block overflow-hidden'><motion.img
        initial={{ translateY: '100%' }} // Initial position at the bottom
        animate={{ translateY: '0' }} // Move to initial position
        transition={{ duration: 1.4, ease: 'easeInOut' }} // Animation duration and easing
         src='/X771.png' width={460}/>
           <style jsx>{`
       div{
        background: repeating-linear-gradient(
          to bottom,
          #14532d,
          #14532d 20px,
          #FFF 20px,
          #FFF 40px
        );
        
       }
      `}</style>
         </div>
     );
}

export default HomeImg;