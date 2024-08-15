import heroImage from '../assets/img/hero-img.png';

export default function Hero(){
  return (
    <section
      className="relative bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${heroImage})`, maxHeight: '484px' }}
    >
      <div className="absolute inset-0 bg-black opacity-40" aria-hidden="true"></div>
      <div className="relative px-4 mx-auto max-w-screen-xl text-left py-24 lg:py-32 flex items-center">
        <div className="max-w-2xl ml-10 pl-10">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Live Your Best Life
          Using Your Strengths
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl">
          Meet some of the people who have completed the Sagara Technology and use their results to maximize their potential at work and everywhere else.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-start sm:space-y-0">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#A51535] hover:bg-[#8e1218] focus:ring-4 focus:ring-[#A51535]/50"
            >
              Get Sertification
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
