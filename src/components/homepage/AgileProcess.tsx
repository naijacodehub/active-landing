import { agileProcesses, whyChooseAgile } from "../../constants/homepage";

export default function AgileProcessSection() {
  return (
    <div
      id="agile-process-section"
      className="general-padding py-8 md:py-12 overflow-x-hidden"
    >
      <div className="max-w-[100rem] mx-auto">
        <h3 className="section-heading">Our Methodology</h3>
        <h4 className="max-xxmd:text-sm">We're Lean and Agile</h4>

        <p className="mt-4 md:mt-6 max-xxmd:text-sm">
          We embrace the Lean methodology to deliver maximum value with minimal
          waste, focusing on rapid iterations and continuous improvement. Our
          Agile approach ensures flexibility and collaboration, allowing us to
          adapt quickly to your needs and deliver high-quality solutions
          efficiently. By combining these methodologies, we streamline the
          development process, enhance communication, and drive successful
          outcomes for your projects.
        </p>
      </div>

      {/* Desktop/Tablet Horizontal Layout */}
      <div className="mt-8 md:mt-12 mb-8 md:mb-12 hidden md:block">
        <div className="max-w-[90rem] mx-auto px-4">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary hidden xl:block"></div>

            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 lg:gap-6 relative">
              {agileProcesses.map((process, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  {/* Step Number Circle */}
                  <div className="relative z-10 flex-shrink-0 mb-4">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-lg ring-4 ring-white dark:ring-dark">
                      <span className="text-white font-bold text-lg lg:text-xl">
                        {idx + 1}
                      </span>
                    </div>
                    {/* Simple arrow indicator for smaller screens */}
                    {idx < agileProcesses.length - 1 && (
                      <div className="hidden xl:block absolute top-1/2 -right-6 translate-y-[-50%] w-0 h-0 border-l-[10px] border-l-secondary border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent"></div>
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="w-full">
                    <div className="bg-white dark:bg-dark border border-gray-200 dark:border-pale-sky/30 rounded-xl p-4 lg:p-5 shadow-sm hover:shadow-md transition-shadow h-full">
                      <h5 className="text-base lg:text-lg font-bold mb-2 text-center">
                        {process.title}
                      </h5>
                      <div className="space-y-1">
                        {process.desc.map((text, textIdx) => (
                          <p
                            key={textIdx}
                            className="text-xs lg:text-sm text-gray-600 dark:text-gray-300 text-center leading-relaxed"
                          >
                            {text}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Vertical Layout */}
      <div className="mt-8 md:mt-12 mb-8 md:mb-12 block md:hidden">
        <div className="max-w-[90rem] mx-auto">
          <div className="flex flex-col gap-6">
            {agileProcesses.map((process, idx) => (
              <div key={idx} className="flex gap-4">
                {/* Step Number Circle */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-base">
                      {idx + 1}
                    </span>
                  </div>
                  {/* Vertical Connector Line (except last item) */}
                  {idx < agileProcesses.length - 1 && (
                    <div className="w-0.5 h-full min-h-[60px] bg-gradient-to-b from-primary to-secondary mx-auto mt-2"></div>
                  )}
                </div>

                {/* Content Card */}
                <div className="flex-1 pt-1">
                  <div className="bg-white dark:bg-dark border border-gray-200 dark:border-pale-sky/30 rounded-xl p-4 shadow-sm">
                    <h5 className="text-base font-bold mb-2">
                      {process.title}
                    </h5>
                    <div className="space-y-1">
                      {process.desc.map((text, textIdx) => (
                        <p
                          key={textIdx}
                          className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
                        >
                          {text}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 md:mt-8">
        <h3 className="section-heading">Why Choose Agile with Active Tech</h3>
        <div className="my-4 md:my-5 grid grid-cols-1 mobile:grid-cols-2 smLaptop:grid-cols-3 gap-4 relative overflow-hidden">
          <div className="absolute rounded-md z-10 inset-0 bg-gradient-to-r from-transparent via-white/80 dark:via-black/60 to-transparent bg-no-repeat animate-slide"></div>
          {[...Array(3)].map((_, idx) => {
            return (
              <div
                key={idx}
                className={` 
                ${idx === 0 && "bg-primary max-smLaptop:hidden"} 
                ${idx === 1 && "bg-gradient-to-r from-primary to-secondary"} 
                ${idx === 2 && "bg-secondary max-mobile:hidden"}
                   h-2 rounded-md relative overflow-hidden `}
              ></div>
            );
          })}
        </div>

        <div className="mt-4 md:mt-6 grid grid-cols-1 mobile:grid-cols-2 smLaptop:grid-cols-3 gap-4 gap-y-4 md:gap-y-6">
          {whyChooseAgile.map((item, idx) => {
            return (
              <div
                key={idx}
                className="p-[1.5px] bg-gradient-to-r from-primary to-secondary rounded-2xl"
              >
                <div className="bg-white dark:bg-dark rounded-2xl h-full p-5">
                  <div className="card-heading">{item.title}</div>

                  <div className="mt-2 xxmd:mt-4 max-xxmd:text-sm">
                    {item.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
