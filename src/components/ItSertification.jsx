export default function ItSertification(){
  return (
    <div className="grid grid-cols-1 md:grid-cols-8 gap-8 px-4 py-8 max-w-screen-xl mx-auto">
      <div className="md:col-span-3 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold border-t-4 border-[#000000] pt-4 mt-4">
          ABOUT
        </h2>
      </div>
      <div className="md:col-span-5 flex flex-col justify-center gap-4">
        <h3 className="text-lg font-semibold text-[#A51535]">
          SAGARA IT CERTIFICATION
        </h3>
        <p className="text-2xl lg:text-4xl font-semibold bg-gradient-to-r from-[#353535] via-[#353535] to-[#A51535] bg-clip-text text-transparent">
          <span className="text-[#A51535]">Join thousands</span> of professionals who have elevated their skills and carved out success in the technology industry. Start your journey to excellence with us today!
        </p>
        <p className="text-lg text-[#9E9E9E]">
          Boost your career prospects in the digital era with industry-recognized information technology certifications from Sagara IT Certification.
        </p>
      </div>
    </div>
  );
};

