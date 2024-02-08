import { useEffect } from 'react';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import ScrollReveal from 'scrollreveal';

const Hero = () => {

  // Animation
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 3000,
      delay: 400,
    });
    sr.reveal('.hero_text', { origin: 'top' });
  }, []);

  return (
    <>
      <section className="bg-gray-100">
        <div className=" max-w-[1920px] mx-auto bg-white overflow-hidden relative mb-7">


          <div className='hero bg-hero-img h-[640px] xl:h-[840px]  bg-center lg:bg-cover bg-no-repeat bg-fixed xl:rounded-bl-[290px] relative z-20'>


            <div className='mx-auto h-full flex items-center justify-center xl:justify-start'>

              {/* Text */}
              <div className='hero_text w-[567px] flex flex-col items-center text-center xl:text-left lg:items-start p-20'>

                <h1 className='h1 mb-8'>Let Your Home Be Unique Let Your Home Be Unique</h1>
                <p className='mb-8'>There are many variations of the passages of lorem Ipsum from available,variations of the passages.</p>
                <button className=' btn btn-primary'>Get free estimation <FaRegArrowAltCircleRight className='text-accent' /></button>
              </div>
            </div>
          </div>

        </div>
      </section>

    </>
  )
}

export default Hero