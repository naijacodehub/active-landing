import Button from '../Button';

export default function ElevateProjects() {
  return (
    <div className='general-padding py-20'>
      <div className='max-w-[60rem] mx-auto bg-dark dark:bg-secondary/10 rounded-2xl px-5 py-12 relative'>
        <img
          src='/Images/top-right-vector.png'
          alt='Active Tech Vectors'
          className='w-[18rem] absolute top-0 right-0 rounded-tr-2xl'
        />
        <img
          src='/Images/bottom-left-vector.png'
          alt='Active Tech Vectors'
          className='w-[18rem] absolute bottom-0 left-0'
        />

        <div className='max-w-[35rem] mx-auto text-center text-white'>
          <div className='section-heading'>Ready to Elevate Your Projects?</div>
          <div className='my-6'>
            Reach out to us today and let's embark on a journey of excellence
            together. Your next project deserves the best!
          </div>

          <Button className='mt-6 mx-auto !text-base h-12 px-8 font-bold'>
            Hire A Talent Now
          </Button>
        </div>
      </div>
    </div>
  );
}
