import React from "react";

import { Button, Img, List, Text } from "components";

const DesktopOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 font-inter h-[4280px] mx-auto pb-[452px] relative w-full">
        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
          <div className="h-[1024px] md:h-[1356px] sm:h-[932px] md:px-5 relative w-full">
            <div className="absolute md:h-[1356px] sm:h-[932px] h-[985px] inset-[0] justify-center m-auto w-full">
              <div className="absolute bottom-[0] md:h-[1356px] sm:h-[932px] h-[934px] inset-x-[0] mx-auto w-full">
                <div className="md:h-[1356px] sm:h-[932px] h-[934px] m-auto w-full">
                  <div className="bg-light_green-50 flex flex-col h-full items-start justify-start m-auto p-[183px] md:px-10 sm:px-5 w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 gap-[122px] items-start justify-start mb-[49px] ml-0.5 md:ml-[0] w-[92%] md:w-full">
                      <div className="flex flex-col gap-14 items-start justify-start md:mt-0 mt-4 w-[36%] md:w-full">
                        <Text
                          className="sm:text-[40px] md:text-[46px] text-[50px] text-gray-900_82"
                          size="txtInterMedium50"
                        >
                          <span className="text-gray-900_b5 font-inter text-left font-medium">
                            <>
                              PVGCOET ACM Student Chapter
                              <br />
                            </>
                          </span>
                          <span className="md:text-xl sm:text-lg text-gray-900_82 font-inter text-left text-[22px] font-medium">
                            <>
                              <br />
                            </>
                          </span>
                          <span className="md:text-xl sm:text-lg text-gray-500 font-inter text-left text-[22px] font-medium">
                            lorem ipsum lorem ipsum{" "}
                          </span>
                          <span className="md:text-xl sm:text-lg text-gray-500 font-inter text-left text-[22px] font-medium">
                            {" "}
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                          </span>
                        </Text>
                        <div className="flex flex-row gap-[53px] items-center justify-start md:ml-[0] ml-[3px] w-[85%] md:w-full">
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[119px] rounded-bl-[30px] rounded-tr-[30px] text-center text-sm"
                            color="light_blue_500"
                          >
                            Why Join
                          </Button>
                          <Button className="!text-light_blue-500 border border-light_blue-500 border-solid cursor-pointer font-light leading-[normal] min-w-[125px] rounded-bl-[30px] rounded-tr-[30px] text-center text-sm">
                            Newsletter
                          </Button>
                        </div>
                      </div>
                      <Img
                        className="h-[517px]"
                        src="images/img_circleoverlay.svg"
                        alt="circleoverlay"
                      />
                    </div>
                  </div>
                  <Img
                    className="absolute bottom-[0] h-[664px] object-cover right-[0]"
                    src="images/img_vector1.png"
                    alt="vectorOne"
                  />
                </div>
                <div className="absolute bg-blue_gray-100 flex flex-col h-[525px] sm:h-auto items-center justify-start right-[11%] rounded-[262px] top-[10%] w-[525px]">
                  <Img
                    className="h-[525px] md:h-auto rounded-[50%] w-[525px]"
                    src="images/img_acm01.png"
                    alt="acmOne"
                  />
                </div>
              </div>
              <Img
                className="absolute h-[183px] right-[1%] top-[0]"
                src="images/img_vector2.svg"
                alt="vectorTwo"
              />
            </div>
            <div className="absolute bg-light_green-50 flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-center justify-start mx-auto md:px-10 sm:px-5 px-[60px] top-[0] w-full">
              <Img
                className="md:flex-1 h-[90px] sm:h-auto object-cover w-[24%] md:w-full"
                src="images/img_acmlogo1.png"
                alt="acmlogoOne"
              />
              <Text
                className="ml-80 sm:ml-[0] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInterLight24"
              >
                Home
              </Text>
              <Text
                className="ml-11 sm:ml-[0] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInterLight24"
              >
                Events
              </Text>
              <Text
                className="sm:ml-[0] ml-[29px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInterLight24"
              >
                Our Team
              </Text>
              <Text
                className="sm:ml-[0] ml-[26px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInterLight24"
              >
                About Us
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[55px] md:px-5 w-1/4 md:w-full">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[50px] text-gray-900_b5"
              size="txtInterMedium50Gray900b5"
            >
              Our Events
            </Text>
            <div className="bg-light_blue-500 h-2 w-full"></div>
          </div>
          <List
            className="sm:flex-col flex-row md:gap-10 gap-[66px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1294px] mt-[88px] md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="bg-blue_gray-100 flex flex-1 flex-col items-center justify-start p-[23px] sm:px-5 rounded-[10px] shadow-bs w-full">
              <div className="bg-light_green-50 h-[181px] mt-[3px] rounded-[10px] w-full"></div>
              <Text
                className="mt-[22px] sm:text-[17px] md:text-[19px] text-[21px] text-gray-900_82 w-[98%] sm:w-full"
                size="txtInterMedium21"
              >
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum
              </Text>
              <Button
                className="border border-red-A400_ce border-solid cursor-pointer font-light leading-[normal] mb-[3px] min-w-[164px] mt-[18px] text-[15px] text-center"
                shape="round"
              >
                Read More
              </Button>
            </div>
            <div className="bg-blue_gray-100 flex flex-1 flex-col items-center justify-start p-[23px] sm:px-5 rounded-[10px] shadow-bs w-full">
              <div className="bg-light_green-50 h-[181px] mt-[3px] rounded-[10px] w-full"></div>
              <Text
                className="mt-[22px] sm:text-[17px] md:text-[19px] text-[21px] text-gray-900_82 w-[98%] sm:w-full"
                size="txtInterMedium21"
              >
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum
              </Text>
              <Button
                className="border border-red-A400_ce border-solid cursor-pointer font-light leading-[normal] mb-[3px] min-w-[164px] mt-[18px] text-[15px] text-center"
                shape="round"
              >
                Read More
              </Button>
            </div>
            <div className="bg-blue_gray-100 flex flex-1 flex-col items-center justify-start p-[23px] sm:px-5 rounded-[10px] shadow-bs w-full">
              <div className="bg-light_green-50 h-[181px] mt-[3px] rounded-[10px] w-full"></div>
              <Text
                className="mt-[22px] sm:text-[17px] md:text-[19px] text-[21px] text-gray-900_82 w-[98%] sm:w-full"
                size="txtInterMedium21"
              >
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum
              </Text>
              <Button
                className="border border-red-A400_ce border-solid cursor-pointer font-light leading-[normal] mb-[3px] min-w-[164px] mt-[18px] text-[15px] text-center"
                shape="round"
              >
                Read More
              </Button>
            </div>
          </List>
        </div>
        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto md:px-5 top-[44%] w-1/4">
          <Text
            className="sm:text-[40px] md:text-[46px] text-[50px] text-gray-900_b5"
            size="txtInterMedium50Gray900b5"
          >
            About Us
          </Text>
          <div className="bg-light_blue-500 h-2 w-full"></div>
        </div>
        <div className="absolute bottom-1/4 flex flex-col items-center justify-start md:px-5 right-[35%] w-1/4">
          <Text
            className="sm:text-[40px] md:text-[46px] text-[50px] text-gray-900_b5"
            size="txtInterMedium50Gray900b5"
          >
            Our Team
          </Text>
          <div className="bg-light_blue-500 h-2 w-full"></div>
        </div>
        <div className="absolute bottom-[11%] flex md:flex-col flex-row md:gap-10 inset-x-[0] items-center justify-between max-w-[1299px] mx-auto md:px-5 w-full">
          <div className="bg-light_blue-300 flex md:flex-1 flex-col items-center justify-end mb-0.5 pt-[15px] px-[15px] rounded-[10px] shadow-bs w-[30%] md:w-full">
            <div className="flex flex-col items-end justify-start mt-[11px] w-[98%] md:w-full">
              <div className="bg-blue_gray-100 h-[181px] mr-[9px] rounded-[10px] w-[98%]"></div>
              <div className="flex flex-row gap-[83px] items-start justify-end mt-[25px] w-[68%] md:w-full">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                    size="txtInterSemiBold36"
                  >
                    Name
                  </Text>
                  <Text
                    className="mt-1 sm:text-[17px] md:text-[19px] text-[21px] text-white-A700"
                    size="txtInterMedium21WhiteA700"
                  >
                    Role
                  </Text>
                </div>
                <Img
                  className="h-[53px] md:h-auto object-cover w-[53px]"
                  src="images/img_linkedinlogo1.png"
                  alt="linkedinlogoOne"
                />
              </div>
              <Text
                className="mt-[18px] sm:text-[17px] md:text-[19px] text-[21px] text-white-A700 w-[95%] sm:w-full"
                size="txtInterMedium21WhiteA700"
              >
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum
              </Text>
            </div>
          </div>
          <List
            className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[69px] grid md:grid-cols-1 grid-cols-2 w-[65%] md:w-full"
            orientation="horizontal"
          >
            <div className="bg-light_blue-300 flex flex-col items-end justify-end mb-0.5 sm:ml-[0] pt-[19px] px-[19px] rounded-[10px] shadow-bs w-full">
              <div className="bg-blue_gray-100 h-[181px] mr-[5px] mt-[7px] rounded-[10px] w-[98%]"></div>
              <Text
                className="mr-[131px] mt-[25px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                size="txtInterSemiBold36"
              >
                Name
              </Text>
              <Text
                className="mr-[157px] mt-1 sm:text-[17px] md:text-[19px] text-[21px] text-white-A700"
                size="txtInterMedium21WhiteA700"
              >
                Role
              </Text>
              <Text
                className="mt-[18px] sm:text-[17px] md:text-[19px] text-[21px] text-white-A700 w-[95%] sm:w-full"
                size="txtInterMedium21WhiteA700"
              >
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum
              </Text>
            </div>
            <div className="bg-light_blue-300 flex flex-col items-end justify-end sm:ml-[0] sm:mt-0 mt-0.5 pt-[19px] px-[19px] rounded-[10px] shadow-bs w-full">
              <div className="bg-blue_gray-100 h-[181px] mr-[5px] mt-[7px] rounded-[10px] w-[98%]"></div>
              <Text
                className="mr-[131px] mt-[25px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                size="txtInterSemiBold36"
              >
                Name
              </Text>
              <Text
                className="mr-[157px] mt-1 sm:text-[17px] md:text-[19px] text-[21px] text-white-A700"
                size="txtInterMedium21WhiteA700"
              >
                Role
              </Text>
              <Text
                className="mt-[18px] sm:text-[17px] md:text-[19px] text-[21px] text-white-A700 w-[95%] sm:w-full"
                size="txtInterMedium21WhiteA700"
              >
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum
              </Text>
            </div>
          </List>
        </div>
        <div className="absolute bottom-[34%] flex md:flex-col flex-row md:gap-[49px] items-start justify-between left-[3%] md:px-5 w-[48%]">
          <div className="md:h-[524px] h-[674px] relative w-[92%] md:w-full">
            <Img
              className="absolute h-[299px] left-[0] top-[0]"
              src="images/img_rectangle17.svg"
              alt="rectangleSeventeen"
            />
            <div className="absolute bg-blue_gray-100 bottom-[0] flex flex-col items-center justify-start right-[0] w-[83%]">
              <Img
                className="h-[524px] md:h-auto object-cover w-full"
                src="images/img_acmback21.png"
                alt="acmbackTwentyOne"
              />
            </div>
          </div>
          <div className="bg-blue_gray-100 h-[696px] md:mt-0 mt-[75px] rounded w-[2%]"></div>
        </div>
        <div className="absolute bottom-[31%] md:h-[513px] h-[734px] md:px-5 right-[4%] w-2/5 sm:w-full">
          <Img
            className="absolute bottom-[0] h-[322px] right-[0]"
            src="images/img_rectangle21.svg"
            alt="rectangleTwentyOne"
          />
          <Text
            className="absolute left-[0] sm:text-[23px] md:text-[25px] text-[27px] text-black-900 top-[0] w-[84%] sm:w-full"
            size="txtInterMedium27"
          >
            <span className="text-black-900 font-inter text-left font-medium">
              <>
                ACM is the world&#39;s largest educational and scientific
                computing society, aimed at increasing the level and visibility
                of ACM activities across the globe. ACM is a society of
                dedicated professionals, academicians, and research scientists,
                who contribute towards the growth of technological innovations.
                The purpose of Society is to inculcate computational thinking
                aiding in career development and a lifelong learning experience.{" "}
              </>
            </span>
            <span className="text-light_blue-500 font-inter text-left font-medium">
              Read More..
            </span>
          </Text>
        </div>
        <Img
          className="absolute bottom-1/4 h-[363px] left-[3%] object-cover w-[8%]"
          src="images/img_acmoverlay01.png"
          alt="acmoverlayOne"
        />
        <Img
          className="absolute h-[363px] object-cover right-[3%] top-[43%] w-[8%]"
          src="images/img_acmoverlay02.png"
          alt="acmoverlayTwo"
        />
      </div>
    </>
  );
};

export default DesktopOnePage;
