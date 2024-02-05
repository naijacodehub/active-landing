export default function Testimonials() {
  return (
    <div className='general-padding py-20'>
      <div className='max-w-[30rem] mx-auto text-center'>
        <h3 className='section-heading'>What Our Clients Say</h3>

        <p className='mt-6'>
          Curious about the experiences of our satisfied clients? Here's what
          they have to say
        </p>
      </div>

      <div className='mt-20'>
        <div className='grid grid-cols-3 gap-4'>
          {[...Array(3)].map((_, idx) => {
            return (
              <div
                key={idx}
                className='rounded-2xl bg-grey dark:bg-secondary/10 px-3 py-4 relative'
              >
                {idx === 0 && (
                  <img
                    src='/Images/message.png'
                    alt='Active Tech Vectors'
                    className='w-14 absolute top-0 -translate-y-1/2 left-4'
                  />
                )}
                <div className='mt-8'>
                  <div>
                    Working with Active Tech was a game-changer for our project.
                  </div>
                  <div className='text-lg font-semibold mt-4'>
                    Nelda S. Carter
                  </div>
                  <div className='opacity-50'>Chief Executive Officer</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
