import { Link } from 'react-router-dom';
import { navLinks } from '../../constants/navLinks';
import {
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import { scrollToSectionWithOffset } from '../../helpers/scrollHelper';

export default function Footer() {
  return (
    <div className='general-padding bg-dark dark:bg-secondary/10 text-white py-20 md:py-28'>
      <div className='flex max-xxmd:flex-col max-xxmd:space-y-10 md:space-x-8 max-w-[70rem] mx-auto'>
        <div className='flex-1'>
          <img
            src={'/Images/darkLogo.png'}
            alt='Active Tech Logo'
            className='w-40 md:w-56'
          />
        </div>

        <div className='grid flex-1'>
          <div className='md:text-lg'>
            No. 90A, Nelson Mandela Street. <br /> Asokoro, Abuja
          </div>

          <div className='mt-14 md:mt-20 grid gap-5 text-[15px]'>
            <div>+2348143795632</div>
            <div>ayuba@activetechnologies.org</div>
          </div>
        </div>

        <div className='grid flex-1'>
          <div className='grid grid-cols-2 gap-y-4 xxmd:gap-4 text-sm max-xxmd:max-w-[20rem]'>
            {navLinks.slice(0, -1).map((link, idx) => {
              return (
                <div
                  key={idx}
                  className='cursor-pointer'
                  onClick={() => scrollToSectionWithOffset(link.selector)}
                >
                  {link.label}
                </div>
              );
            })}
          </div>

          <div className='mt-14 md:mt-20 grid gap-5 text-sm'>
            <div className='flex space-x-4 text-xl'>
              <Link to={'/'}>
                <FaFacebookF />
              </Link>
              <Link to={'/'}>
                <FaTwitter />
              </Link>
              <Link to={'/'}>
                <FaLinkedin />
              </Link>
              <Link to={'/'}>
                <FaInstagramSquare />
              </Link>
            </div>
            <div>
              © {new Date().getFullYear()} Active Tech. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
