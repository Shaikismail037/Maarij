import { useEffect } from "react";
import { image1,image2,image3,image4 } from "../assets/work/index"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const Work = () => {

    useEffect(()=>{
        const sr = ScrollReveal({
            origin:'bottom',
            distance:'60px',
            duration:3000,
            delay:400,
            })

            sr.reveal('.work_text'),
            sr.reveal('.work_text2',{delay:800})
    })


    return (
        <>
            <section className='mt-[80px] xl:mt-[150px] relative z-20'>
                <div className="mx-auto xl:px-0">
                    {/* Heading */}
                            <div className=" text-center mb-24">
                                <h2 className="work_text h2 text-center mb-6 semibold">Your Work</h2>
                                <p className="work_text2 max-w-3xl mx-auto">It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.</p>
                            </div>



                    {/* grid */}
                    <div className="grid grid-cols-1 xl:grid-cols-2  ">

                        {/* Items */}
                        <div className=' w-full max-w-[548px] h-full mx-auto'>
                            <img src={image1} alt="" className="mb-8" />
                            <div className=" flex justify-between items-center w-full">
                                <div>
                                    <h3>Modern Kitchen</h3>
                                    <p>Decor/Architecher</p>
                                </div>
                                <button className=" bg-accent-secondary hover:bg-accent/20 w-[70px] h-[70px] rounded-full ">
                                    <MdOutlineKeyboardArrowRight className="text-primary  text-3xl inline-block " />
                                </button>
                            </div>
                        </div>



                        <div className=' w-full max-w-[548px] h-full mx-auto'>
                            <img src={image2} alt="" className="mb-8" />
                            <div className=" flex justify-between items-center w-full">
                                <div>
                                    <h3>Modern Kitchen</h3>
                                    <p>Decor/Architecher</p>
                                </div>
                                <button className=" bg-accent-secondary hover:bg-accent/20 w-[70px] h-[70px] rounded-full ">
                                    <MdOutlineKeyboardArrowRight className="text-primary  text-3xl inline-block " />
                                </button>
                            </div>
                        </div>




                        <div className=' w-full max-w-[548px] h-full mx-auto'>
                            <img src={image3} alt="" className="mb-8" />
                            <div className=" flex justify-between items-center w-full">
                                <div>
                                    <h3>Modern Kitchen</h3>
                                    <p>Decor/Architecher</p>
                                </div>
                                <button className=" bg-accent-secondary hover:bg-accent/20 w-[70px] h-[70px] rounded-full ">
                                    <MdOutlineKeyboardArrowRight className="text-primary  text-3xl inline-block " />
                                </button>
                            </div>
                        </div>


                        <div className=' w-full max-w-[548px] h-full mx-auto'>
                            <img src={image4} alt="" className="mb-8" />
                            <div className=" flex justify-between items-center w-full">
                                <div>
                                    <h3>Modern Kitchen</h3>
                                    <p>Decor/Architecher</p>
                                </div>
                                <button className=" bg-accent-secondary hover:bg-accent/20 w-[70px] h-[70px] rounded-full ">
                                    <MdOutlineKeyboardArrowRight className="text-primary  text-3xl inline-block " />
                                </button>
                            </div>
                        </div>




























                    </div>
                </div>
            </section>




        </>
    )
}

export default Work