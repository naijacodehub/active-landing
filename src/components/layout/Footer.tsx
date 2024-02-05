import { Link } from 'react-router-dom';
import { navLinks } from '../../constants/navLinks';
import {
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='general-padding bg-dark dark:bg-secondary/10 text-white py-28'>
      <div className='flex space-x-8 max-w-[70rem] mx-auto'>
        <div className='flex-1'>
          <img
            src={'/Images/darkLogo.png'}
            alt='Active Tech Logo'
            className='w-56'
          />
        </div>

        <div className='grid flex-1'>
          <div className='text-lg'>
            4969 Millbrook <br /> RoadElmhurst, IL 60126
          </div>

          <div className='mt-20 grid gap-5 text-sm'>
            <div>+1 630-816-0205</div>
            <div>Support@activetech.com</div>
          </div>
        </div>

        <div className='grid flex-1'>
          <div className='grid grid-cols-2 gap-4 text-sm'>
            {navLinks.slice(0, -1).map((link, idx) => {
              return (
                <Link key={idx} to={'/'}>
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className='mt-20 grid gap-5 text-sm'>
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
