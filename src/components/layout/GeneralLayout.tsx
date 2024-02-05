import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import ScrollToTopButton from '../ScrollToTopButton';

export default function GeneralLayout() {
  return (
    <div className='w-full relative general-width  h-fit '>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
