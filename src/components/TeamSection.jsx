// TeamSection.js
import React from 'react';
import List from 'components/List';
import Text from 'components/Text';
import Img from 'components/Img';

const TeamSection = () => {
  return (
    <>
        {/* Team Section */}
        <div className="absolute bottom-1/4 flex flex-col items-center justify-start md:px-5 right-[35%] w-1/4">
        <Text
          className="sm:text-[40px] md:text-[46px] text-[50px] text-gray-900_b5"
          size="txtInterMedium50Gray900b5"
        >
          Our Team
        </Text>
        <div className="bg-light_blue-500 h-2 w-full"></div>
      </div>
      {/* Team Members Section */}
      <div className="absolute bottom-[11%] flex md:flex-col flex-row md:gap-10 inset-x-[0] items-center justify-between max-w-[1299px] mx-auto md:px-5 w-full">
        {/* Team Member 1 */}
        <div className="bg-light_blue-300 flex md:flex-1 flex-col items-center justify-end mb-0.5 pt-[15px] px-[15px] rounded-[10px] shadow-bs w-[30%] md:w-full">
          <div className="flex flex-col items-end justify-start mt-[11px] w-[98%] md:w-full">
            <div className="bg-blue_gray-100 h-[181px] mr-[9px] rounded-[10px] w-[98%]"></div>
            <div className="flex flex-row gap-[83px] items-start justify-end mt-[25px] w-[68%] md:w-full">
              <div className="flex flex-col items-center justify-start">
                {/* Team Member Name and Role */}
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
              {/* LinkedIn Logo */}
              <Img
                className="h-[53px] md:h-auto object-cover w-[53px]"
                src="images/img_linkedinlogo1.png"
                alt="linkedinlogoOne"
              />
            </div>
            {/* Team Member Bio */}
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
        {/* Team Members List */}
        <List
          className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[69px] grid md:grid-cols-1 grid-cols-2 w-[65%] md:w-full"
          orientation="horizontal"
        >
          {/* Team Member 2 */}
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
    </>
  );
};

export default TeamSection;
