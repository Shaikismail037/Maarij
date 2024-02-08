import { useEffect } from "react";


const Stats = () => {
    useEffect(() => {
        const sr = ScrollReveal({
          origin: 'bottom',
          distance: '60px',
          duration: 3000,
          delay: 400,
        });
        sr.reveal('.stats_item');
        sr.reveal('stats_item2',{distance:'100px',interval:100});
      }, []);
    return (
        <>
            <section className="stats_item mt-32 xl:mt-50 relative z-20  bg-accent-secondary py-[80px] xl:py-[150px]">

                <div className="mx-auto">

                    {/* Grid */}
                    <div className="stats_item2 grid grid-cols-1 xl:grid-cols-4 gap-12">
                        {/* Grid Items */}
                        <div className="text-center xl:border-r xl:border-accent">
                            <h3 className="h1 font-primary text-accent">12</h3>
                            <p>Years of Experience</p>
                        </div>



                        {/* Grid Items */}
                        <div className="text-center xl:border-r xl:border-accent">
                            <h3 className="h1 font-primary text-accent">85</h3>
                            <p>Project Completed</p>
                        </div>



                        {/* Grid Items */}
                        <div className="text-center xl:border-r xl:border-accent">
                            <h3 className="h1 font-primary text-accent">15</h3>
                            <p>Active Project</p>
                        </div>



                        {/* Grid Items */}
                        <div className="text-center xl:border-r xl:border-accent">
                            <h3 className="h1 font-primary text-accent">95</h3>
                            <p>Happy Customer</p>
                        </div>





                    </div>
                </div>





            </section>
        </>
    )
}

export default Stats