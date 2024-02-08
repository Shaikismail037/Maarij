import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import Logo from "../assets/logo.png"
import { useEffect } from "react";

const Footer = () => {

    useEffect(() => {
        const sr = ScrollReveal({
          origin: 'bottom',
          distance: '60px',
          duration: 3000,
          delay: 400,
        });
        sr.reveal('.footer_item1',{distance:'100px',interval:100});
        sr.reveal('.footer_item2',{distance:'100px',interval:100});
        sr.reveal('.footer_copy');
      }, []);
    return (
        <>
            <footer className="footer_item1 mt-[80px] xl:mt-[150px] relative z-20">
                <div className="container mx-auto px-0">

                    <div className="flex flex-col xl:flex-row xl:gap-[100px] xl:mb-[150px]">

                        <div className="footer_item2 w-full max-w-[400px] mx-auto mb-8 text-center xl:text-left">

                            {/* Logo */}
                            <a href="" className="flex justify-center xl:justify-start mb-8">
                                <img src={Logo} alt="logo"  width={50}/>
                            </a>
                            <p className="mb-8 text-xl">Lorem ipsum dolor sit amet consectetur</p>


                            {/* Socials */}
                            <ul className="text-primary flex gap-[54px] justify-center xl:justify-start ">
                                <li>
                                    <a href=""><FaFacebook /></a>
                                </li>
                                <li>
                                    <a href=""><FaInstagram /></a>

                                </li>
                                <li>
                                    <a href=""><RiTwitterXFill /></a>

                                </li>
                                <li>

                                    <a href=""><FaLinkedin /></a>
                                </li>
                            </ul>
                        </div>


                        <div className=" flex flex-1 flex-col xl:flex-row text-center xl:text-left gap-12 xl:gap-[100px] xl:justify-end ">

                            <div>
                                <h3 className="h3 mb-3">Pages</h3>
                                <ul className="flex flex-col gap-4">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Our Work</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>




                            <div>
                                <h3 className="h3 mb-3">Services</h3>
                                <ul className="flex flex-col gap-4">
                                    <li><a href="#">Kitchen</a></li>
                                    <li><a href="#">Living Room</a></li>
                                    <li><a href="#">Bedroom</a></li>
                                    <li><a href="#">Bedroom</a></li>
                                </ul>
                            </div>



                            <div>
                                <h3 className="h3 mb-3">Contact</h3>
                                <div className="flex flex-col gap-6 text-[20px]">
                                    <p>lorem 13 east Hyderbad</p>
                                    <p>contact@magicbuild.com</p>
                                    <p>(123) 456 - 7890</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/*CopyRight  */}

                <p className="footer_copy text-center text-lg py-10 bg-white xl:border-t">Copyright © MagicBuild 2024. All rights reserved.</p>
            </footer>
        </>
    )
}

export default Footer