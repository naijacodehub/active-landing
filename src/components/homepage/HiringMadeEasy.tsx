import { hiringMadeEasy } from '../../constants/homepage';

export default function HiringMadeEasySection() {
  return (
    <div className='general-padding py-12 md:py-20'>
      <div className='max-w-[35rem]'>
        <h3 className='section-heading'>Hiring Made Easy</h3>
        <p className='max-xxmd:text-sm'>
          Quick And Easy, Explore Our Hiring Process
        </p>
      </div>

      <div className='mt-20 smLaptop:mt-28 gap-y-10 lgMobile:gap-y-16 md:gap-0 grid grid-cols-1 lgMobile:grid-cols-2 md:grid-cols-4'>
        {hiringMadeEasy.map((item, idx) => {
          return (
            <div className='p-2 max-lgMobile:max-w-[20rem] max-lgMobile:mx-auto laptop:p-5 lgMobile:border-t dark:border-pale-sky/50 border-dashed relative text-center'>
              <img
                src='/Images/normalOverlay.png'
                alt='Active Tech Vector'
                className='w-8 smLaptop:w-10 absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2'
              />

              <div className='mt-5 card-heading max-smLaptop:text-lg'>
                {item.title}
              </div>
              <div className='mt-3 max-laptop:text-sm'>{item.desc}</div>
              {idx !== 3 && (
                <div className='h-14 border-l lgMobile:hidden block mx-auto dark:border-pale-sky/50 border-dashed w-fit mt-3 '></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
