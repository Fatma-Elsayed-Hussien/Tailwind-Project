import Plus from "../../Icons/Plus";

export default function CardService({ title, icon, background }) {
  return (
    <div className="group relative max-w-[26rem] mx-auto bg-white rounded-xl shadow-lg sm:flex-col sm:items-center transition-all delay-200 ease-in-out duration-200 animate-fade-in-up">
      <div className="absolute w-full h-full top-0 left-0 overflow-hidden z-10 rounded-xl">
        <img
          src={background}
          alt="background"
          className="absolute left-0 w-full h-full object-cover transition duration-500 invisible group-hover:visible scale-125 group-hover:scale-100"
        />
      </div>
      <div className="group-hover:bg-[#0f422999] w-full h-full py-12 px-12 sm:py-12 rounded-xl relative z-10">
        <div className="mx-auto h-[6.2rem] w-[6.2rem] sm:shrink-0 mb-6 group-hover:bg-[#e8f5e9] rounded-full flex justify-center items-center transition-all duration-500">
          <img
            className="flex items-center justify-center max-w-full h-auto"
            src={icon}
            alt="icon"
          />
        </div>
        <div className="text-center sm:text-center transition-all duration-200">
          <div>
            <p className="text-2xl text-[#0F4229] font-semibold mb-4 group-hover:text-white">
              {title}
            </p>
            <p className="text-slate-600 mb-6 text-lg group-hover:text-white">
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam sed stet.
            </p>
          </div>
          <button className="bg-[#e8f5e9] text-[#0f4229] rounded font-medium text-sm py-1 px-2 inline-flex items-center w-8 h-8 overflow-hidden group-hover:w-28 whitespace-nowrap transition-all ease-in-out duration-300">
            <Plus />
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}
