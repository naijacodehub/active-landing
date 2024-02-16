import OutsourceProjectForm from '../components/forms/OutsourceProject';

export default function OutsourceProjectPage() {
  return (
    <div className='py-12 md:py-20 general-padding'>
      <div className='flex flex-col items-center space-y-6 '>
        <div className='max-w-[35rem] mx-auto text-center'>
          <div className='text-2xl lgMobile:text-3xl xxmd:text-4xl font-bold mb-3'>
            Outsource Your Project
          </div>
          <div className='my-3 lgMobile:my-6 max-xxmd:text-sm'>
            Active tech is your gateway to highly skilled talents across the
            globe. We specialize in providing top-tier talent for a variety of
            services, including development.
          </div>
        </div>

        <OutsourceProjectForm />
      </div>
    </div>
  );
}
