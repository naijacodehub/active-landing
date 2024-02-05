import Button from '../Button';

export default function MeetOurTeamSection() {
  return (
    <div className='general-padding py-20'>
      <div className='max-w-[40rem] mx-auto text-center'>
        <h3 className='section-heading'>Meet Our Team</h3>
        <p>Exceptional Talents, Exceptional Results</p>

        <p className='mt-10'>
          Get to know the faces behind our success. Our diverse team of software
          engineers, designers, and project managers is committed to delivering
          excellence.
        </p>
      </div>

      <div className='mt-12 flex items-center gap-4 max-w-[70rem] mx-auto'>
        <div className='grid grid-cols-3 gap-4 flex-1'>
          {[...Array(3)].map((_, idx) => {
            return (
              <div
                key={idx}
                className='rounded-2xl bg-grey dark:bg-secondary/10 px-3 py-4 h-fit'
              >
                <div className='h-[150px] w-[150px] mx-auto rounded-xl my-7 bg-gray-300 rotate-45'></div>

                <div className='mt-12'>
                  <div className='text-lg font-semibold'>Nelda S. Carter</div>
                  <div className='my-2 opacity-50'>Expertise</div>
                  <div>DevOps | JavaScript | Git | Node.js</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className='bg-black dark:bg-gray-400 rounded-2xl p-5 flex flex-col text-center items-center justify-center w-full max-w-[20rem]'>
          <img src='/favicon.png' alt='Active Tech Logo' className='w-16' />

          <p className='text-sm mt-5 text-white dark:text-black'>
            View More Of Our Team Members And Select Based On Which Member Fits
            Your Project
          </p>

          <Button className='mt-4 font-bold'>View Members</Button>
        </div>
      </div>
    </div>
  );
}
