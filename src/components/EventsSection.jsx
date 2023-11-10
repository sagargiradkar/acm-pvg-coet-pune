// EventsSection.js
import React from 'react';
import List from 'components/List';
import Text from 'components/Text';
import Button from 'components/Button';

const EventsSection = () => {
  return (
   <>
         {/* Events Section */}
         <div className="flex flex-col items-center justify-start mt-[55px] md:px-5 w-1/4 md:w-full">
          <Text
            className="sm:text-[40px] md:text-[46px] text-[50px] text-gray-900_b5"
            size="txtInterMedium50Gray900b5"
          >
            Our Events
          </Text>
          <div className="bg-light_blue-500 h-2 w-full"></div>
        </div>
        {/* Events List */}
        <List
          className="sm:flex-col flex-row md:gap-10 gap-[66px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1294px] mt-[88px] md:px-5 w-full"
          orientation="horizontal"
        >
          {/* Event 1 */}
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
          {/* Event 2 */}
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
          {/* Event 3 */}
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
   </>
  );
};

export default EventsSection;
