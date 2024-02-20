import React from 'react';
import { motion } from 'framer-motion';

const SplitText = ({ text,...props }) => {

  const slashMotion = {
    rest: { opacity:0,y: -30, ease: "easeOut", duration: 0.2, type: "tween" },
    hover: {
      y: 0,
     opacity:1,
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeIn",
        staggerChildren: 0.1,
      }
    }
  };

  // Function to create spans for each character in a word
  const createSpansForWord = (word, index) => {
    return Array.from(word).map((char, charIndex) => (
      <motion.span className='inline-block' variants={slashMotion} key={`${index}-${charIndex}`}>{char}</motion.span>
    ));
  };

  // Function to create spans for each word
  const createSpansForText = () => {
    const words = text.split(' ');
    return words.map((word, index) => (
      <span className='inline-flex flex-nowrap' key={index}>
        {createSpansForWord(word, index)}
        {' '} {/* Add space between words */}
      </span>
    ));
  };

  return <motion.span style={{display:"flex",flexWrap:"wrap",gap:"0em 0.3em",width:"fit-content"}} initial="rest" whileInView="hover" viewport={{ once: true }} variants={slashMotion} {...props}>{createSpansForText()}
  
  </motion.span>;
};

export default SplitText;