import Button from '../Button';

export default function MeetOurTeamSection() {
  return (
    <div id='team-section' className='general-padding py-12 md:py-20'>
      <div className='max-w-[40rem] md:mx-auto md:text-center'>
        <h3 className='section-heading'>Meet Our Team</h3>
        <p className='max-xxmd:text-sm'>
          Exceptional Talents, Exceptional Results
        </p>

        <p className='mt-6 max-xxmd:text-sm md:mt-10'>
          Get to know the faces behind our success. Our diverse team of software
          engineers, designers, and project managers is committed to delivering
          excellence.
        </p>
      </div>

      <div className='mt-12 md:flex grid grid-cols-1  w-full items-center gap-8 md:gap-2 laptop:gap-4 max-w-[70rem] mx-auto'>
        <div className='flex overflow-x-scroll xmd:grid xmd:grid-cols-3 gap-2 laptop:gap-4 flex-1 max-xmd:px-1'>
          {[...Array(3)].map((_, idx) => {
            return (
              <div
                key={idx}
                className='rounded-2xl w-full max-xmd:min-w-[13rem] bg-grey dark:bg-secondary/10 px-3 py-4 h-full xmd:h-fit'
              >
                <div className='h-[120px] xlaptop:h-[150px] w-[120px] xlaptop:w-[150px] mx-auto rounded-xl my-7 bg-gray-300 rotate-45'></div>

                <div className='mt-12'>
                  <div className='md:text-lg font-semibold'>
                    Nelda S. Carter
                  </div>
                  <div className='max-laptop:text-sm my-2 opacity-50'>
                    Expertise
                  </div>
                  <div className='max-laptop:text-sm'>
                    DevOps | JavaScript | Git | Node.js
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className='bg-black dark:bg-gray-400 rounded-2xl p-5 flex flex-col text-center items-center justify-center w-full mx-auto max-w-[30rem] md:max-w-[15rem] laptop:max-w-[20rem]'>
          <img src='/favicon.png' alt='Active Tech Logo' className='w-16' />

          <p className='text-sm mt-5 text-white max-laptop:text-sm dark:text-black'>
            View More Of Our Team Members And Select Based On Which Member Fits
            Your Project
          </p>

          <Button className='mt-4 font-bold'>View Members</Button>
        </div>
      </div>
    </div>
  );
}
