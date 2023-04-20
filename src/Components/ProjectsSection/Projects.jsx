import { useState } from "react";
import CardProject from "./CardProject";
import { ProjectsData } from "./ProcjectsData";

export default function Projects() {
  const [items, setItems] = useState(ProjectsData);
  const [toggleState, setToggleState] = useState("All");

  const filterItem = (status) => {
    setItems(
      ProjectsData.filter((curElem) => {
        return curElem.status === status;
      })
    );
  };

  const toggleTab = (tab) => {
    setToggleState(tab);
  };

  return (
    <>
      <div className="mx-auto text-center max-w-lg transition-all delay-200 ease-in-out duration-200 animate-fade-in-up py-12 mt-12">
        <p className="text-[#348E38] font-bold text-xl mb-4">Our Projects</p>
        <h3 className="text-[#0F4229] text-5xl font-bold mb-12 leading-[3.3rem]">
          Some Of Our Wonderful Projects
        </h3>
        <div>
          <ul className="inline-block bg-[#e8f5e9] py-3 px-4 rounded">
            <li
              className={`${
                toggleState === "All"
                  ? "text-[#0f4229] border-[#0f4229]"
                  : " text-[#348e38] border-transparent"
              } inline-block font-medium hover:text-[#0f4229] border-b-2 hover:border-[#0f4229] cursor-pointer mx-2`}
              onClick={() => {
                setItems(ProjectsData);
                toggleTab("All");
              }}
            >
              All
            </li>
            <li
              className={`${
                toggleState === "completed"
                  ? "text-[#0f4229] border-[#0f4229]"
                  : "text-[#348e38] border-transparent"
              } inline-block font-medium hover:text-[#0f4229] border-b-2 hover:border-[#0f4229] cursor-pointer mx-2`}
              onClick={() => {
                filterItem("completed");
                toggleTab("completed");
              }}
            >
              Complete Projects
            </li>
            <li
              className={` ${
                toggleState === "ongoing"
                  ? "text-[#0f4229] border-[#0f4229]"
                  : " text-[#348e38] border-transparent"
              } inline-block font-medium hover:text-[#0f4229] border-b-2  hover:border-[#0f4229] cursor-pointer mx-2`}
              onClick={() => {
                filterItem("ongoing");
                toggleTab("ongoing");
              }}
            >
              Ongoing Projects
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <CardProject
            key={item.id}
            background={item.image}
            title={item.title}
          />
        ))}
      </div>
    </>
  );
}
