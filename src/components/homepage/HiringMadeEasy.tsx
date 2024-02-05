import { hiringMadeEasy } from '../../constants/homepage';

export default function HiringMadeEasySection() {
  return (
    <div className='general-padding py-20'>
      <div className='max-w-[35rem]'>
        <h3 className='section-heading'>Hiring Made Easy</h3>
        <p>Quick And Easy, Explore Our Hiring Process</p>
      </div>

      <div className='mt-28 grid grid-cols-4'>
        {hiringMadeEasy.map((item, idx) => {
          return (
            <div className='p-5 border-t dark:border-pale-sky/50 border-dashed relative text-center'>
              <img
                src='/Images/normalOverlay.png'
                alt='Active Tech Vector'
                className='w-10 absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2'
              />

              <div className='mt-5 card-heading'>{item.title}</div>
              <div className='mt-3'>{item.desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
