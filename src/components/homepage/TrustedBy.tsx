export default function TrustedBySection() {
  return (
    <div className='general-padding py-20 flex items-center'>
      <div className='flex-1'>
        <div className='max-w-[35rem] mx-auto '>
          <h3 className='section-heading'>
            Trusted by Leading <br /> Businesses
          </h3>
          <p className='my-7'>Clients and Businesses</p>

          <p>
            We're proud to be trusted by reputable clients and businesses across
            various industries. Our collaborative approach and commitment to
            quality have earned us their trust.
          </p>
        </div>
      </div>
      <div className='flex-1'>
        <img
          src='/Images/companyGroup.png'
          alt='Companies who trust Active Tech'
          className='w-[35rem] mx-auto'
        />
      </div>
    </div>
  );
}
