import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import ATitle from '../../components/Articles/ATitle';

function ArticleCard({data:o}) {
    return ( 
        <Link className='hover:scale-[1.03]' href={"/posts/"+o.title.replace(/ /g, "-")}><AnimatePresence><motion.div
              initial={{ opacity: 0,y:-100 }}
              whileInView={{ y: 0,opacity:1 }}
              transition={{ ease: "easeOut", duration: 0.8 }}
              viewport={{once:true}}
              className='hover:scale-2 shadow-[7px_7px_0px_5px_black] h-full flex bg-white flex-col gap-2 p-3 border-2 border-black cursor-pointer'>
                <img src={"/"+o.title.replace(/:/g, "")+".jpg"} className='pb-3 aspect-[1.7] object-cover'/>
                <ATitle className="hover:underline font-[300] text-xl sm:text-2xl">{o.title}</ATitle>
                <div className='text-lg sm:text-xl h-fit max-h-[5.3rem] overflow-hidden mb-5' dangerouslySetInnerHTML={{__html: o.sections[0].content}}/>
                              </motion.div>
              </AnimatePresence>
              </Link>
     );
}

export default ArticleCard;