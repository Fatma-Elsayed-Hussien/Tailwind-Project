import Facebook from "../../Icons/Facebook";
import Instagram from "../../Icons/Instagram";
import Twitter from "../../Icons/Twitter";

export default function CardProjects({ background, name, job }) {
  return (
    <div className="group relative max-w-[26rem] mx-auto bg-white rounded-md sm:flex-col sm:items-center transition-all delay-200 ease-in-out duration-200 animate-fade-in-up">
      <div className="relative overflow-hidden">
        <img
          src={background}
          alt="background"
          className="w-full h-auto object-cover rounded-md"
        />
        <div className="absolute bottom-11 w-[80%] bg-white p-6 rounded-tr-md rounded-br-md -left-[100%] group-hover:left-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <h4 className="text-[#0F4229] text-2xl font-bold">{name}</h4>
          <p className="text-[#348E38] text-lg mb-4">{job}</p>
          <div className="flex">
            <button className="btn btn-circle border-none outline-none bg-[#e8f5e9] text-[#348e38] hover:bg-[#348e38] hover:text-[#e8f5e9] flex justify-center items-center mr-2 transition-all duration-500 group-hover:delay-100">
              <Facebook />
            </button>
            <button className="btn btn-circle border-none outline-none bg-[#e8f5e9] text-[#348e38] hover:bg-[#348e38] hover:text-[#e8f5e9] flex justify-center items-center ml-2 transition-all duration-500 group-hover:delay-100">
              <Twitter />
            </button>
            <button className="btn btn-circle border-none outline-none bg-[#e8f5e9] text-[#348e38] hover:bg-[#348e38] hover:text-[#e8f5e9] flex justify-center items-center ml-2 transition-all duration-500 group-hover:delay-100">
              <Instagram />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
