import { whyChooseActiveTech } from '../../constants/homepage';
import { useTheme } from '../../context/theme-provider';

export default function WhyChooseSection() {
  const { theme } = useTheme();
  return (
    <div className='general-padding py-20'>
      <div className='max-w-[35rem]'>
        <h3 className='section-heading'>Why Choose Active Tech</h3>
        <p>
          At Active Tech, we prioritize delivering performant software solutions
          without breaking the bank. Here's why you should choose us
        </p>
      </div>

      <div className='mt-32 grid grid-cols-3 gap-2'>
        {whyChooseActiveTech.map((item, idx) => {
          return (
            <div className='bg-pale-sky rounded-lg relative p-5' key={idx}>
              <img
                src={theme === 'dark' ? item.darkImgSrc : item.lightImgSrc}
                alt='Active Tech vectors'
                className='w-24 -mt-16'
              />

              <p className='mt-4'>{item.desc}</p>
              <h6 className='mt-2 card-heading'>{item.title}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
}
