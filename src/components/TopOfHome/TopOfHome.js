import React from "react";
import cover from "../../images/cover1.jpg";

const TopOfHome = () => {
  return (
    <div className="mx-16 my-5">
      <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <h1 className="max-w-lg mb-6 text-2xl font-semibold  text-emerald-600 sm:text-4xl sm:leading-none">
                Knowledge is Power
              </h1>
              <p className="text-base text-black md:text-lg">
                For increase your Programming Knowledge you need to explore more
                about program related topics. <br />
                Play these online games to test your general knowledge. Hope it
                will be very interesting!!
              </p>
            </div>
            <div className="items-center md:flex-row">
              <button className="btn btn-accent text-[18px] font-normal hover:btn-error">
                Let's Play
              </button>
            </div>
          </div>
        </div>
        <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <img
            className="object-cover w-full h-full rounded shadow-lg lg:rounded-md lg:shadow sm:h-96 lg:h-full"
            src={cover}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TopOfHome;
