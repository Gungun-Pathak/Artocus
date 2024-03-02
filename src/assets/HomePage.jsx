import React from "react";
function HomePage() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className=" flex w-3/4 ml-20">
          <div class="relative mt-0">
            <div class="-z-40  h-60 w-60  bg-[#8E8E8E] border-2 text-white p-4">
              Static Div
            </div>

            <div class="  absolute top-10 left-10 h-60 w-60 border-2 bg-[#8E8E8E] p-4">
              Absolute Div
            </div>
          </div>
          <div className="">
            <center>
              <p className=" text-white text-6xl mb-9 font-medium  ">
                "Elevate <span className="text-[#F46A5F]">Artistry"</span>
              </p>

              <p className="text-white text-6xl  font-medium">
                "Embrace Refinement."
              </p>
            </center>
          </div>
        </div>
        <div className="w-1/4"></div>
      </div>
    </>
  );
}
export default HomePage;
