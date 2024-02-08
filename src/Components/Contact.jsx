import { useEffect } from "react";
const Contact = () => {


  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 3000,
      delay: 400,
    });
    sr.reveal('.contact_item1');
    sr.reveal('.contact_item2',{delay:800});
  }, []);
  return (
    <>
      <section className="contact_item1 mt-[60px] xl:mt-[150px] relative z-20 mb-20">

        <div className=" contact_item2 bg-primary sm:rounded-[70px] py-[80px]">

          <div className="max-w-[640px] mx-auto text-center ">
            <h2 className=" h2 text-white mb-4">Do you want to join MagicBuild?</h2>
            <p className="text-white mb-8 max-w-sm xl:max-w-none mx-auto ">Lorem ipsum dolor sit amet consectetur</p>
            <button className="btn btn-accent mx-auto text-primary ">Connect</button>
          </div>

        </div>
      </section>
    </>
  )
}

export default Contact