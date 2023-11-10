import React from 'react';
import Text from 'components/Text';
import Button from 'components/Button';
import Img from 'components/Img';
import List from './List';

const HeaderSection = () => {
  return (
    <div className="bg-white-A700 font-inter h-[50vh] mx-auto  relative w-full">
      {/* ACM Chapter Introduction */}
      <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
        <div className="h-[1024px] md:h-[1356px] sm:h-[932px] md:px-5 relative w-full">
          <div className="absolute md:h-[1356px] sm:h-[932px] h-[985px] inset-[0] justify-center m-auto w-full">
            {/* Main Content Area */}
            <div className="absolute bottom-[0] md:h-[1356px] sm:h-[932px] h-[934px] inset-x-[0] mx-auto w-full">
              <div className="md:h-[1356px] sm:h-[932px] h-[934px] m-auto w-full">
                {/* Main Content Background */}
                <div className="bg-light_green-50 flex flex-col h-full items-start justify-start m-auto p-[183px] md:px-10 sm:px-5 w-full">
                  {/* Main Content Text */}
                  <div className="flex md:flex-col flex-row md:gap-10 gap-[122px] items-start justify-start mb-[49px] ml-0.5 md:ml-[0] w-[92%] md:w-full">
                    {/* Main Text Content */}
                    <div className="flex flex-col gap-14 items-start justify-start md:mt-0 mt-4 w-[36%] md:w-full">
                      <Text
                        className="sm:text-[40px] md:text-[46px] text-[50px] text-gray-900_82"
                        size="txtInterMedium50"
                      >
                        {/* Chapter Title */}
                        <span className="text-gray-900_b5 font-inter text-left font-medium">
                          PVGCOET ACM Student Chapter
                          <br />
                        </span>
                        {/* Line Breaks for Spacing */}
                        <span className="md:text-xl sm:text-lg text-gray-900_82 font-inter text-left text-[22px] font-medium">
                          <br />
                        </span>
                        {/* Placeholder Text */}
                        <span className="md:text-xl sm:text-lg text-gray-500 font-inter text-left text-[22px] font-medium">
                          lorem ipsum lorem ipsum{" "}
                        </span>
                        <span className="md:text-xl sm:text-lg text-gray-500 font-inter text-left text-[22px] font-medium">
                          {" "}
                          lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        </span>
                      </Text>
                      {/* Action Buttons */}
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
                    {/* ACM Logo Image */}
                    <Img
                      className="h-[500px]"
                      src="images/img_circleoverlay.svg"
                      alt="circleoverlay"
                    />
                  </div>
                </div>
                {/* Background Vector Image */}
                <Img
                  className="absolute bottom-[0] h-[664px] object-cover right-[0]"
                  src="images/img_vector1.png"
                  alt="vectorOne"
                />
              </div>
              {/* ACM Chapter Image Circle*/}
              <div className="absolute bg-blue_gray-100 flex flex-col h-[525px] sm:h-auto items-center justify-start right-[11%] rounded-[262px] top-[10%] w-[525px]">
                <Img
                  className="h-[525px] md:h-auto rounded-[50%] w-[525px]"
                  src="images/img_acm01.png"
                  alt="acmOne"
                />
              </div>
            </div>
            {/* Vector Image */}
            <Img
              className="absolute h-[183px] right-[1%] top-[0]"
              src="images/img_vector2.svg"
              alt="vectorTwo"
            />
          </div>
          {/* Navigation Links */}
          <div className="absolute bg-light_green-50 flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-center justify-start mx-auto md:px-10 sm:px-5 px-[60px] top-[0] w-full">
            {/* ACM Logo */}
            <Img
              className="md:flex-1 h-[90px] sm:h-auto object-cover w-[24%] md:w-full"
              src="images/img_acmlogo1.png"
              alt="acmlogoOne"
            />
            {/* Navigation Text Links */}
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
      </div>
    </div>
  );
};

export default HeaderSection;
