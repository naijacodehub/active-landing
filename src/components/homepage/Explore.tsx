import { capabilities } from '../../constants/homepage';

export default function ExploreSection() {
  return (
    <div className='general-padding py-20'>
      <div className='max-w-[40rem] mx-auto text-center'>
        <h3 className='section-heading'>Explore Our Capabilities</h3>
        <p>
          Discover a world of possibilities with our diverse range of services.
          From software development to creative design, product management to
          project oversight, we've got you covered.
        </p>
      </div>

      <div className='mt-14 max-w-[55rem] mx-auto grid grid-cols-2 gap-3 gap-y-1'>
        {capabilities.map((item, idx) => {
          return (
            <div key={idx}>
              <div
                className={` ${
                  idx === 0 ? 'bg-primary text-white' : 'bg-pale-sky'
                } ${
                  (idx === 1 || idx === 3) && 'mt-3'
                } rounded-lg min-h-[12rem] p-5`}
              >
                <h5 className='card-heading mb-4'>{item.title}</h5>

                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
