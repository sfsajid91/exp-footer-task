import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";

export const Box = () => {
  // Location data for mapping
  const locations = [
    "Nederweert",
    "Breda",
    "Den Bosch",
    "Steenwiijk",
    "Sittard",
  ];

  return (
    <div className="w-full h-screen">
      <div className="relative w-full h-full ">
        <div className="relative h-full overflow-hidden">
          {/* Background elements */}
          <img
            className="absolute w-[1440px] h-[750px] top-0 left-20"
            alt="Rectangle"
            src="/rectangle-18383.svg"
          />
          <img
            className="absolute w-[418px] h-[717px] top-0 left-0"
            alt="Vector"
            src="/vector-4.svg"
          />
          <img
            className="absolute w-[220px] h-[377px] top-[413px] left-[1335px]"
            alt="Vector"
            src="/vector.svg"
          />
          <img
            className="absolute w-[1240px] h-px top-[223px] left-[180px] object-cover"
            alt="Vector"
            src="/vector-315.svg"
          />

          {/* Main content container */}
          <div className="absolute w-[1246px] h-[624px] top-[50px] left-[180px]">
            {/* Newsletter signup section */}
            <div className="flex flex-col w-[514px] items-start gap-[15px] absolute top-0 left-0">
              <div className="relative self-stretch h-[52px] mt-[-1.00px] [font-family:'Aeonik-Medium',Helvetica] font-medium text-white text-5xl tracking-[-2.40px] leading-[63px] whitespace-nowrap">
                Stay informed.
              </div>
              <div className="relative self-stretch h-[59px] [font-family:'Aeonik-Regular',Helvetica] font-normal text-[#949494] text-[17.3px] tracking-[0] leading-[20.8px]">
                Enter your email address and stay informed of the latest news,
                developments and useful tips for your wallet, among other
                things.
              </div>
              <div className="absolute w-[194px] h-[5px] top-[42px] left-[92px] bg-[#37d153] rounded-[20px]" />
            </div>

            {/* Form inputs */}
            <div className="absolute w-[405px] h-[92px] top-[17px] left-[839px]">
              <Card className="absolute w-[401px] h-[41px] top-0 left-0 bg-[#efefef] rounded-md border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className="absolute w-[89px] top-2.5 left-[17px] [font-family:'Aeonik-Regular',Helvetica] font-normal text-transparent text-base tracking-[-0.16px] leading-[normal]">
                    <span className="text-[#011503] tracking-[-0.03px]">
                      First name
                    </span>
                    <span className="text-[#ed1515] tracking-[-0.03px]">*</span>
                  </div>
                </CardContent>
              </Card>

              <img
                className="absolute w-[42px] h-[41px] top-[51px] left-[359px]"
                alt="Frame"
                src="/frame-1321314924.svg"
              />

              <Card className="absolute w-[348px] h-[41px] top-[51px] left-0 bg-[#efefef] rounded-md border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className="absolute w-[46px] top-2.5 left-4 [font-family:'Aeonik-Regular',Helvetica] font-normal text-transparent text-base tracking-[-0.16px] leading-[normal]">
                    <span className="text-[#011503] tracking-[-0.03px]">
                      Email
                    </span>
                    <span className="text-[#f00e0e] tracking-[-0.03px]">*</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Discover Us section */}
            <div className="absolute w-[158px] h-[271px] top-[221px] left-[486px]">
              <div className="absolute top-0 left-0 [font-family:'Aeonik-Regular',Helvetica] font-normal text-white text-[22px] tracking-[-0.22px] leading-[normal] whitespace-nowrap">
                Discover Us
              </div>
              <div className="absolute top-14 left-0 [font-family:'Aeonik-Regular',Helvetica] font-normal text-white text-lg tracking-[-0.18px] leading-[42.9px]">
                About us <br />
                Knowledge Center <br />
                Knowledge articles <br />
                Service plan <br />
                Working at
              </div>
            </div>

            {/* Contact section */}
            <div className="absolute w-[152px] h-[153px] top-[221px] left-[247px]">
              <div className="absolute top-0 left-0 [font-family:'Aeonik-Regular',Helvetica] font-normal text-white text-[22px] tracking-[-0.22px] leading-[normal] whitespace-nowrap">
                Contact
              </div>
              <div className="absolute top-14 left-0 [font-family:'Aeonik-Regular',Helvetica] font-normal text-white text-lg tracking-[-0.18px] leading-[42.9px] whitespace-nowrap">
                Direct contact
              </div>
              <div className="absolute w-36 h-[54px] top-[99px] left-0">
                <div className="absolute w-36 h-[15px] top-[39px] left-0 [font-family:'Aeonik-Regular',Helvetica] font-normal text-[#37d153] text-xs tracking-[-0.12px] leading-[42.9px] whitespace-nowrap">
                  Available from 9:00 to 17:00
                </div>
                <div className="absolute top-0 left-0 [font-family:'Aeonik-Bold',Helvetica] font-bold text-white text-xl tracking-[-0.20px] leading-[42.9px] whitespace-nowrap">
                  0486 - 831400
                </div>
              </div>
            </div>

            {/* Locations section */}
            <div className="absolute top-[221px] left-0 [font-family:'Aeonik-Regular',Helvetica] font-normal text-white text-[22px] tracking-[-0.22px] leading-[normal] whitespace-nowrap">
              Locations
            </div>
            <div className="absolute top-[277px] left-0 [font-family:'Aeonik-Regular',Helvetica] font-normal text-white text-lg tracking-[-0.18px] leading-[42.9px]">
              Charging Stations
              <br />
              BV
            </div>

            {/* Location list with icons */}
            <div className="absolute w-[154px] h-[151px] top-[391px] left-0">
              <div className="absolute w-[126px] top-0 left-[26px] [font-family:'Aeonik-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-[34.5px]">
                {locations.map((location, index) => (
                  <React.Fragment key={index}>
                    {location}
                    <br />
                  </React.Fragment>
                ))}
              </div>

              {/* Location markers */}
              {locations.map((_, index) => (
                <div
                  key={index}
                  className="absolute w-3.5 h-3.5 top-[1px] left-0 bg-[#37d153] rounded-[3px]"
                  style={{ top: `${index * 34 + 1}px` }}
                >
                  <img
                    className="absolute w-1.5 h-2.5 top-0.5 left-1"
                    alt="Vector"
                    src="/vector-9.svg"
                  />
                </div>
              ))}
            </div>

            {/* Quality Marks section */}
            <div className="absolute w-[507px] h-[276px] top-[221px] left-[735px]">
              <Separator className="absolute w-[505px] h-px top-48 left-0" />

              <div className="absolute top-0 left-[15px] [font-family:'Aeonik-Regular',Helvetica] font-normal text-white text-[22px] tracking-[-0.22px] leading-[normal] whitespace-nowrap">
                Quality Marks
              </div>

              {/* First row of quality marks */}
              <div className="absolute w-[101px] h-9 top-14 left-0">
                <img
                  className="absolute w-[71px] h-9 top-0 left-[15px]"
                  alt="Group"
                  src="/group.png"
                />
              </div>

              <div className="absolute w-[100px] h-9 top-14 left-[127px]">
                <div className="relative w-8 h-9 left-[34px] bg-[url(/group-1.png)] bg-[100%_100%]" />
              </div>

              <div className="absolute w-[100px] h-9 top-14 left-[253px]">
                <div className="relative w-[95px] h-8 top-0.5 left-0.5">
                  <div className="absolute w-[61px] h-[31px] top-px left-[35px]">
                    <div className="absolute w-[21px] h-[5px] top-0 left-0 bg-[url(/group-3.png)] bg-[100%_100%]" />
                    <img
                      className="absolute w-0.5 h-0.5 top-2 left-9"
                      alt="Vector"
                      src="/vector-2.svg"
                    />
                    <div className="absolute w-[13px] h-[9px] top-2 left-0">
                      <img
                        className="absolute w-[7px] h-[9px] top-0 left-0"
                        alt="Vector"
                        src="/vector-13.svg"
                      />
                      <img
                        className="absolute w-1.5 h-[7px] top-[3px] left-[7px]"
                        alt="Vector"
                        src="/vector-14.svg"
                      />
                    </div>
                    <img
                      className="absolute w-1.5 h-[7px] top-[11px] left-3.5"
                      alt="Vector"
                      src="/vector-8.svg"
                    />
                    <img
                      className="absolute w-1.5 h-[9px] top-2 left-[21px]"
                      alt="Vector"
                      src="/vector-23.svg"
                    />
                    <img
                      className="absolute w-1.5 h-[7px] top-[11px] left-[29px]"
                      alt="Vector"
                      src="/vector-3.svg"
                    />
                    <img
                      className="absolute w-0.5 h-[7px] top-[11px] left-9"
                      alt="Vector"
                      src="/vector-2.svg"
                    />
                    <img
                      className="absolute w-1.5 h-[7px] top-[11px] left-[39px]"
                      alt="Vector"
                      src="/vector-6.svg"
                    />
                    <img
                      className="absolute w-1.5 h-[9px] top-2 left-[47px]"
                      alt="Vector"
                      src="/vector-7.svg"
                    />
                    <img
                      className="absolute w-[7px] h-[9px] top-[21px] left-px"
                      alt="Vector"
                      src="/vector-5.svg"
                    />
                    <img
                      className="absolute w-1.5 h-[7px] top-6 left-[9px]"
                      alt="Vector"
                      src="/vector-15.svg"
                    />
                    <img
                      className="absolute w-1.5 h-[9px] top-[21px] left-[17px]"
                      alt="Vector"
                      src="/vector-18.svg"
                    />
                    <img
                      className="absolute w-1.5 h-[7px] top-6 left-6"
                      alt="Vector"
                      src="/vector-15.svg"
                    />
                    <img
                      className="absolute w-1 h-[7px] top-6 left-8"
                      alt="Vector"
                      src="/vector-21.svg"
                    />
                    <img
                      className="absolute w-0.5 h-[9px] top-[21px] left-[37px]"
                      alt="Vector"
                      src="/vector-2.svg"
                    />
                    <img
                      className="absolute w-1.5 h-[7px] top-6 left-10"
                      alt="Vector"
                      src="/vector-19.svg"
                    />
                    <img
                      className="absolute w-1.5 h-[7px] top-6 left-[47px]"
                      alt="Vector"
                      src="/vector-25.svg"
                    />
                    <img
                      className="absolute w-1.5 h-[9px] top-[21px] left-[54px]"
                      alt="Vector"
                      src="/vector-30.svg"
                    />
                  </div>
                  <img
                    className="absolute w-8 h-8 top-0 left-0"
                    alt="Group"
                    src="/group-2.png"
                  />
                </div>
              </div>

              <div className="absolute w-[100px] h-9 top-14 left-[379px] overflow-hidden">
                <div className="relative w-[88px] h-9 left-1.5">
                  <div className="absolute w-[33px] h-9 top-0 left-0 bg-[url(/group-5.png)] bg-[100%_100%]" />
                  <img
                    className="absolute w-[47px] h-[17px] top-[9px] left-[41px]"
                    alt="Group"
                    src="/group-4.png"
                  />
                </div>
              </div>

              {/* Second row of quality marks */}
              <img
                className="absolute w-[100px] h-9 top-32 left-0"
                alt="Storage"
                src="/storage-keurmerk3-1.svg"
              />

              <div className="absolute w-[100px] h-9 top-32 left-[135px]">
                <div className="relative w-[98px] h-8 top-0.5 left-px">
                  <div className="absolute w-[30px] h-8 top-0 left-0">
                    <div className="relative h-8">
                      <div className="absolute w-[30px] h-8 top-0 left-0 bg-[url(/mask-by-clip-2-2-.png)] bg-[100%_100%]">
                        <div className="relative w-[29px] h-[25px] top-[3px]">
                          <img
                            className="absolute w-1.5 h-0.5 top-[23px] left-[9px]"
                            alt="Fill"
                            src="/fill-4-2-.svg"
                          />
                          <img
                            className="absolute w-[18px] h-[22px] top-0 left-1"
                            alt="Fill"
                            src="/fill-6-2-.svg"
                          />
                          <img
                            className="absolute w-2.5 h-5 top-0 left-[3px]"
                            alt="Fill"
                            src="/fill-8-2-.svg"
                          />
                          <img
                            className="absolute w-[5px] h-3.5 top-2.5 left-0"
                            alt="Fill"
                            src="/fill-10-2-.svg"
                          />
                          <img
                            className="absolute w-[26px] h-[18px] top-2 left-[3px]"
                            alt="Fill"
                            src="/fill-12-2-.svg"
                          />
                        </div>
                      </div>
                      <img
                        className="absolute w-[26px] h-[25px] top-0.5 left-0.5"
                        alt="Group"
                        src="/group-7.png"
                      />
                      <img
                        className="absolute w-[19px] h-5 top-1.5 left-1.5"
                        alt="Group"
                        src="/group-8.png"
                      />
                    </div>
                  </div>
                  <div className="absolute w-[60px] h-[29px] top-0 left-[38px]">
                    <img
                      className="absolute w-2.5 h-[13px] top-0 left-0"
                      alt="Fill"
                      src="/fill-42-2-.svg"
                    />
                    <img
                      className="absolute w-[60px] h-[29px] top-0 left-0"
                      alt="Group"
                      src="/group-6.png"
                    />
                  </div>
                </div>
              </div>

              {/* Third row of quality marks */}
              <div className="absolute w-[88px] h-[63px] top-[213px] left-[15px]">
                <div className="relative w-[85px] h-11 top-[9px] left-0.5">
                  <div className="relative h-11">
                    <img
                      className="absolute w-[66px] h-px top-[15px] left-[19px]"
                      alt="Vector"
                      src="/vector-26.svg"
                    />
                    <div className="absolute w-[85px] h-[31px] top-[7px] left-0">
                      <img
                        className="absolute w-[68px] h-px top-6 left-4"
                        alt="Vector"
                        src="/vector-26.svg"
                      />
                      <img
                        className="absolute w-4 h-[31px] top-0 left-0"
                        alt="Vector"
                        src="/vector-27.svg"
                      />
                    </div>
                    <img
                      className="absolute w-[59px] h-[11px] top-[18px] left-[19px]"
                      alt="Group"
                      src="/group-9.png"
                    />
                    <img
                      className="absolute w-[27px] h-2 top-9 left-5"
                      alt="Group"
                      src="/group-10.png"
                    />
                    <img
                      className="absolute w-5 h-[13px] top-0 left-[19px]"
                      alt="Group"
                      src="/group-11.png"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute w-[88px] h-[63px] top-[213px] left-40">
                <div className="relative w-[85px] h-11 top-[9px] left-0.5">
                  <div className="relative h-11">
                    <img
                      className="absolute w-[66px] h-px top-[15px] left-[19px]"
                      alt="Vector"
                      src="/vector-1.svg"
                    />
                    <div className="absolute w-[85px] h-[31px] top-[7px] left-0">
                      <img
                        className="absolute w-[69px] h-px top-6 left-4"
                        alt="Vector"
                        src="/vector-1.svg"
                      />
                      <img
                        className="absolute w-4 h-[31px] top-0 left-0"
                        alt="Vector"
                        src="/vector-27.svg"
                      />
                    </div>
                    <img
                      className="absolute w-[59px] h-[11px] top-[18px] left-[19px]"
                      alt="Group"
                      src="/group-12.png"
                    />
                    <img
                      className="absolute w-5 h-[13px] top-0 left-[19px]"
                      alt="Group"
                      src="/group-13.png"
                    />
                    <img
                      className="absolute w-6 h-2 top-9 left-5"
                      alt="Group"
                      src="/group-14.png"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright text */}
            <div className="absolute top-[607px] left-[455px] [font-family:'Aeonik-Regular',Helvetica] font-normal text-[#8d8d8d] text-sm tracking-[-0.14px] leading-[normal]">
              © Copyright 2025 Charging station. All rights reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
