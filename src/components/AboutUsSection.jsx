// AboutUsSection.js
import React from 'react';
import Text from 'components/Text';
import Img from 'components/Img';

const AboutUsSection = () => {
  return (
   <>
   
      {/* About Us Section */}
      <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto md:px-5 top-[44%] w-1/4">
        <Text
          className="sm:text-[40px] md:text-[46px] text-[50px] text-gray-900_b5"
          size="txtInterMedium50Gray900b5"
        >
          About Us
        </Text>
        <div className="bg-light_blue-500 h-2 w-full"></div>
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
   </>
  );
};

export default AboutUsSection;
