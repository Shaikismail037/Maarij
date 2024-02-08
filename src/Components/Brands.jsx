import {image1,image2,image3,image4,image5} from "../assets/brands"
import { useEffect } from "react";
const Brands = () => {


  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 3000,
      delay: 400,
    });
    sr.reveal('.brand_img', { delay:600,distance:'100px', interval:100 });
  }, []);


  return (
    <>
        <section className="mt-[80px] xl:mt-[150px] relative z-20 mb-20">
            <div className=" mx-auto">
                <div className="brand_img flex flex-col xl:flex-row justify-around items-center gap-12 ">
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                    <img src={image4} alt="" />
                    <img src={image5} alt="" />
                </div>
            </div>
        </section>
    </>
  )
}

export default Brands