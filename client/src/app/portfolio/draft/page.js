import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="bg-black py-20">
      <div className="bg-white p-6 md:p-10 mx-[12%] md:rounded-[50px] rounded-3xl">
        <div className="flex flex-col gap-12 md:flex-row md:gap-24 md:items-center">
          <img src="/images/FlexFret.png" />
          <div className="md:space-y-20 space-y-6">
            <p className="text-MobileHeader1">FlexFret</p>
            <p >
              I designed a comprehensive UI/UX for a stadium reservation app,
              focusing on enabling users to book football stadiums or join
              existing matches. The project included creating a full design
              system with a cohesive color palette, typography, and reusable UI
              components, as well as establishing a clear visual hierarchy and
              app architecture for intuitive navigation. The result is a
              user-friendly platform that simplifies the process of reserving
              stadiums or joining games, tailored for football enthusiasts.
            </p>
            <div className="flex flex-col items-start md:flex-row md:gap-9 md:items-center">
            <p className="md:text-Header3 text-MobileHeader3 text-nowrap">
              Link :
            </p>
            <span className="text-p text-wrap text-[#5E3AEE] hover:text-opacity-80">
                <Link href="https://www.figma.com/design/maJ0NtTNrUGbjGPaoG4h3h/reservation-foot?t=HGOzC9payeZNDiO9-0">
                  Click here to see design
                </Link>
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
