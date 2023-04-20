import Location from "../Icons/Location";
import Phone from "../Icons/Phone";
import Email from "../Icons/Email";
import Facebook from "../Icons/Facebook";
import Twitter from "../Icons/Twitter";
import Youtube from "../Icons/Youtube";
import Linkedin from "../Icons/Linkedin";
import ArrowRight from "../Icons/ArrowRight";

export default function Footer() {
  return (
    <footer className="footer p-10 bg-[#0F4229] text-neutral-content">
      <div>
        <h4 className="capitalize text-white font-bold text-2xl mb-2">Our Office</h4>
        <p className="text-[#e8f5e9] flex mb-2 tracking-wide font-medium"><span className="mr-3"> <Location /> </span> 123 Street, New York, USA</p>
        <p className="text-[#e8f5e9] flex mb-2 tracking-wide font-medium"><span className="mr-3"> <Phone /> </span> +012 345 67890</p>
        <p className="text-[#e8f5e9] flex mb-2 tracking-wide font-medium"> <span className="mr-3"> <Email /> </span> info@example.com</p>
        <div className="text-[#e8f5e9] flex gap-2 pt-1">
            <button className="p-2 border border-[#e8f5e9] rounded-full hover:bg-white hover:text-black transition-all duration-500"> <Twitter /> </button>
            <button className="p-2 border border-[#e8f5e9] rounded-full hover:bg-white hover:text-black transition-all duration-500"> <Facebook /> </button>
            <button className="p-2 border border-[#e8f5e9] rounded-full hover:bg-white hover:text-black transition-all duration-500"> <Youtube /> </button>
            <button className="p-2 border border-[#e8f5e9] rounded-full hover:bg-white hover:text-black transition-all duration-500"> <Linkedin /> </button>
        </div>
      </div>
      <div>
        <h4 className="capitalize text-white font-bold text-2xl mb-2">Services</h4>
        <p className="text-[#e8f5e9] flex hover:text-[#348e38] hover:tracking-widest tracking-wide hover:cursor-pointer transition-all duration-300 font-medium"> <span className="mr-1"> <ArrowRight /> </span> Landscaping</p>
        <p className="text-[#e8f5e9] flex hover:text-[#348e38] hover:tracking-widest tracking-wide hover:cursor-pointer transition-all duration-300 font-medium"> <span className="mr-1"> <ArrowRight /> </span> Pruning plants</p>
        <p className="text-[#e8f5e9] flex hover:text-[#348e38] hover:tracking-widest tracking-wide hover:cursor-pointer transition-all duration-300 font-medium"> <span className="mr-1"> <ArrowRight /> </span> Urban Gardening</p>
        <p className="text-[#e8f5e9] flex hover:text-[#348e38] hover:tracking-widest tracking-wide hover:cursor-pointer transition-all duration-300 font-medium"> <span className="mr-1"> <ArrowRight /> </span> Garden Maintenance</p>
        <p className="text-[#e8f5e9] flex hover:text-[#348e38] hover:tracking-widest tracking-wide hover:cursor-pointer transition-all duration-300 font-medium"> <span className="mr-1"> <ArrowRight /> </span> Green Technology</p>
      </div>
      <div>
        <h4 className="capitalize text-white font-bold text-2xl mb-2">Quick Links</h4>
        <p className="text-[#e8f5e9] flex hover:text-[#348e38] hover:tracking-widest tracking-wide hover:cursor-pointer transition-all duration-300 font-medium"> <span className="mr-1"> <ArrowRight /> </span> About Us</p>
        <p className="text-[#e8f5e9] flex hover:text-[#348e38] hover:tracking-widest tracking-wide hover:cursor-pointer transition-all duration-300 font-medium"> <span className="mr-1"> <ArrowRight /> </span> Contact Us</p>
        <p className="text-[#e8f5e9] flex hover:text-[#348e38] hover:tracking-widest tracking-wide hover:cursor-pointer transition-all duration-300 font-medium"> <span className="mr-1"> <ArrowRight /> </span> Our Services</p>
        <p className="text-[#e8f5e9] flex hover:text-[#348e38] hover:tracking-widest tracking-wide hover:cursor-pointer transition-all duration-300 font-medium"> <span className="mr-1"> <ArrowRight /> </span> Terms & Condition</p>
        <p className="text-[#e8f5e9] flex hover:text-[#348e38] hover:tracking-widest tracking-wide hover:cursor-pointer transition-all duration-300 font-medium"> <span className="mr-1"> <ArrowRight /> </span> Support</p>
      </div>
      <div>
        <h4 className="capitalize text-white font-bold text-2xl mb-2">Newsletter</h4>
        <p className="text-[#e8f5e9] font-medium mb-4 tracking-wide">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
        <div className="form-control w-80">
          {/* <label className="label">
            <span className="label-text">Enter your email address</span>
          </label> */}
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16"
            />
            <button className="bg-[#348E38] text-[#e8f5e9] h-full px-6 transition-all duration-500 hover:bg-[#529f56] hover:text-[#000] absolute top-0 right-0 rounded-l-none rounded-r-md text-base font-medium">
              SignUp
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
