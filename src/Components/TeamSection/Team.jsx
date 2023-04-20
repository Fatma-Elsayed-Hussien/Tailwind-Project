import CardTeam from "./CardTeam";

export default function Team() {
  return (
    <>
      <div className="mx-auto text-center max-w-lg transition-all delay-200 ease-in-out duration-200 animate-fade-in-up py-12 mt-12">
        <p className="text-[#348E38] font-bold text-xl mb-4">Our Team</p>
        <h3 className="text-[#0F4229] text-5xl font-bold mb-12 leading-[3.3rem]">
          Dedicated & Experienced Team Members
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xl:grid-cols-3">
        <CardTeam
          background={"https://themewagon.github.io/gardener/img/team-1.jpg"}
          name={"Doris Jordan"}
          job={"Landscape Designer"}
        />
        <CardTeam
          background={"https://themewagon.github.io/gardener/img/team-2.jpg"}
          name={"Johnny Ramirez"}
          job={"Garden Designer"}
        />
        <CardTeam
          background={"https://themewagon.github.io/gardener/img/team-3.jpg"}
          name={"Diana Wagner"}
          job={"Senior Gardener"}
        />
      </div>
    </>
  );
}
