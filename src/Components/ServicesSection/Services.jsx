import CardService from "./CardService";

export default function Services() {
  return (
    <>
      <div className="mx-auto text-center max-w-lg transition-all delay-200 ease-in-out duration-200 animate-fade-in-up">
        <p className="text-[#348E38] font-bold text-xl mb-4">Our Services</p>
        <h3 className="text-[#0F4229] text-5xl font-bold mb-12 leading-[3.3rem]">
          Services That We Offer For You
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xl:grid-cols-3">
        <CardService
          title={"Landscaping"}
          icon={"https://themewagon.github.io/gardener/img/icon/icon-3.png"}
          background={"https://themewagon.github.io/gardener/img/service-1.jpg"}
        />
        <CardService
          title={"Pruning plants"}
          icon={"https://themewagon.github.io/gardener/img/icon/icon-6.png"}
          background={"https://themewagon.github.io/gardener/img/service-2.jpg"}
        />
        <CardService
          title={"Irrigation & Drainage"}
          icon={"https://themewagon.github.io/gardener/img/icon/icon-5.png"}
          background={"https://themewagon.github.io/gardener/img/service-3.jpg"}
        />
        <CardService
          title={"Garden Maintenance"}
          icon={"https://themewagon.github.io/gardener/img/icon/icon-4.png"}
          background={"https://themewagon.github.io/gardener/img/service-4.jpg"}
        />
        <CardService
          title={"Green Technology"}
          icon={"https://themewagon.github.io/gardener/img/icon/icon-8.png"}
          background={"https://themewagon.github.io/gardener/img/service-5.jpg"}
        />
        <CardService
          title={"Urban Gardening"}
          icon={"https://themewagon.github.io/gardener/img/icon/icon-2.png"}
          background={"https://themewagon.github.io/gardener/img/service-6.jpg"}
        />
      </div>
    </>
  );
}
