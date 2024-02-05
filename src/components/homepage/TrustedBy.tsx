export default function TrustedBySection() {
  return (
    <div
      id='clients-section'
      className='general-padding py-12 md:py-20 flex max-md:flex-col items-center'
    >
      <div className='flex-1 lgMobile:text-center md:text-left'>
        <div className='max-w-[35rem] mx-auto '>
          <h3 className='section-heading'>
            Trusted by Leading <br /> Businesses
          </h3>
          <p className='my-4 xxmd:my-7 max-xxmd:text-sm'>
            Clients and Businesses
          </p>

          <p className='max-xxmd:text-sm'>
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
          className='w-[25rem] mobile:w-[28rem] md:w-[35rem] mx-auto'
        />
      </div>
    </div>
  );
}
