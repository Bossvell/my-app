import React from 'react';
import {motion} from 'framer-motion';

const Footer = () => {
  return (
    <div>
      <motion.div className='bg-1'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType:'loop',
          delay: 3
        }}
      >
        Описание
        </motion.div>
      <motion.img src='/img/1.jpg' alt='image'
      width={'100px'} 
      animate={{rotate:360}}
      transition={{
        delay:1,
        duration: 3,
        repeat: Infinity,
        repeatType:'reverce',
        type:'tween'
      }}/>
      
      <motion.p
      initial={{
        x:-1000,
        opacity:0
      }}
      animate={{
          x:500,
          opacity:1,
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType:'reverce',
        delay: 3
      }}
      >Текст для анимации</motion.p>
    </div>
  )
}

export default Footer