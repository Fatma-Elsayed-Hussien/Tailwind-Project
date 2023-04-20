import Cancel from "../Icons/Cancel";
import Phone from "../Icons/Phone";
import Group from "../Icons/group";

export default function Features() {
  return (
    <>
      <div className="container mx-auto px-4 flex justify-center items-center py-10 mb-auto flex-col w-full h-full">
        <div className="grid grid-cols-1 gap-0 lg:gap-10 xl:gap-10 md:gap-0 sm:gap-0  lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xl:grid-cols-3">
          {/* Item 1 */}
          <div className="px-12 py-6 max-w-[30rem] lg:max-w-[25rem] xl:max-w-[25rem] mx-auto bg-white rounded-none lg:rounded-xl xl:rounded-xl shadow-lg flex items-start space-x-4">
            <div className="shrink-0 bg-[#e8f5e9] text-[#348E38] p-3 rounded-full">
              <Cancel />
            </div>
            <div>
              <div className="text-2xl font-semibold text-[#0F4229] mb-1">
                No Hidden Cost
              </div>
              <p className="text-[#525368]">
                Clita erat ipsum lorem sit sed stet duo justo
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="px-12 py-6 max-w-[30rem] lg:max-w-[25rem] xl:max-w-[25rem] mx-auto bg-white rounded-none lg:rounded-xl xl:rounded-xl shadow-lg flex items-start space-x-4">
            <div className="shrink-0 bg-[#e8f5e9] text-[#348E38] p-3 rounded-full">
              <Group />
            </div>
            <div>
              <div className="text-2xl font-semibold text-[#0F4229] mb-1">
                Dedicated Team
              </div>
              <p className="text-[#525368]">
                Clita erat ipsum lorem sit sed stet duo justo
              </p>
            </div>
          </div>
            {/* Item 3 */}
          <div className="px-12 py-6  max-w-[30rem] lg:max-w-[25rem] xl:max-w-[25rem] mx-auto bg-white rounded-none lg:rounded-xl xl:rounded-xl shadow-lg flex items-start space-x-4">
            <div className="shrink-0 bg-[#e8f5e9] text-[#348E38] p-3 rounded-full">
              <Phone />
            </div>
            <div>
              <div className="text-2xl font-semibold text-[#0F4229] mb-1">
                24/7 Available
              </div>
              <p className="text-[#525368]">
                Clita erat ipsum lorem sit sed stet duo justo
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
