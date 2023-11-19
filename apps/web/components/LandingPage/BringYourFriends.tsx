/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

const BringYourFriends = () => {
  return (
    <div className="flex justify-center items-center py-[4rem]">
      <div className="flex flex-col items-center justify-center gap-16 px-4">
        <img
          src={"/assets/landing-page/bring-your-friends-image.png"}
          alt={"Selfie Soltice"}
          width={1000}
          height={1000}
          className="w-full"
        />

        <div className="flex flex-col items-center max-w-[611px] grow gap-8">
          <h1 className="text-2xl sm:text-[56px] leading-tight font-bold">
            <span className="text-cNeutral-100">
              {" "}
              Bring your friends
              <br />
              and
            </span>

            <span className="text-[#e7e211]"> get rewarded</span>
          </h1>

          <p className="flex flex-col items-center justify-center gap-4 text-cNeutral-100 font-[spacegrotesk] text-base text-center">
            <span>
              By referring your friends to the Soltice Universe, you have the
              opportunity to earn a 20% commission on their Time Potion ($TPN)
              earnings.
            </span>
            <span>
              Note: To access and play Soltice Universe, a referral BEP-20
              address must be entered. Without a valid referral address, access
              to the platform is not possible.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BringYourFriends;
