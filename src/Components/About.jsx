import { useEffect } from "react";
import about_img from "../assets/about/img.png"
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";


const About = () => {
    useEffect(() => {
        const sr = ScrollReveal({
          origin: 'bottom',
          distance: '60px',
          duration: 3000,
          delay: 400,
        });
        sr.reveal('.about_text', { origin: 'left' });
        sr.reveal('.img_text', { origin: 'right',delay:800 });
      }, []);





    return (
        <>
            <section className='mt-32 xl:mt-50 relative z-20'>
                <div className=' mx-auto xl:px-0'>

                    {/*  */}
                    <div className='flex flex-col xl:flex-row xl:text-left justify-around text-center items-center gap-8 xl:gap-16 '>

                        <div className=' about_text flex-1 order-2 xl:order-none max-w-xl xl:max-w-[410px] flex flex-col items-center xl:items-start gap-8  '>

                            <h2 className='h2'>We Create The Art Of Stylish Living Stylishly</h2>

                            <p>It is a long established fact that a reader will be distracted by the of readable content of a pagewhen lookings at its layouts the points of using that it has a more-or-less normal.</p>

                            {/* phone */}
                            <div className=' flex items-center justify-center xl:justify-start gap-4 cursor-pointer'>
                                <div className=' bg-accent/15 w-[93px] h-[93px] rounded-full flex justify-center items-center'>
                                    <LuPhoneCall className='text-accent text-5xl ' />
                                </div>
                                <div className='text-left'>
                                    <div className='text-2xl font-bold'>+91 1234567890</div>
                                    <div>Call Us Anytime</div>
                                </div>
                            </div>


                            {/* btn */}
                            <div className=' flex flex-col items-center text-center xl:text-left lg:items-start'>
                                <button className='btn btn-primary'>Get free estimation <FaRegArrowAltCircleRight className='text-accent' /></button>
                            </div>



                        </div>
                        <div className='img_text order-1 xl:order-none max-w-[453px] mx-auto xl:max-w-none xl:mx-0 '>
                            <img src={about_img} alt="about_img" />
                        </div>
                    </div>





                </div>

            </section>
        </>
    )
}

export default About
