import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faBriefcase, faCertificate } from '@fortawesome/free-solid-svg-icons';
import whySagaraImage from '../assets/img/why-sagara.jpeg';

const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-8 max-w-screen-xl mx-auto">
      <div className="flex flex-col gap-6 p-4 justify-center items-start ml-20">
        <h2 className="font-bold text-2xl lg:text-4xl text-[#A51535]">WHY SAGARA IT SERTIFICATION</h2>
        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faGlobe} className="w-6 h-6 text-[#A51535]" />
          <div>
            <h4 className="text-lg font-semibold text-[#A51535]">Global Credibility Boost</h4>
            <p className="text-base text-[#666]">
              Our certifications are globally recognized, enhancing your credibility, and opening doors to new opportunities.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faBriefcase} className="w-6 h-6 text-[#A51535]" />
          <div>
            <h4 className="text-lg font-semibold text-[#A51535]">Empowering Careers</h4>
            <p className="text-base text-[#666]">
              Equipped to advance your career, secure promotions, and pursue new job opportunities in the ever-evolving tech industry.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faCertificate} className="w-6 h-6 text-[#A51535]" />
          <div>
            <h4 className="text-lg font-semibold text-[#A51535]">Expertise Validation</h4>
            <p className="text-base text-[#666]">
              Showcase your expertise and validate your skills with globally recognized certifications that employers trust.
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex items-center justify-center p-4">
        <div className="relative w-[370px] h-[300px] overflow-hidden rounded-md">
          <img
            src={whySagaraImage}
            alt="Why Sagara"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'bottom left', transform: 'scale(1.2)'}}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#A51535] via-transparent to-transparent opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default Features;
