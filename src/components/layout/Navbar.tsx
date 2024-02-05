import { Link } from 'react-router-dom';
import { navLinks } from '../../constants/navLinks';
import Button from '../Button';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import { useTheme } from '../../context/theme-provider';

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const logoSrc =
    theme === 'dark' ? '/Images/darkLogo.png' : '/Images/lightLogo.png';

  return (
    <div className='sticky z-20 bg-white/90 dark:bg-dark/80 backdrop-blur-sm top-0 h-24 flex justify-between items-center general-padding'>
      <img src={logoSrc} alt='Active Tech Logo' className='w-40' />

      <div className='flex items-center space-x-8'>
        {navLinks.map((link, idx) => {
          return (
            <Link to={'/'} key={idx} className='whitespace-nowrap'>
              {link.label}
            </Link>
          );
        })}
      </div>

      <div className='flex space-x-4'>
        {theme === 'dark' && (
          <Button
            onClick={() => setTheme('light')}
            variant='outline'
            className='px-2'
          >
            <IoMoonOutline className='text-xl' />
          </Button>
        )}

        {theme === 'light' && (
          <Button
            onClick={() => setTheme('dark')}
            variant='outline'
            className='px-2'
          >
            <IoSunnyOutline className='text-xl' />
          </Button>
        )}

        <Button>Hire A Talent</Button>
      </div>
    </div>
  );
}
