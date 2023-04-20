import ArrowRightNav from "../Icons/ArrowRightNav";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 py-2 sticky top-0 drop-shadow z-50">
      <div className="navbar-start w-[25%]">
        {/* Menu Icon */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="active:bg-[#348E38]">Home</a>
            </li>
            <li>
              <a className="active:bg-[#348E38]">About</a>
            </li>
            <li>
              <a className="active:bg-[#348E38]">Services</a>
            </li>
            <li>
              <a className="active:bg-[#348E38]">Projects</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between active:bg-[#348E38]">
                Pages
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="group p-2 z-10 bg-[#E8F5E9]">
                <li>
                  <a className="active:bg-[#348E38]">Features</a>
                </li>
                <li>
                  <a className="active:bg-[#348E38]">Free Quote</a>
                </li>
                <li>
                  <a className="active:bg-[#348E38]">Our Team</a>
                </li>
                <li>
                  <a className="active:bg-[#348E38]">Testimonial</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="active:bg-[#348E38]">Contact</a>
            </li>
          </ul>
        </div>

        <a className="btn btn-ghost normal-case text-4xl font-bold text-[#0F4229]">
          Gardener
        </a>
      </div>

      {/* Navbar (lg Screen) */}
      <div className="navbar-end w-[75%] hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="text-lg">
            <a className="active:bg-transparent active:text-[#348e38] hover:bg-transparent hover:text-[#348e38]">
              Home
            </a>
          </li>
          <li className="text-lg">
            <a className="active:bg-transparent active:text-[#348e38] hover:bg-transparent hover:text-[#348e38]">
              About
            </a>
          </li>
          <li className="text-lg">
            <a className="active:bg-transparent active:text-[#348e38] hover:bg-transparent hover:text-[#348e38]">
              Services
            </a>
          </li>
          <li className="text-lg">
            <a className="active:bg-transparent active:text-[#348e38] hover:bg-transparent hover:text-[#348e38]">
              Projects
            </a>
          </li>
          <li tabIndex={0} className="group text-lg">
            <a className="active:bg-[#348E38]">
              Pages
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 z-10 bg-[#E8F5E9] group-hover:animate-fade-in-up">
              <li>
                <a className="active:bg-[#348E38]">Features</a>
              </li>
              <li>
                <a className="active:bg-[#348E38]">Free Quote</a>
              </li>
              <li>
                <a className="active:bg-[#348E38]">Our Team</a>
              </li>
              <li>
                <a className="active:bg-[#348E38]">Testimonial</a>
              </li>
            </ul>
          </li>
          <li className="text-lg">
            <a className="active:bg-transparent active:text-[#348e38] hover:bg-transparent hover:text-[#348e38]">
              Contact
            </a>
          </li>
        </ul>
        <a className="bg-[#348E38] capitalize text-[#e8f5e9] px-6 py-4 rounded transition duration-500 hover:bg-[#529f56] hover:text-[#000] flex">
          Get A Quote
          <span className="pl-2">
            <ArrowRightNav />
          </span>
        </a>
      </div>
    </div>
  );
}
