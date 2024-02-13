import HireTalentForm from '../components/forms/HireTalent';

export default function HireATalentPage() {
  return (
    <div className='py-12 md:py-20 general-padding'>
      <div className='flex items-center '>
        <div className='max-w-[35rem]'>
          <div className='text-4xl font-bold mb-3'>Hire A Talent Today</div>
          <div className='my-6 max-xxmd:text-sm'>
            Active tech is your gateway to highly skilled talents across the
            globe. We specialize in providing top-tier talent for a variety of
            services, including development.
          </div>
        </div>

        <div className=' flex-1'>
          <HireTalentForm />
        </div>
      </div>
    </div>
  );
}
