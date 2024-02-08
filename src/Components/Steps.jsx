import { useEffect } from "react";
import { FaDraftingCompass, FaLongArrowAltRight } from "react-icons/fa";
import ScrollReveal from 'scrollreveal';


const Steps = () => {

    useEffect(() => {
        const Scp = ScrollReveal({
          origin: 'bottom',
          distance: '100px',
          duration: 1000,
          delay: 1000,
        });
        Scp.reveal('.steps_text', { distance:'100px',interval:1000});
      }, []);
    return (
        <>
            <section className='steps  mt-36 xl:mt-10 relative z-20 '>
                <div className='container mx-auto h-33'>
                    {/* grid items */}
                    <div className='steps_text grid grid-cols-1 gap-12 xl:grid-cols-3'>

                        {/* 1-1 grid  */}
                        <div className=' mb-4 card_hover cursor-pointer'>
                            <div className='flex justify-center text-5xl text-accent'>
                                <FaDraftingCompass />
                            </div>
                            <div className='text-center' >
                                <h3 className="h3 mb-5">Project Planning</h3>
                                <p className='mb-3 max-w-md mx-auto first-letter:mb-5 gap-2'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, debitis.</p>
                                <a href="#" className=' flex  justify-center items-center font-medium '>Read more <FaLongArrowAltRight /></a>
                            </div>
                        </div>

                        {/* 1-2 grid  */}
                        <div className='mb-4 card_hover cursor-pointer'>
                            <div className='flex justify-center text-5xl text-accent'>
                                <FaDraftingCompass />
                            </div>
                            <div className='text-center' >
                                <h3 className="h3 mb-5">Project Planning</h3>
                                <p className='mb-3 max-w-md mx-auto first-letter:mb-5 gap-2'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, debitis.</p>
                                <a href="#" className=' flex  justify-center items-center font-medium '>Read more <FaLongArrowAltRight /></a>
                            </div>
                        </div>

                        {/*1-3 grid  */}
                        <div className='mb-4 card_hover cursor-pointer'>
                            <div className='flex justify-center text-5xl text-accent'>
                                <FaDraftingCompass />
                            </div>
                            <div className='text-center' >
                                <h3 className="h3 mb-5">Project Planning</h3>
                                <p className='mb-3 max-w-md mx-auto first-letter:mb-5 gap-2'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, debitis.</p>
                                <a href="#" className=' flex  justify-center items-center font-medium '>Read more <FaLongArrowAltRight /></a>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}

export default Steps