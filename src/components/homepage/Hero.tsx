import Button from '../Button';

export default function HeroSection() {
  return (
    <div className=''>
      <div className='flex mt-12 general-padding'>
        <div className='w-[55%] mt-10'>
          <h1 className='text-7xl leading-snug font-bold'>
            Tech <span className='text-primary'>Innovation</span> Knows No
            Boundaries
          </h1>
          <p className='my-6 font-medium'>
            Active tech is your gateway to highly skilled software engineers in
            Nigeria. We specialize in providing top-tier talent for a variety of
            services, including development, design, product management, project
            management, and more.
          </p>

          <div className='mt-6 flex space-x-5'>
            <Button className='h-12 px-7 text-base'>Hire A Talent Now</Button>
            <Button variant='link' className='text-base'>
              Outsource Project
            </Button>
          </div>
        </div>
        <div className='flex-1'>
          <img src='/Images/desktopHero.png' alt='Active Tech' />
        </div>
      </div>
      <div className='py-4 bg-pale-sky general-padding flex items-center'>
        <div className='italic max-w-[18rem] font-semibold'>
          We're proud to be trusted by reputable businesses.
        </div>

        <div className='flex justify-between items-center max-w-[50rem] mx-auto w-full'>
          {[...Array(3)].map((_, idx) => {
            return (
              <img
                key={idx}
                src='/Images/company.png'
                alt='Active Tech Customers/Business'
                className='w-36'
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
