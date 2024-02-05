import React, { useState } from "react";
import img2 from "../../assets/img.png"
import img3 from "../../assets/Asset 1.png"
import { motion, AnimatePresence } from 'framer-motion';
import "../App.css"
const Window = () => {
   const [isTranslated, setIsTranslated] = useState(false);
  const [home, setHome] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
const [text, setText] = useState(true);
const [activeButton, setActiveButton] = useState('button1');
  const handlehomeclick = () => {
      
    if (home === true) {
      setIsTranslated(false)
      setIsVisible(false)
      setText(flase)
    }
    
    setHome(!home)

  }
  const handleClick = () => {
    
    setIsTranslated(!isTranslated);
    setIsVisible(!isVisible);
    if (isTranslated === true) {
     
      setHome(false)
    }

  };
 
  const handleButtonClick = (button) => {
    setActiveButton(button);
    switch (button) {
      case 'button1':
        
        handlehomeclick ();
        break;
        default:
          
        case 'button2':
       
        handleClick();
        break;
      
      
    }
  };

  const buttonVariants = {
    active: { textDecoration: 'underline' },
    inactive: { textDecoration: 'none' },
  };
  
  return (
    <div>  <div className=" h-screen w-full  flex  flex-wrap  pl-20 pr-6 py-12 max-md:px-5 ">

<AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ duration: 1.5 }}
            style={{ position: 'fixed', left: '50vw' }}
            className="hidden-div"
          >
            
           
          </motion.div>
        )}
      </AnimatePresence>
    <div className="flex w-full gap-0 mt-0 max-md:flex-wrap">
    
   <motion.div
      initial={{ opacity: 0, y: -70 }}
      animate={{ opacity: !isVisible ? 1 : 0, y: isVisible ? 0 : -70 }}
      transition={{ duration: 1 }}
    
    className='z-10 flex flex-col items-stretch text-6xl text-white  font-bold mt-72 flex-1 self-end  max-md:text-4xl max-md:mt-10 ' >
        <h1 className="max-md:text-4xl">NEVER GIVE UP</h1>
        <h2 className="mt-3.5 max-md:max-w-full max-md:text-4xl">KEEP RUNNING</h2>
        <a href="/" className="text-yellow-400 text-2xl mt-4 max-md:max-w-full">
          ENJOY RUNNING ENJOY FREEDOM
        </a>
        <div className="flex w-[54px] shrink-0 h-[54px] flex-col mr-24 mt-56 rounded-full self-end max-md:mr-2.5 max-md:mt-10" />
      </motion.div>

      <div
       style={{
        position: 'relative',
        transition: ' 2.5s ease',
      }} className={`flex flex-col my-10 z-99 rounded-full    flex-1  ${isTranslated ? 'translatedImg' : ''}`}>

        <div className=" flex flex-col justify-center max-md:pl-5">

          <div className="flex flex-wrap justify-center w-[508px] h-[508px] rounded-full items-stretch   max-md:flex-wrap " id="main_img">

            <div className="flex justify-center mt-[80px] rounded-full w-[508px] h-[508px] z-[999] Img-back">
              <img
                loading="lazy"

                src={img2}
                className="aspect-square object-contain rounded-full  object-centerw-[508px] h-[508px] "
                alt="Running Image"
              />

            </div>
            <div class="box-4 absolute flex justify-self-center">
              <div class="loader-4 w-[702px] h-[702px] ">
                <div class="dbl-spin-1 w-[588px] h-[588px]"></div>
                <div class="dbl-spin-2 w-[792px] h-[792px] "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items-stretch flex basis-0 flex-col my-auto pb-2.5 z-[999]">
       <motion.button
       variants={buttonVariants}
       initial={activeButton === 'button1' ? 'active' : 'inactive'}
       animate={activeButton === 'button1' ? 'active' : 'inactive'}
       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 0.9 }}
       onClick={() => handleButtonClick('button1')}
          className={`text-white text-2xl font-medium justify-center hover:text-fuchsia-400 hover:scale-110 ${ home ? 'underline' : ''} `}
        >
          Home
        </motion.button>
        <motion.button
      variants={buttonVariants}
      initial={activeButton === 'button2' ? 'active' : 'inactive'}
      animate={activeButton === 'button2' ? 'active' : 'inactive'}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => handleButtonClick('button2')}
          className="text-white  text-2xl font-medium mt-10 max-md:mt-10 hover:text-fuchsia-400 hover:scale-105">Work</motion.button>
          
      </div>


    </div>

     </div>
  <div className="flex w-screen h-auto ">
        <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: !isVisible ? 1 : 0, opacity: !isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }} className="absolute top-[13.82rem] left-[36vw] rounded-[50%] [background:linear-gradient(180deg,_#fdc898,_rgba(181,_23,_255,_0.11))] w-[3.38rem] h-[3.38rem] [transform:_rotate(45deg)] [transform-origin:0_0]" />
         <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: !isVisible ? 1 : 0, opacity: !isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }} className="absolute top-[1.82rem] left-[22vw] rounded-[50%] [background:linear-gradient(180deg,_#fdc898,_rgba(181,_23,_255,_0.11))] w-[3.38rem] h-[3.38rem] [transform:_rotate(45deg)] [transform-origin:0_0]" />
     <motion.div 
     initial={{ scale: 0, opacity: 0 }}
     animate={{ scale: !isVisible ? 1 : 0, opacity: !isVisible ? 1 : 0 }}
     transition={{ duration: 0.5 }} className="absolute top-[7.14rem] left-[1vw] rounded-[50%] [background:linear-gradient(180deg,_#fdc898,_rgba(181,_23,_255,_0.11))] w-[3.38rem] h-[3.38rem] [transform:_rotate(45deg)] [transform-origin:0_0]" />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: !isVisible ? 1 : 0, opacity: !isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }} className="absolute top-[52.82rem] left-[44vw] rounded-[50%] [background:linear-gradient(180deg,_#fdc898,_rgba(181,_23,_255,_0.11))] w-[3.38rem] h-[3.38rem] [transform:_rotate(45deg)] [transform-origin:0_0]" />
  <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: !isVisible ? 1 : 0, opacity: !isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }} className="absolute top-[46.7rem] left-[12vw] rounded-[50%] [background:linear-gradient(180deg,_#fdc898,_rgba(181,_23,_255,_0.11))] w-[3.38rem] h-[3.38rem] [transform:_rotate(45deg)] [transform-origin:0_0]" />
    <div className="absolute top-[26.82rem] left-[93vw] rounded-[50%] [background:linear-gradient(180deg,_#fdc898,_rgba(181,_23,_255,_0.11))] w-[3.38rem] h-[3.38rem] [transform:_rotate(45deg)] [transform-origin:0_0]" />
    <div className="absolute top-[1.82rem] left-[70vw] rounded-[50%] [background:linear-gradient(180deg,_#fdc898,_rgba(181,_23,_255,_0.11))] w-[2.38rem] h-[2.38rem] [transform:_rotate(45deg)] [transform-origin:0_0]" />
    <div className="absolute top-[2.82rem] left-[88vw] rounded-[50%] [background:linear-gradient(180deg,_#fdc898,_rgba(181,_23,_255,_0.11))] w-[3.98rem] h-[3.98rem] [transform:_rotate(45deg)] [transform-origin:0_0]" />          
    <div className="absolute top-[47.82rem] left-[98vw] rounded-[50%] [background:linear-gradient(180deg,_#fdc898,_rgba(181,_23,_255,_0.11))] w-[2.78rem] h-[2.78rem] [transform:_rotate(45deg)] [transform-origin:0_0]" />



   


   

<div className="grid m-auto  max-w-[1240px] py-8 px-3 w-auto grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-0 text-white">
    <div className="flex justify-center min-w-[360px]  max-h-[350px] flex-wrap m-auto  pb-20">
      <h2 className="text-3xl text-bold">VISHNU KAMALIYA <br/> <span className="text-yellow-500 mt-2" >ULTRA MARATHONER</span></h2>
      <p className="mt-5 m-auto px-10 md:px-28 leading-6">
       VISHNU KAMALIYA IS ULTRA-MARATHONER.  PROVIDES A 
MARVELLOUS LENS TO THE SPORT.  PARTICIPATED IN MORE 
THAN 18 PLUS MARATHON EVENTS. ALSO ORGANISED MANAGED 
AND  DIRECTED MORE THAN 25 PLUS GOVERNMENT AND PRIVATE 
      </p>
    </div>
    <div className="sm:justify-center m-auto flex-nowwrap">
      <img
        src={img3}
        className="h-auto  w-full flex justify-self-center  min-w-[470px] m rounded-3xl p-2"
        alt="Image2"
      />
    </div>
    </div>
    <div className="grid ">
      <div></div>
      <div></div>
      <div></div>
    </div>
    </div>
</div>
  )
}

export default Window