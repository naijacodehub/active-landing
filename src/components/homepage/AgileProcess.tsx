import { agileProcesses, whyChooseAgile } from '../../constants/homepage';

export default function AgileProcessSection() {
  return (
    <div id='agile-process-section' className='general-padding py-12 md:py-20'>
      <div className='max-w-[50rem]'>
        <h3 className='section-heading'>Agile Software Development Process</h3>

        <p className='mt-6 max-xxmd:text-sm'>
          We embrace the Agile software development methodology to deliver
          high-quality solutions that meet our clients' evolving needs. Our
          commitment to Agile principles allows us to create innovative software
          with flexibility, collaboration, and a customer-centric focus.
        </p>
      </div>

      <div className='mt-20 grid grid-cols-1 xmd:grid-cols-2 gap-x-5 smLaptop:gap-x-10'>
        {agileProcesses.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`ml-5 relative ${idx === 5 && '!border-none'} ${
                idx === 4 && '!border-l  xmd:!border-none'
              } border-l dark:border-pale-sky/50 border-dashed pl-8 smLaptop:pl-12 md:pr-4 desktop:px-16 pb-8 xmd:pb-14 md:pb-20 xlaptop:pb-28`}
            >
              <img
                src='/Images/normalOverlay.png'
                alt='Active Tech Vector'
                className='w-10 smLaptop:w-12 absolute top-0 left-0 -translate-x-1/2 -rotate-45'
              />
              <div className='card-heading'>{item.title}</div>
              <div className='mt-2 xmd:mt-4 grid gap-2'>
                {item.desc.map((text, index) => {
                  return (
                    <div key={index} className='max-smLaptop:text-sm'>
                      {text}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className='mt-10 mobile:mt-16'>
        <h3 className='section-heading'>Why Choose Agile with Active Tech</h3>
        <div className='my-5 grid grid-cols-1 mobile:grid-cols-2 smLaptop:grid-cols-3 gap-4 relative overflow-hidden'>
          <div className='absolute rounded-md z-10 inset-0 bg-gradient-to-r from-transparent via-white/80 dark:via-black/60 to-transparent bg-no-repeat animate-slide'></div>
          {[...Array(3)].map((_, idx) => {
            return (
              <div
                key={idx}
                className={` 
                ${idx === 0 && 'bg-primary max-smLaptop:hidden'} 
                ${idx === 1 && 'bg-gradient-to-r from-primary to-secondary'} 
                ${idx === 2 && 'bg-secondary max-mobile:hidden'}
                   h-2 rounded-md relative overflow-hidden `}
              ></div>
            );
          })}
        </div>

        <div className='mt-6 mobile:mt-10 grid grid-cols-1 mobile:grid-cols-2 smLaptop:grid-cols-3 gap-4 gap-y-6 xxmd:gap-y-10'>
          {whyChooseAgile.map((item, idx) => {
            return (
              <div
                key={idx}
                className='p-[1.5px] bg-gradient-to-r from-primary to-secondary rounded-2xl'
              >
                <div className='bg-white dark:bg-dark rounded-2xl h-full p-5'>
                  <div className='card-heading'>{item.title}</div>

                  <div className='mt-2 xxmd:mt-4 max-xxmd:text-sm'>
                    {item.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
