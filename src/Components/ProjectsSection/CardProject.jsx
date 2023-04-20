import Eye from "../../Icons/Eye";
import Link from "../../Icons/Link";

export default function CardProject({ background, title }) {
  return (
    <div className="group relative max-w-[26rem] mx-auto bg-white rounded-md sm:flex-col sm:items-center transition-all delay-200 ease-in-out duration-200 animate-fade-in-up">
      <div className="relative overflow-hidden">
        <div className="before:group-hover:w-[50%] before:w-0 before:content-[''] before:bg-[#0f422999] before:absolute before:left-0 before:top-0 before:h-full before:rounded-tl-md before:rounded-bl-md after:group-hover:w-[50%] after:w-0 after:content-[''] after:bg-[#0f422999] after:absolute after:right-0 after:top-0 after:h-full after:rounded-tr-md after:rounded-br-md before:transition-all after:transition-all before:duration-500 after:duration-500">
          <img
            src={background}
            alt="background"
            className="w-full h-auto object-cover rounded-md"
          />
          <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition duration-500 group-hover:delay-300">
            <h4 className="text-white text-2xl font-semibold mb-6 ">{title}</h4>
            <div className="flex transition-all duration-500">
              <button className="btn btn-circle border-none outline-none bg-[#e8f5e9] text-[#348e38] hover:bg-[#348e38] hover:text-[#e8f5e9] flex justify-center items-center mr-2 transition-all duration-500 group-hover:delay-100">
                <Eye />
              </button>
              <button className="btn btn-circle border-none outline-none bg-[#e8f5e9] text-[#348e38] hover:bg-[#348e38] hover:text-[#e8f5e9] flex justify-center items-center ml-2 transition-all duration-500 group-hover:delay-100">
                <Link />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
