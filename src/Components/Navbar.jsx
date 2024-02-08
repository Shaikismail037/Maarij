import { RiMenuAddFill } from "react-icons/ri";
import { useState } from "react";
import Logo from "../assets/logo.png"

const Navbar = () => {

  const [MobileMenuOpen, setMobileMenuOpen] = useState(false);


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!MobileMenuOpen)
  }



  const menuItems = [
    { label: 'Home', link: '#' },
    { label: 'About', link: '#' },
    // { label: 'Testimonials', link: '#' },
    { label: 'Our Work', link: '#' },
    { label: 'News', link: '#' },
    { label: 'Contact', link: '#' },
  ];

  return (
    <>
      <div className="bg-gray-100 ">
        <header className=" sticky top-0 h-[90px] shadow-xl z-30 bg-white">
          <div className="container mx-auto flex justify-between h-full items-center ">

            {/* logo */}
            <a href="#"><img src={Logo} alt="logo" width={80} /></a>


            <nav>
              <ul className="fixed w-full h-0 p-0 bg-white overflow-hidden border-t top-[90px] left-0 right-0 flex flex-col gap-4 lg:relative lg:flex-row lg:p-0 lg:top-0 lg:border-none lg:h-full transition-all duration-300 ">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.link}>{item.label}</a>
                  </li>
                ))}

              </ul>
            </nav>



            {/* Mobile  */}
            <div className=" cursor-pointer lg:hidden" onClick={toggleMobileMenu}>
              <RiMenuAddFill className=" text-4xl text-primary" />
            </div>

            {/* Mobile Menu */}

            {MobileMenuOpen && (
              <ul className="w-full h-60 bg-white fixed flex flex-col items-center justify-center top-[90px] left-0 right-0 transition-all duration-300">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.link}>{item.label}</a>
                  </li>
                ))}

              </ul>
            )}


          </div>

        </header>
      </div>
    </>
  )
}

export default Navbar